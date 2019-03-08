import React, { Component } from "react";

class EmailCell extends Component {
  render() {
    let email = this.props.email
      .split(",")[0]
      .trim()
      .toLowerCase();

    return (
      <a href={"mailto:" + email} target="_blank" rel="noopener noreferrer">
        Contact
      </a>
    );
  }
}

export default EmailCell;
