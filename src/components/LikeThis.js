import React, { Component } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

class LikeThis extends Component {
  onClick () {
    this.props.likeClick(this.props.school)
  }

  render() {
    return (
      <IconButton aria-label="Add to favorites" onClick={ this.onClick.bind(this) } >
        <FavoriteIcon color={ (this.props.school.liked === 'true') ? "error" : "primary" }/>
      </IconButton>
    );
  }
}

export default LikeThis;
