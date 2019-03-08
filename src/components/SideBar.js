import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      padding: "16px"
    };

    return (
      <div>
        <Paper style={style}>
          <p>Hello</p>
        </Paper>
      </div>
    );
  }
}

export default SideBar;
