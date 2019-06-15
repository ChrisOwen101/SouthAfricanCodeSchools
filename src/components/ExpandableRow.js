import React, { Component } from "react";
import SchoolContent from "./SchoolContent";

class ExpandableRow extends Component {

  componentDidMount() {
    this.scrollToItem(this.props.school.key,0);
  }

  getBrowserWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  scrollToItem(key, counter) {
    // Only scroll for mobile.
    if (this.getBrowserWidth() < 960) {
      if (document.getElementById(key)) {
        document.getElementById(key).scrollIntoView({ block: 'start',  behavior: 'smooth' });
      } else {
        // Wait for the element to exist for up to 100 x 10 = 1000ms = 1 second
        if (counter < 100) {
          setTimeout(() => {
            this.scrollToItem(key, counter + 1);
          }, 10);
        }
      }
    }
  }

  render() {
    return (
      <SchoolContent school={this.props.school} schoolKey={this.props.school.key} likeClick={this.props.likeClick} />
    );
  }
}

export default ExpandableRow;
