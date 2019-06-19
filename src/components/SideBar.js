import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import EditIcon from '@material-ui/icons/Edit';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SchoolIcon from '@material-ui/icons/School';
import Logo from "./Logo";
import AboutPage from "./AboutPage";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class SideBar extends Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    aboutOpen: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  toggleAbout = (open) => () => {
    this.setState({
      aboutOpen: open,
    });
  };

  render() {

    const classes = {
      list: "list"
    };

    const favouritesLabel = (this.props.showLikesStatus === true) ?  "Show all Schools" : "Show Favourites";
    const favouritesBg = (this.props.showLikesStatus === true) ?  "#c1fda2" : "#F5F5F5";

    const sideList = (
      <div id="menuList" className={classes.list}>
        <List>
          <Logo type='full' />
          <ListItem button key="about" onClick={this.toggleAbout(true)}>
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <ListItemText primary="About this Project" />
          </ListItem>
          <ListItem button key="favourites" onClick={this.props.toggleLikesClick} style={{background: favouritesBg}}>
              <ListItemIcon><FavoriteIcon /></ListItemIcon>
              <ListItemText primary={favouritesLabel} />
          </ListItem>
          <Link href="https://github.com/ChrisOwen101/SouthAfricanCodeSchools">
            <ListItem button key="github">
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary="Get the Code!" />
            </ListItem>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSciBsoj5AH6RKc0-DAh_x3QAggP6bCkCFYdCN3Tdu4rKEmJlw/viewform">
            <ListItem button key="add-school">
              <ListItemIcon><EditIcon /></ListItemIcon>
              <ListItemText primary="Add a School" />
            </ListItem>
          </Link>
          <Divider />
          <Link href="mailto:info@codeschooldirectory.co.za">
            <ListItem button key="contact-us">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns="menuList"
          aria-haspopup="true"
          onClick={this.toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <AboutPage open={this.state.aboutOpen} handleClose={this.toggleAbout(false)} />
      </div>
    );
  }
}

export default SideBar;
