import React from "react";
import Typography from '@material-ui/core/Typography';

const BasicField = props => {
  return (
    <div>
      <div className="heading">{props.heading}</div>
      <Typography component="p" gutterBottom>
        {props.value}
      </Typography>
    </div>
  );
};

export default BasicField;
