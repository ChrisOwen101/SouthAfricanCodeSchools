import React from "react";
import { Link } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

const Email = props => {
  return (
    <Link href={"mailto:" + props.value}>
      <IconButton aria-label="Send Email">
        <EmailIcon />
      </IconButton>
    </Link>
  );
};

export default Email;
