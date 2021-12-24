import React from "react";
import Footer from "../components/layouts/footer";
import WPAPI from "wpapi";
import AboutPost from "../components/about/AboutPost";
import AboutServices from "../components/about/AboutServices";
import config from "../config";
import Layout from "../components/layouts/Layout";

const About = ({ contact, posts, serviceCats, services }) => {
  return (
    <Layout>
      <div className="page About">
        <AboutPost post={posts} />
        <AboutServices serviceCats={serviceCats} services={services} />
        <Footer contact={contact} />
      </div>
    </Layout>
  );
};

About.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const contact = await wp
    .posts()
    .categories()
    .slug("contact")
    .embed()
    .then((data) => {
      return data[0];
    });

  const posts = await wp
    .posts()
    .categories(207)
    .embed()
    .then((data) => {
      return data[0];
    });
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
    contact,
    posts,
    serviceCats,
    services,
  };
};

export default About;
