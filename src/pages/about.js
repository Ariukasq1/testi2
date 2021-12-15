import React from "react";
import Footer from "../components/layouts/footer";
import WPAPI from "wpapi";
import Config from "../config";
import AboutPost from "../components/about/AboutPost";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const About = ({ contact, posts }) => {
  return (
    <div className="page About">
      <AboutPost post={posts[0]} />
      <Footer contact={contact[0]} />
    </div>
  );
};

export async function getStaticProps() {
  const contact = await wp.posts().categories().slug("contact").embed();
  const posts = await wp.posts().categories(207).embed();

  return {
    props: {
      contact,
      posts,
    },
  };
}

export default About;
