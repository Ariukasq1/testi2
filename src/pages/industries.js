import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../components/IndCapPortfolio/FirstPart";
import ItemRelations from "../components/IndCapPortfolio/ItemRelations";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Industries = ({ capabilities, industries, brands }) => {
  return (
    <div className="page Industries">
      <FirstPart
        data={industries}
        rel={capabilities}
        brands={brands}
        page={"industries"}
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

export default Industries;
