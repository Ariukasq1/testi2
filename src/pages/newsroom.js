import React from "react";
import WPAPI from "wpapi";
import Config from "../config";
import NewsList from "../components/newsroom/newsList";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Newsroom = ({ newsCats, newsroom }) => {
  return (
    <div className="page Newsroom">
      <NewsList cats={newsCats} data={newsroom} />
    </div>
  );
};

export async function getStaticProps() {
  const newsroom = await wp.posts().categories(1).perPage(30).embed();
  const newsCats = await wp.categories().parent(1).embed();
  return {
    props: { newsCats, newsroom },
  };
}

export default Newsroom;
