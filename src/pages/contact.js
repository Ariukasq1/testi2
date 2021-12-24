import React from "react";
import Footer from "../components/layouts/footer";
import WPAPI from "wpapi";
import config from "../config";
import Layout from "../components/layouts/Layout";

const Contact = ({ contact }) => {
  return (
    <Layout>
      <div className="page Contact">
        <Footer contact={contact} />
      </div>
    </Layout>
  );
};

Contact.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const contact = await wp
    .posts()
    .categories()
    .slug("contact")
    .embed()
    .then((data) => {
      return data[0];
    });

  return {
    contact,
  };
};

export default Contact;
