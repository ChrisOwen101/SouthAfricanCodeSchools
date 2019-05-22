import React from "react";
import BusinessIcon from '@material-ui/icons/Business';
import Chip from "@material-ui/core/Chip";

const BusinessType = props => {
  return (
      <Chip
        icon={ <BusinessIcon /> }
        label={props.value}
        className={props.classes.chip}
        color="primary"
        style={props.style}
      />
  );
};

export default BusinessType;
