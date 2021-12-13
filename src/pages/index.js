import WPAPI from "wpapi";
import React from "react";
import Config from "../config";
import HomeSlider from "../components/home/HomeSlider";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({ sliders }) => {
  return (
    <div className="page Home">
      <HomeSlider sliders={sliders} />
    </div>
  );
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
