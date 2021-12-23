import WPAPI from "wpapi";
import React from "react";
import config from "../../config";
import Layout from "../../components/layouts/Layout";
import FirstPart from "../../components/IndCapPortfolio/FirstPart";
import ItemDetail from "../../components/IndCapPortfolio/ItemDetail";
import FactSection from "../../components/IndCapPortfolio/FactSection";
import Additional from "../../components/IndCapPortfolio/Additional";
import HomeBrands from "../../components/home/HomeBrands";
import BrandsDetail from "../../components/brands/BrandDetail";

const Detail = ({ slug, data, post }) => {
  console.log(post, "============");
  return (
    <Layout>
      <div className={`page ${slug}`}>
        {slug === "brands" ? (
          <>
            <BrandsDetail post={post} />
          </>
        ) : (
          <>
            <FirstPart data={data} page={slug} />
            <div>
              <ItemDetail post={post} />
              {post.acf.bg_image && <FactSection post={post} />}
              {post.acf.additional && <Additional post={post} />}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

Detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });
  console.log(context, "============");
  const slug = context.query.categories;
  const detail = context.query.detail;

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  return { slug, data, post };
};

export default Detail;
