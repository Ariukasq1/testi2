import React from "react";
import Footer from "../components/layouts/footer";
import WPAPI from "wpapi";
import Config from "../config";
import AboutPost from "../components/about/AboutPost";
import AboutServices from "../components/about/AboutServices";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const About = ({ contact, posts, serviceCats, services }) => {
  return (
    <div className="page About">
      <AboutPost post={posts[0]} />
      <AboutServices serviceCats={serviceCats} services={services} />
      <Footer contact={contact[0]} />
    </div>
  );
};

export async function getStaticProps() {
  const contact = await wp.posts().categories().slug("contact").embed();
  const posts = await wp.posts().categories(207).embed();
  const serviceCats = await wp.categories().parent(208).embed();
  const services = await wp
    .posts()
    .categories(
      serviceCats.map((service) => {
        return service.id;
      })
    )
    .embed();
  return {
    props: {
      contact,
      posts,
      serviceCats,
      services,
    },
  };
}

export default About;
