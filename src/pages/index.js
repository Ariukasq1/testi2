import WPAPI from "wpapi";
import React from "react";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({ sliders }) => {
  console.log(sliders, "===========");
  return <div className="page Home">hello</div>;
};

export async function getStaticProps() {
  const sliders = await wp.posts().categories(215).embed();
  return {
    props: {
      sliders,
    },
  };
}

export default Index;
