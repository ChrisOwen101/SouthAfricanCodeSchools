import React from "react";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const BasicField = props => {
  let heading = "";
  if (props.tooltip) {
    heading = <div className="heading">
                <Tooltip placement="top-start" title={props.tooltip}>
                  <div>{props.heading}</div>
                </Tooltip>
              </div>
  } else {
    heading = <div className="heading">{props.heading}</div>
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
