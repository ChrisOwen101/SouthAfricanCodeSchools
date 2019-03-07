import React, { Component } from "react";
import fire from "./firebase";
import Checkbox from "@material-ui/core/Checkbox";

import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "programName",
    label: "Name",
    options: {
      filter: false,
      sort: true,
      sortDirection: "asc",
      customBodyRender: (value, tableMeta, updateValue) => {
        console.log(tableMeta.rowData);
        return (
          <a href={tableMeta.rowData} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      }
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
    name: "location",
    label: "Location",
    options: {
      filter: false,
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
        console.log(value);
        return <Checkbox disabled checked={value} />;
      }
    }
  },
  {
    name: "cost",
    label: "Cost",
    options: {
      filter: false,
      sort: true
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
    name: "physical",
    label: "Physical Location",
    options: {
      filter: true,
      sort: false
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

const options = {
  pagination: false,
  selectableRows: false
};

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
    return (
      <MUIDataTable
        data={this.state.schools}
        columns={columns}
        options={options}
      />
    );
  }
}

export default SchoolTable;
