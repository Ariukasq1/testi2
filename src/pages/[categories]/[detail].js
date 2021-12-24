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
import NewsDetail from "../../components/newsroom/newsDetail";
import RelatedNews from "../../components/newsroom/relatedNews";
import CareerDetail from "../../components/careers/careerDetail";
import HumanRes from "../../components/careers/HumanRes";

const Detail = ({ slug, data, post, detail }) => {
  const renderSwitch = (slug) => {
    switch (slug) {
      case "brands":
        return <BrandsDetail post={post} />;

      case "news":
        return (
          <>
            <NewsDetail post={post} />
            <RelatedNews data={data} page={slug} />
          </>
        );

      case "careers":
        return (
          <>
            <HumanRes career={data} page={slug} />;
            <CareerDetail post={post} />;
          </>
        );

      default:
        return (
          <>
            <FirstPart data={data} page={slug} />
            <div>
              <ItemDetail post={post} />
              {post.acf.bg_image && <FactSection post={post} />}
              {post.acf.additional && <Additional post={post} />}
            </div>
          </>
        );
    }
  };
  return (
    <Layout>
      <div className={`page ${slug}`}>{renderSwitch(slug)}</div>
    </Layout>
  );
};

Detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

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

  return { slug, data, post, detail };
};

export default Detail;
