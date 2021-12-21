import React from "react";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import "slick-carousel/slick/slick.css";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/layouts/Layout";
import Config from "../config";
import { fetcher } from "../utils";
import WPAPI from "wpapi";

const wp = new WPAPI({ endpoint: Config.apiUrl });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, botMenu, topMenu }) {
  return (
    <Layout botMenu={botMenu} topMenu={topMenu}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const botMenu = await fetcher(`${Config.menuUrl}/nav-menu`);
  const topMenu = await fetcher(`${Config.menuUrl}/nav-menu-top`);

  return {
    botMenu,
    topMenu,
  };
};

export default MyApp;
