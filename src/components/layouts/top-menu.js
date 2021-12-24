import React from "react";
import Link from "next/link";

const TopMenu = ({ topMenu }) => {
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

export default TopMenu;
