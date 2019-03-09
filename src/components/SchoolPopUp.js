import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EmailCell from "./tablecells/EmailCell";

class SchoolPopUp extends Component {
  state = {
    fullWidth: true,
    maxWidth: "sm"
  };

  handleMaxWidthChange = event => {
    this.setState({ maxWidth: event.target.value });
  };

  handleFullWidthChange = event => {
    this.setState({ fullWidth: event.target.checked });
  };

  handleClose = event => {
    this.props.onClose();
  };

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        fullWidth={this.state.fullWidth}
        maxWidth={this.state.maxWidth}
        open={this.props.open}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {this.props.school.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <EmailCell email={this.props.school.email} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SchoolPopUp;
