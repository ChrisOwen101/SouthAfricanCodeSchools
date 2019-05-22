import React from "react";
import Chip from "@material-ui/core/Chip";
import MoneyIcon from '@material-ui/icons/AttachMoney';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const Stipend = props => {

  const stipend = props.value;
  let stipendIcon = null;
  let stipendLabel = "Stipend";
  if (stipend.toLowerCase() === 'yes') {
    stipendIcon = <CheckIcon />;
  } else if (stipend.toLowerCase() === 'no') {
    stipendLabel = "No Stipend";
    stipendIcon = <CloseIcon />;
  } else {
    // If text has been entered instead of yes/no, then display the text.
    stipendLabel += ": " + stipend;
    stipendIcon = <MoneyIcon />;
  }
  return (
    <Chip
      icon={stipendIcon}
      label={stipendLabel}
      className={props.classes.chip}
      color="primary"
      style={props.style}
    />
  );
};

export default Stipend;
