import React, { Component } from "react";
import fire from "./firebase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class SchoolTable extends Component {
  constructor(props) {
    super(props);
    this.state = { schools: [] };
    this.classes = props;
  }

  componentWillMount() {
    let messagesRef = fire
      .database()
      .ref()
      .orderByKey()
      .limitToLast(100);

    var that = this;

    messagesRef.once("value").then(function(snapshot) {
      let list = [];
      snapshot.forEach(function(school) {
        list.push(school.val());
      });

      that.setState({ schools: list });
    });
  }

  render() {
    return (
      <Paper className={this.classes.root}>
        <Table className={this.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>School Name</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Free</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.schools.map(school => (
              <TableRow key={school.id}>
                <TableCell component="th" scope="row">
                  {school.programName}
                </TableCell>
                <TableCell align="right">
                  <a
                    href={school.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {school.url}
                  </a>
                </TableCell>
                <TableCell align="right">{school.email}</TableCell>
                <TableCell align="right">{school.free}</TableCell>
                <TableCell align="right">{school.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(SchoolTable);
