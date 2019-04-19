import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';

  class AboutPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = { open: props.open };
    }

    handleClose = () => {
      this.setState({ open: false });
    };


    render() {
      const imgStyle = {width: 50, paddingLeft: 10, paddingRight: 10, top: 15, position: 'relative'}
      const cbImgStyle = {width: 160, float: 'right', padding: 10 }
      const buttonStyle = {padding: 20}

      return (
        <div id="about">
          <Dialog
              open={this.props.open}
              onClose={this.props.handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                <img
                  src="./images/logo-code-school-directory.png"
                  alt="Code School Directory Menu"
                  style={imgStyle}
                />
                {"About the CodeSchoolDirectory"}
              </DialogTitle>
              <DialogContent>

                  <p>This site aims to provide aspiring learners a list of available coding courses and bootcamps in South Africa.</p>
                  <p>
                    <img
                      src="./images/codebridge-logo.png"
                      alt="Codebridge Logo"
                      style={cbImgStyle}
                    />
                    This is an open information initiative that began at the <a href="https://codebridge.org.za/">Cape Town Codebridge</a> community evenings.
                  </p>
                  <p>All organisation is conducted on the <a href="https://zatech.github.io/">ZATech</a> slack workspace on the channel <a href="https://zatech.slack.com/messages/CGT76NYK1/">#codeschooldirectory</a>.</p>
                  <p>&nbsp;</p>
                  <p style={{textAlign: 'center'}}><strong>Join and say hi!</strong></p>

              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.handleClose} color="primary" style={buttonStyle} autoFocus>
                  <CloseIcon />
                  Close
                </Button>
              </DialogActions>
            </Dialog>
        </div>
      );
    }
};

export default AboutPage;

