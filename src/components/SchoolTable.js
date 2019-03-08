import React, { Component } from "react";
import fire from "./firebase";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MUIDataTable from "mui-datatables";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const styles = theme => ({
  paper: {
    padding: `5px 10px`
  }
});

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
    name: "email",
    label: "Email",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        );
      }
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
    name: "stipend",
    label: "Stipend",
    options: {
      filter: true,
      sort: false
    }
  }
];

class SchoolTable extends Component {
  constructor(props) {
    super(props);
    this.state = { schools: [] };
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

      that.setState({ schools: list });
    });
  }

  render() {
    const options = {
      pagination: false,
      selectableRows: false,
      expandableRows: true,
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

    return (
      <MUIDataTable
        data={this.state.schools}
        columns={columns}
        options={options}
      />
    );
  }
}

export default withStyles(styles)(SchoolTable);
