import React, { Component } from "react";
import fire from "./firebase";
import { Link } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Loader from "./Loader";
import SchoolContent from "./SchoolContent";
import AppTitleBar from "./AppTitleBar";

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
    this.state = { schools: [], isLoading: true };
  }

  componentWillMount() {
    let messagesRef = fire
      .database()
      .ref()
      .orderByKey()
      .limitToLast(100);

    messagesRef.on("value", function(snapshot) {
      let list = [];
      snapshot.forEach(function(school) {
        let schoolRow = school.val()
        // Cities row is converted from string to array, to allow proper filtering.
        schoolRow.cities = schoolRow.cities.split(",").map(item => item.trim());
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
            "Sorry, there is no matching data to display"
          )
        }
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <SchoolContent school={this.state.schools[rowMeta.dataIndex]} />
            </TableCell>
          </TableRow>
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
          title={<AppTitleBar/>}
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
