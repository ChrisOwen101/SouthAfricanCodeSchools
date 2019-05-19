import React from "react";
import { Link } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const Website = props => {
  return (
    <div className={props.classes.heading}>
      <div>Website</div>

      <Typography component="p" gutterBottom>
        <Link
          href={props.school.website}
          target="_blank"
          rel="noopener noreferrer"
          style={ {lineHeight: '30px'} }
        >
          {props.school.website}
        </Link>
      </Typography>
    </div>
  );
};

export default Website;
