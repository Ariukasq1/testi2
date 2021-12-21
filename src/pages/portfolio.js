import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../components/IndCapPortfolio/FirstPart";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Portfolio = ({ posts }) => {
  return (
    <div className="page Portfolio">
      <FirstPart data={posts} page={"portfolio"} />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await wp.posts().categories(194).embed();
  return {
    props: { posts },
  };
}

export default Portfolio;
