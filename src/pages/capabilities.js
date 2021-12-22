import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../components/IndCapPortfolio/FirstPart";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Capabilities = ({ capabilities, industries, brands }) => {
  return (
    <div className="page Capabilities">
      <FirstPart
        data={capabilities}
        rel={industries}
        brands={brands}
        page={"capabilities"}
      />
    </div>
  );
};

export async function getStaticProps() {
  const industries = await wp.posts().categories(111).embed();
  const capabilities = await wp.posts().categories(110).embed();
  const brands = await wp.posts().categories(112).perPage(100).embed();
  return {
    props: { capabilities, industries, brands },
  };
}

export default Capabilities;
