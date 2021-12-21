import React from "react";
import Header from "./header";
import Menu from "./menu";
import SideDrawer from "../layouts/sideDrawer/SideDrawer";
import Backdrop from "./sideDrawer/Backdrop";

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickOn = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { children, title, image, botMenu, topMenu, contact } = this.props;
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = (
        <SideDrawer
          botMenu={botMenu}
          topMenu={topMenu}
          onClose={this.backdropClickHandler}
        />
      );
      backdrop = <Backdrop onClose={this.backdropClickHandler} />;
    }
    return (
      <>
        <Header title={title} image={image} />
        <main className="relative">
          <Menu
            botMenu={botMenu}
            topMenu={topMenu}
            drawerClickHandler={this.drawerToggleClickOn}
          />
          {sideDrawer}
          {backdrop}
          {children}
        </main>
      </>
    );
  }
}

export default Layout;
