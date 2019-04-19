import React from "react";

const Logo = props => {

  if (props.type === 'full') {
    let style = {width: 170, paddingLeft: 20, paddingTop: 20, paddingBottom: 20}
    return (
      <div id="menu-logo">
        <img
          src="./images/logo-code-school-directory-full.png"
          alt="Code School Directory Menu"
          style={style}
        />
      </div>
    );
  } else {
    let style = {width: 160, display: 'block', paddingTop: 10};
    return (
      <div id="logo">
        <img
          src="./images/logo-text.png"
          alt="the Code School Directory South Africa logo"
          style={style}
        />
      </div>
    );
  }
};

export default Logo;
