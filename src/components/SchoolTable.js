import React, { Component } from "react";
import fire from "./firebase";
import { Link } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Loader from "./Loader";
import SchoolPopUp from "./SchoolPopUp";

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
    this.state = {
      schools: [],
      isLoading: true,
      popUpOpen: false,
      selectedSchool: {}
    };
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

  onPopUpClose = event => {
    this.setState({ popUpOpen: false });
  };

  render() {
    const options = {
      pagination: false,
      selectableRows: false,
      expandableRows: false,
      textLabels: {
        body: {
          noMatch: this.state.isLoading ? (
            <Loader />
          ) : (
            "Sorry, there is no matching data to display"
          )
        }
      },
      onRowClick: (rowData, rowMeta) => {
        this.setState({
          popUpOpen: true,
          selectedSchool: this.state.schools[rowMeta.dataIndex]
        });
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
      <div style={style}>
        <MUIDataTable
          style={style}
          data={this.state.schools}
          columns={columns}
          options={options}
        />
        <SchoolPopUp
          open={this.state.popUpOpen}
          school={this.state.selectedSchool}
          onClose={this.onPopUpClose}
        />
      </div>
    );
  }
}

export default SchoolTable;
