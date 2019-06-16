import React from "react";
import Logo from "./Logo";

import SideBar from "./SideBar";

function AppTitleBar(props) {
  const style = { position: 'relative', left: -20 }
  return (
    <div id="appTitleBar" style={style}>
      <SideBar showLikesStatus={props.showLikesStatus} toggleLikesClick={props.toggleLikesClick}/>
      <Logo />
    </div>
  );
}

export default AppTitleBar;
