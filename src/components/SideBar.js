import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { schools: [] };
  }

  render() {
    return (
      <div>
        <Paper>
          <p>Hello</p>
        </Paper>
      </div>
    );
  }
}

export default SideBar;
