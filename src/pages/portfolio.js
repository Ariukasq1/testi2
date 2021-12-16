import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Portfolio = () => {
  return <div className="page Portfolio">hello</div>;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Portfolio;
