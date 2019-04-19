import React from "react";
import { Link, Typography } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import License from "./License";

const Footer = () => {
  return (
    <div id="footer">
      <Link href="https://github.com/ChrisOwen101/SouthAfricanCodeSchools">
        <ListItem button key="github">
          <ListItemIcon><CodeIcon /></ListItemIcon>
          <ListItemText primary="View the source on GitHub" />
        </ListItem>
      </Link>
      <License />
    </div>
  );
};

export default Footer;
