import React from "react";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FieldHeading from "./FieldHeading";

const BasicField = props => {
  let heading = "";
  if (props.tooltip) {
    heading = <div>
                <Tooltip placement="top-start" title={props.tooltip}>
                  <FieldHeading heading={props.heading} />
                </Tooltip>
              </div>
  } else {
    heading = <FieldHeading heading={props.heading} />
  }

  return (
    <div>
      {heading}
      <Typography component="p" gutterBottom>
        {props.value}
      </Typography>
    </div>
  );
};

export default BasicField;
