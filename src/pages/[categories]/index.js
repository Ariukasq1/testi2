import WPAPI from "wpapi";
import React from "react";
import config from "../../config";
import Layout from "../../components/layouts/Layout";
import FirstPart from "../../components/IndCapPortfolio/FirstPart";
import HomeBrands from "../../components/home/HomeBrands";

const Intro = ({ slug, data, childCats }) => {
  return (
    <Layout>
      <div className={`page ${slug}`}>
        {slug === "brands" ? (
          <HomeBrands brands={data} brandCats={childCats} page={slug} />
        ) : (
          <FirstPart data={data} page={slug} />
        )}
      </div>
    </Layout>
  );
};

Intro.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });
  const slug = context.query.categories;

  const catId = await wp
    .categories()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();
  const childCats = await wp.categories().parent(catId.id).embed();

  return { slug, data, childCats };
};

export default Intro;
