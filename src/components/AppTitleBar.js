import React from "react";
import Logo from "./Logo";

import SideBar from "./SideBar";

function AppTitleBar() {
  const style = { position: 'relative', left: -20 }
  return (
    <div id="appTitleBar" style={style}>
      <SideBar />
      <Logo />
    </div>
  );
}

export default AppTitleBar;
