import React from "react";
import Link from "next/link";
import DrawerToggle from "./sideDrawer/DrawerToggle";

const MainMenu = ({ botMenu, handler }) => {
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

export default MainMenu;
