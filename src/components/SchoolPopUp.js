import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import SchoolContent from "./SchoolContent";
import withMobileDialog from '@material-ui/core/withMobileDialog';

class SchoolPopUp extends Component {
  state = {
    fullWidth: true,
    maxWidth: "sm"
  };

  handleClose = event => {
    this.props.onClose();
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <Dialog
        fullWidth={this.state.fullWidth}
        maxWidth={this.state.maxWidth}
        fullScreen={fullScreen}
        open={this.props.open}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <SchoolContent school={this.props.school} />
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

export default withMobileDialog()(SchoolPopUp);
