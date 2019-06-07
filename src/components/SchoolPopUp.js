import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import SchoolContent from "./SchoolContent";

class SchoolPopUp extends Component {
  state = {};

  handleClose = event => {
    this.props.onClose();
  };

  render() {
    let openStyle = {
      display: "none"
    };

    if (this.props.open) {
      openStyle = {
        display: "block"
      };
    }

    return (
      <Paper
        style={openStyle}
      >
        <DialogContent>
          <SchoolContent school={this.props.school} />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Paper>
    );
  }
}

export default SchoolPopUp;
