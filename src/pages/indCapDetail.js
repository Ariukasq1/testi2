import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const IndCapDetail = () => {
  return <div className="page IndCapDetail">hello detail</div>;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default IndCapDetail;
