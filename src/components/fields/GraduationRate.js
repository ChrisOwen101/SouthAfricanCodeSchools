import React from "react";
import Typography from '@material-ui/core/Typography';

const GraduationRate = props => {
  return (
    <div className="heading">
      <div>Graduation Rate</div>
      <Typography component="p" gutterBottom>
        {props.value}
      </Typography>
    </div>
  );
};

export default GraduationRate;
