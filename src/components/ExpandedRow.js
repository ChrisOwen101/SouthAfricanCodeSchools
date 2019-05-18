import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import SchoolContent from "./SchoolContent";

class ExpandedRow extends Component {

  constructor(props) {
    super(props)
    //this.myRef = React.createRef()   // Create a ref object
  }


  render() {
    const style = {
      display: "contents"
    };

    return (
      <div ref={this.props.ref} style={style}>
        <TableRow>
          <TableCell colSpan={this.props.colSpan}>
            <SchoolContent school={this.props.school} likeClick={this.props.likeClick} />
          </TableCell>
        </TableRow>
      </div>
    );
  }

  scrollToMyRef = () => window.scrollTo(0, this.props.ref.current.offsetTop)
}

export default ExpandedRow;
