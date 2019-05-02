import React, { Component } from "react";
import ShareButton from 'react-web-share-button';

class LikeThis extends Component {
    onClick () {
        this.props.likeClick(this.props.school)
    }

    render() {
        const shareStyle = {
            width:"25px", height: "25px",
            border: "none",
            backgroundSize: "contain", backgroundRepeat: "no-repeat",
            backgroundColor: "transparent",  backgroundImage: "url(./images/share.png)",
            cursor: 'pointer', marginLeft: '8px'
        };
        const fallbackStyle = {
            border: "none",
            borderTop: 'solid #eaeaea 3px',
            backgroundSize: "contain", backgroundColor: "white",
            left: '0', zIndex: '120'
        };
        return (
        <ShareButton
            buttonText=""
            buttonStyle={ shareStyle }
            fallbackContainerOnShowStyles={ fallbackStyle }
            title={this.props.school.name}
            text={this.props.school.name}
            url={"https://www.codeschooldirectory.com/" + this.props.school.name}
        />
        );
    }
}

export default LikeThis;

