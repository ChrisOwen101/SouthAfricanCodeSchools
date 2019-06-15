import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import SchoolContent from "./SchoolContent";
import DownIcon from '@material-ui/icons/ArrowDownward';

class SchoolPopUp extends Component {
  state = {};

  handleClose = event => {
    this.props.onClose();
  };

  handleScroll = event => {
    document.getElementById('appTitleBar').scrollIntoView();
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
          <SchoolContent school={this.props.school} schoolKey="top"/>
        </DialogContent>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          style={{textAlign:"center", width:"100%"}}
          onClick={this.handleScroll}
        >
          See Other Schools
          <DownIcon/>
        </Button>
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
