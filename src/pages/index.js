import WPAPI from "wpapi";
import React from "react";
import Layout from "../components/layouts/Layout";
import Config from "../config";

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {
  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   const mainTabCategory = await apiMethod
  //     .parent(21)
  //     .embed();

  //   return { mainTabCategory };
  // }

  render() {
    return (
      <div className="relative">
        <h2>Gerege wordpress</h2>
        Hello template
      </div>
    );
  }
}

export default Index;
