import React from "react";
import Link from "next/link";

const SideMenuWithChilds = ({ botMenu, close }) => {
  return (
    <div className="SideMenu">
      {botMenu.items.map((item, ind) => {
        return (
          <div className="SideMenuList">
            <Link key={ind} href={`/${item.slug}`}>
              <a className="titleMenu">
                <b>{item.title}</b>
              </a>
            </Link>
            {item.child_items &&
              item.child_items.map((child, ind) => {
                return (
                  <Link key={ind} href={`/${item.slug}/${child.title}`}>
                    <a>{child.title}</a>
                  </Link>
                );
              })}
          </div>
        );
      })}
      <button className="closeButton" onClick={close}>
        X
      </button>
    </div>
  );
};

export default SideMenuWithChilds;
