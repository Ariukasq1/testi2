import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../components/IndustriesCapabilities/FirstPart";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Capabilities = ({ capabilities }) => {
  return (
    <div className="page Capabilities">
      <FirstPart data={capabilities} page={"capabilities"} />
    </div>
  );
};

export async function getStaticProps() {
  const capabilities = await wp.posts().categories(110).embed();
  return {
    props: { capabilities },
  };
}

export default Capabilities;
