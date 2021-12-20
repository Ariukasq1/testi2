import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../components/IndCapPortfolio/FirstPart";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Industries = ({ industries }) => {
  return (
    <div className="page Industries">
      <FirstPart data={industries} page={"industries"} />
    </div>
  );
};

export async function getStaticProps() {
  const industries = await wp.posts().categories(111).embed();
  return {
    props: { industries },
  };
}

export default Industries;
