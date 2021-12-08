import React from "react";
import { SideMenuWithChilds, TopMenu } from "../menu";

const SideDrawer = ({ botMenu, topMenu, onClose }) => {
  return (
    <nav className="side-drawer">
      <SideMenuWithChilds botMenu={botMenu} close={onClose} />
      <TopMenu topMenu={topMenu} />
    </nav>
  );
};
export default SideDrawer;
