import React, { Component } from "react";
import ShareButton from 'react-web-share-button';

class LikeThis extends Component {
    onClick () {
        this.props.likeClick(this.props.school)
    }

    render() {
        return (
        <ShareButton title="Link Test" text="Just testing" url="http://www.codeschooldirectory.com" />
        );
    }
}

export default LikeThis;

