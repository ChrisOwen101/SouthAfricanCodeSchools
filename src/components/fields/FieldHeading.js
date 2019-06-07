import React from "react";
import Typography from '@material-ui/core/Typography';

const FieldHeading = props => {
  return (
    <Typography component="h2" variant="subtitle1" className="heading">{props.heading}</Typography>
  );
};

export default FieldHeading;
