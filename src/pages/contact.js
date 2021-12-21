import React from "react";
import Footer from "../components/layouts/footer";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Contact = ({ contact }) => {
  return (
    <div className="page Contact">
      <Footer contact={contact[0]} />
    </div>
  );
};

export async function getStaticProps() {
  const contact = await wp.posts().categories().slug("contact").embed();

  return {
    props: {
      contact,
    },
  };
}

export default Contact;
