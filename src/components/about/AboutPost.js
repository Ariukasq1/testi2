import React from "react";
import { getData } from "../../utils";

const AboutPost = ({ post }) => {
  const { title, content, _embedded } = post;
  return (
    <div className="about-post">
      <div className="post-image">
        <img src={getData(_embedded, "image")} />
      </div>
      <div className="post-text">
        <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </div>
  );
};

export default AboutPost;
