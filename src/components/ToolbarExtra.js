import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
  iconButton: {
  },
};

class ToolbarExtra extends React.Component {

  render() {
    // Only includes Like button, but can be extended.
    return (
      <React.Fragment>
        <Tooltip title={"View Favourites"}>
          <IconButton onClick={this.props.onClick}>
            <FavoriteIcon color={ (this.props.active === true) ? "error" : "action" } />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "ToolbarExtra" })(ToolbarExtra);