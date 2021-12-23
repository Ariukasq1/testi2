import WPAPI from "wpapi";
import React from "react";
import config from "../../config";
import Layout from "../../components/layouts/Layout";
import FirstPart from "../../components/IndCapPortfolio/FirstPart";

const Intro = ({ category, catId, data }) => {
  return (
    <Layout>
      <div className="page">
        <FirstPart data={data} page={category} />
      </div>
    </Layout>
  );
};

Intro.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });
  const category = context.query.categories;

  const catId = await wp
    .categories()
    .slug(`${category}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  return { category, catId, data };
};

export default Intro;
