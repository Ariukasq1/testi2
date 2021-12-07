import React from "react";
import { BotMenu, TopMenu } from "../menu";

const SideDrawer = ({ botMenu, topMenu }) => {
  return (
    <nav className="side-drawer">
      <BotMenu botMenu={botMenu} />
      <TopMenu topMenu={topMenu} />
    </nav>
  );
};
export default SideDrawer;
