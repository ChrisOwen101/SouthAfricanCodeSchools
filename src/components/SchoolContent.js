import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

function separateAndTrimList(list) {
  console.log(typeof list);
  if (typeof list == "number") {
    return [list];
  }

  return list.split(",").map(item => item.trim());
}

class SchoolContent extends Component {
  render() {
    let school = this.props.school;

    let technologies = separateAndTrimList(school.technologies);
    let locations = separateAndTrimList(school.locations);
    let courseLength = separateAndTrimList(school.courseLength);

    const chipStyle = {
      margin: "4px 4px 0px 0px"
    };

    const paperStyle = {
      padding: "4px 4px 4px 4px",
      margin: "8px 0px 0px 0px"
    };

    return (
      <div>
        <Paper style={paperStyle}>
          Course Length
          <div>
            {courseLength.map((item, index) => {
              return (
                <Chip
                  label={item + " months"}
                  style={chipStyle}
                  color="secondary"
                />
              );
            })}
          </div>
        </Paper>
        <Paper style={paperStyle}>
          Locations
          <div>
            {locations.map((item, index) => {
              return <Chip label={item} style={chipStyle} color="secondary" />;
            })}
          </div>
        </Paper>
        <Paper style={paperStyle}>
          Technologies
          <div>
            {technologies.map((item, index) => {
              return <Chip label={item} style={chipStyle} color="primary" />;
            })}
          </div>
        </Paper>
      </div>
    );
  }
}

export default SchoolContent;
