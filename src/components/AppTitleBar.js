import React from "react";
import Logo from "../components/Logo";

import SideBar from "./SideBar";

function AppTitleBar() {
  return (
    <div id="appTitleBar">
      <SideBar />
      <Logo />
    </div>
  );
}

export default AppTitleBar;
