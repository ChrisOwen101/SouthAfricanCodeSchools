import React from "react";
import { Link } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const Website = props => {
  return (
    <div className="heading">
      <div>Website</div>

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
