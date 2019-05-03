import React, { Component } from "react";
import fire from "./firebase";
import { Link } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Loader from "./Loader";
import SchoolContent from "./SchoolContent";
import AppTitleBar from "./AppTitleBar";
import ToolbarExtra from "./ToolbarExtra";

// Note: When adding new columns, if the column indexes change, then we need to review the "Show Column" hack, see index.css.
const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
      sortDirection: "desc",
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Link
            href={tableMeta.rowData[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </Link>
        );
      }
    }
  },
  {
    name: "website",
    label: "Website",
    options: {
      filter: false,
      sort: false,
      display: "excluded"
    }
  },
  {
    name: "locations",
    label: "Locations",
    options: {
      display: true,
      filter: false,
      sort: false
    }
  },
  {
    name: "cities",
    label: "Locations",
    options: {
      filter: true,
      display: false,
      sort: false,
      customBodyRender: (cities) => {
        return cities.map( (val, key) => {
            return val;
        });
      },
    }
  },
  {
    name: "free",
    label: "Free",
    options: {
      filter: true,
      sort: false,
      display: "excluded"
    }
  },
  {
    name: "cost",
    label: "Cost",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return value === 0 ? "-" : value;
      }
    }
  },
  {
    name: "courseLength",
    label: "Duration (Months)",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "accreditation",
    label: "Accreditation",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "accreditationFilter",
    label: "Accreditation",
    options: {
      filter: true,
      display: false
    }
  },
  {
    name: "stipend",
    label: "Stipend",
    options: {
      sort: false,
      filter: false,
      display: false
    }
  },
  {
    name: "stipendFilter",
    label: "Stipend",
    options: {
      filter: true,
      display: false
    }
  },
  {
    name: "acceptanceRequirements",
    label: "Acceptance Requirements",
    options: {
      sort: false,
      filter: false,
      display: false
    }
  },
  {
    name: "technologies",
    label: "Technologies",
    options: {
      sort: false,
      filter: false,
      display: false
    }
  },
];


class SchoolTable extends Component {
  constructor(props) {
    super(props);
    this.state = { schools: [], hiddenSchools: [], isLoading: true };
  }

  likeClick(school) {
    // Use localstorage to manage favourites.
    var favorites = JSON.parse(localStorage.getItem('csd-likes')) || [];

    var id = school.key;

    // return if target doesn't have an id (shouldn't happen)
    if (!id) return;

    let index = favorites.indexOf(id);
    // It doesn't exist yet, so add it.
    if (index === -1) {
      favorites.push(id);
      // Boolean values don't work in this context, so we use a string instead.
      school.liked = 'true';
    } else {
      // It already exists, so remove it.
      favorites.splice(index, 1);
      school.liked = 'false';
    }
    // Store array (converted to string) in local storage.
    localStorage.setItem('csd-likes', JSON.stringify(favorites));

    this.setState(prevState => {
      const schools = prevState.schools.map((item, j) => {
        if (item.key === school.key) {
          return school;
        } else {
          return item;
        }
      });

      return {
        schools,
      };
    });

    return;
  }

  toggleShowLiked() {
    // When likes are toggled, we hide all other schools in a separate list.
    // These lists are merged again to show all schools.
    this.setState(prevState => {
      if (prevState.hiddenSchools.length === 0) {
        const schools = prevState.schools.filter((item) => item.liked === "true");
        const hiddenSchools = prevState.schools.filter((item) => item.liked === "false");
        return {
          schools, hiddenSchools
        };
      } else {
        const schools = prevState.schools.concat(prevState.hiddenSchools);
        const hiddenSchools = [];
        return {
          schools, hiddenSchools
        };
      }
    });
  }

  componentWillMount() {
    let messagesRef = fire
      .database()
      .ref()
      .orderByKey()
      .limitToLast(100);

    messagesRef.on("value", function(snapshot) {
      // We have received the data from Firebase.
      // Now we make any transformations needed before passing to the data table.

      let list = [];
      // Load user favorites from local storage if they exist.
      var favorites = JSON.parse(localStorage.getItem('csd-likes')) || [];

      snapshot.forEach(function(school) {
        let schoolRow = school.val()
        // Convert cities row from string to array, to allow proper filtering.
        schoolRow.cities = schoolRow.cities.split(",").map(item => item.trim());

        // Apply favourites from localstorage to data.
        let index = favorites.indexOf(schoolRow.key);
        if (index === -1) {
          schoolRow.liked = 'false';
        } else {
          schoolRow.liked = 'true';
        }
        list.push(schoolRow);
      });

      this.setState({ schools: list, isLoading: false });
    }.bind(this));
  }

  render() {
    const options = {
      pagination: false,
      selectableRows: false,
      expandableRows: true,
      onCellClick: (cellIndex, rowIndex) => {
        console.log("todo: expand/collapse " + cellIndex, rowIndex);
      },
      textLabels: {
        body: {
          noMatch: this.state.isLoading ? (
            <Loader />
          ) : (
            <strong>No items to show. Try changing the filters you have set.</strong>
          )
        }
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <SchoolContent school={this.state.schools[rowMeta.dataIndex]} likeClick={this.likeClick.bind(this)} />
            </TableCell>
          </TableRow>
        );

      },
      customToolbar: () => {
        let active = false;
        // We determine if Like button is active, by looking for items in hiddenSchool list.
        if (this.state.hiddenSchools.length > 0) {
          active = true;
        }

        return (
          <ToolbarExtra active={active} onClick={this.toggleShowLiked.bind(this)} />
        );
      },
      setRowProps: (row) => {
        return {
          className: 'schoolRow',
        };
      }
    };

    const style = {
      margin: "16px"
    };

    return (
      <div id='tableContainer'>
        <MUIDataTable
          title={<AppTitleBar toggleLikesClick={this.toggleShowLiked.bind(this)}/>}
          style={style}
          data={this.state.schools}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default SchoolTable;
