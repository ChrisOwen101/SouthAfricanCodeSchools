import React, { Component } from "react";
import fire from "./firebase";
import Checkbox from "@material-ui/core/Checkbox";
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Loader from "./Loader";

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
      sortDirection: "asc",
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <a
            href={tableMeta.rowData[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
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
      filter: true,
      sort: false
    }
  },
  {
    name: "free",
    label: "Free",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <Checkbox disabled checked={value} />;
      }
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
    label: "Course Length (Months)",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "accreditation",
    label: "Accreditation",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "stipend",
    label: "Stipend",
    options: {
      filter: true,
      sort: false,
      display: false
    }
  }
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

    var that = this;

    messagesRef.on("value", function(snapshot) {
      let list = [];
      snapshot.forEach(function(school) {
        list.push(school.val());
      });

      that.setState({ schools: list, isLoading: false });
    });
  }

  render() {
    const options = {
      pagination: false,
      selectableRows: false,
      expandableRows: true,
      textLabels: {
        body: {
            noMatch: this.state.isLoading ?
                <Loader/> :
                'Sorry, there is no matching data to display',
        },
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              {this.state.schools[rowMeta.dataIndex].programName}
            </TableCell>
          </TableRow>
        );
      }
    };

    const style = {
      padding: "20px"
    };

    return (
      <div style={style}>
        <MUIDataTable
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
