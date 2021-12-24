import React from "react";
import Link from "next/link";
import SideDrawer from "./sideDrawer/SideDrawer";
import Backdrop from "./sideDrawer/Backdrop";
import TopMenu from "./top-menu";
import MainMenu from "./main-menu";
import axios from "axios";
import config from "../../config";

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topMenu: [],
      mainMenu: [],
      sideDrawerOpen: false,
    };
  }

  componentDidMount() {
    axios
      .get(`${config().apiUrl}/menus/v1/menus/nav-menu-top`)
      .then((res) =>
        this.setState({
          topMenu: res.data,
          loading: true,
        })
      )
      .catch((err) => console.log(err));
    axios
      .get(`${config().apiUrl}/menus/v1/menus/nav-menu`)
      .then((res) =>
        this.setState({
          mainMenu: res.data,
          loading: true,
        })
      )
      .catch((err) => console.log(err));
  }

  drawerToggleClickOn = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { topMenu, mainMenu } = this.state;

    if (
      !topMenu.items ||
      topMenu.items.length === 0 ||
      !mainMenu.items ||
      mainMenu.items.length === 0
    ) {
      return null;
    }

    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = (
        <SideDrawer
          botMenu={mainMenu}
          topMenu={topMenu}
          onClose={this.backdropClickHandler}
        />
      );
      backdrop = <Backdrop onClose={this.backdropClickHandler} />;
    }

    return (
      <>
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
            <MainMenu botMenu={mainMenu} handler={this.drawerToggleClickOn} />
          </div>
        </div>
        {sideDrawer}
        {backdrop}
      </>
    );
  }
}

export default MenuComponent;
