import React from "react";
import { Link } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import FieldHeading from "./FieldHeading";

const Website = props => {
  return (
    <div>
      <FieldHeading heading="Website" />

      <Typography component="p" gutterBottom>
        <Link
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          style={ {lineHeight: '30px'} }
        >
          {props.url}
        </Link>
      </Typography>
    </div>
  );
};

export default Website;
