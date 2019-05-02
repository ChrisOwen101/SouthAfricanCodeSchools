import React, { Component } from "react";
import ShareButton from 'react-web-share-button';

class LikeThis extends Component {
    onClick () {
        this.props.likeClick(this.props.school)
    }

    render() {
        const shareStyle = {width:"25px", height: "25px", border: "none", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundColor: "transparent",  backgroundImage: "url(./images/share.png)"};
        return (
        <ShareButton buttonText="" buttonStyle={ shareStyle } title="Link Test" text="Just testing" url="http://www.codeschooldirectory.com"/>
        );
    }
}

export default LikeThis;

