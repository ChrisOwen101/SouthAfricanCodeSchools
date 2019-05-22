import React from "react";
import Typography from '@material-ui/core/Typography';

const EmploymentRate = props => {
  return (
    <div className="heading">
      <div>Employment Rate</div>
      <Typography component="p" gutterBottom>
        {props.value}
      </Typography>
    </div>
  );
};

export default EmploymentRate;
