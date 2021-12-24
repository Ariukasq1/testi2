import WPAPI from "wpapi";
import React from "react";
import config from "../../config";
import Layout from "../../components/layouts/Layout";
import FirstPart from "../../components/IndCapPortfolio/FirstPart";
import HomeBrands from "../../components/home/HomeBrands";
import NewsList from "../../components/newsroom/newsList";
import HumanRes from "../../components/careers/HumanRes";

const Intro = ({ slug, data, childCats }) => {
  const renderSwitch = (slug) => {
    switch (slug) {
      case "brands":
        return <HomeBrands brands={data} brandCats={childCats} page={slug} />;

      case "news":
        return <NewsList data={data} cats={childCats} page={slug} />;

      case "careers":
        return <HumanRes career={data} page={slug} />;

      default:
        return <FirstPart data={data} page={slug} />;
    }
  };

  return (
    <Layout>
      <div className={`page ${slug}`}>{renderSwitch(slug)}</div>
    </Layout>
  );
};

Intro.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });
  const slug =
    context.query.categories === "newsroom" ? "news" : context.query.categories;

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
