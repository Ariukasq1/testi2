import React, { useState } from "react";
import Link from "next/link";
import DrawerToggle from "./sideDrawer/DrawerToggle";

export const TopMenu = ({ topMenu }) => {
  return (
    <div className="topMenu">
      <div className="topMenuList">
        {topMenu.items.map((item, ind) => {
          return (
            <Link key={ind} href={`/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const BotMenu = ({ botMenu, handler }) => {
  return (
    <div className="botMenu">
      <div className="botMenuList">
        {botMenu.items.map((item, ind) => {
          return (
            <Link key={ind} href={`/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          );
        })}
      </div>
      <DrawerToggle click={handler} />
    </div>
  );
};

const MenuComponent = ({ botMenu, topMenu, drawerClickHandler }) => {
  return (
    <div className="main-header">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="images/mms.png" />
          </a>
        </Link>
      </div>
      <div className="menus">
        <TopMenu topMenu={topMenu} />
        <BotMenu botMenu={botMenu} handler={drawerClickHandler} />
      </div>
    </div>
  );
};

export default MenuComponent;
