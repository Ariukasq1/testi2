import React from "react";
import WPAPI from "wpapi";
import Config from "../config";
import Footer from "../components/layouts/footer";
import HumanRes from "../components/careers/HumanRes";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Careers = ({ contact, career }) => {
  return (
    <div className="page Careers">
      <HumanRes career={career} />
      <Footer contact={contact[0]} />
    </div>
  );
};

export async function getStaticProps() {
  const contact = await wp.posts().categories().slug("contact").embed();
  const career = await wp.posts().categories(211).embed();

  return {
    props: {
      contact,
      career,
    },
  };
}

export default Careers;
