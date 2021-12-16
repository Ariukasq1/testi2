import React from "react";
import HomeBrands from "../components/home/HomeBrands";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Brands = ({ brandCats, brands }) => {
  return (
    <div className="page Brands">
      <HomeBrands brandCats={brandCats} brands={brands} />
    </div>
  );
};

export async function getStaticProps() {
  const brandCats = await wp.categories().parent(112).embed();
  const brands = await wp.posts().categories(112).perPage(80).embed();
  return {
    props: {
      brandCats,
      brands,
    },
  };
}

export default Brands;
