import WPAPI from "wpapi";
import React from "react";
import Config from "../config";
import HomeSlider from "../components/home/HomeSlider";
import Fullpage from "../components/Fullpage";
import Footer from "../components/layouts/footer";
import HomeCapabilties from "../components/home/HomeCapabilities";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeBrands from "../components/home/HomeBrands";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({ sliders, contact, capability, brandCats, brands }) => {
  return (
    <Fullpage
      children={
        <div className="page Home">
          <div className="section slider">
            <HomeSlider sliders={sliders} />
          </div>
          <div className="section capabilites">
            <HomeCapabilties capability={capability[0]} />
          </div>
          <div className="section industries">
            <HomeIndustries />
          </div>
          <div className="section brands">
            <HomeBrands brandCats={brandCats} brands={brands} />
          </div>
          <div className="section footer">
            <Footer contact={contact[0]} />
          </div>
        </div>
      }
    />
  );
};

export async function getStaticProps() {
  const sliders = await wp.posts().categories(215).embed();
  const contact = await wp.posts().categories().slug("contact").embed();
  const capability = await wp.posts().categories(216).embed();
  const brandCats = await wp.categories().parent(112).embed();
  const brands = await wp.posts().categories(112).perPage(80).embed();
  return {
    props: {
      sliders,
      contact,
      capability,
      brandCats,
      brands,
    },
  };
}

export default Index;
