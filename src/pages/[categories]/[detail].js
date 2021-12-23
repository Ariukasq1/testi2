import WPAPI from "wpapi";
import React from "react";
import config from "../../config";
import Layout from "../../components/layouts/Layout";
import FirstPart from "../../components/IndCapPortfolio/FirstPart";
import ItemDetail from "../../components/IndCapPortfolio/ItemDetail";
import FactSection from "../../components/IndCapPortfolio/FactSection";
import Additional from "../../components/IndCapPortfolio/Additional";
import HomeBrands from "../../components/home/HomeBrands";

const Detail = ({ category, data, post, brandCats }) => {
  if (category === "brands") {
    return (
      <Layout>
        <div className="page">
          <HomeBrands brands={data} brandCats={brandCats} />
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="page">
        <FirstPart data={data} page={category} />
        <div>
          <ItemDetail post={post} />
          {post.acf.bg_image && <FactSection post={post} />}
          {post.acf.additional && <Additional post={post} />}
        </div>
      </div>
    </Layout>
  );
};

Detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const category = context.query.categories;
  const detail = context.query.detail;

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`${category}`)
    .embed()
    .then((data) => data[0]);

  const brandCats = await wp.categories().parent(catId.id).embed();

  const data = await wp.posts().categories(catId.id).embed();

  return { category, data, post, brandCats };
};

export default Detail;
