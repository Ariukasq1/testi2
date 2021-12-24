import React from "react";
import { getData } from "../../utils";

const Product = ({ post }) => {
  return (
    <div className="portfolio-product">
      <div className="detail-half-text ">
        <div className="blueTitle">
          <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
      <div className="detail-image">
        <img src={getData(post._embedded, "image")} />
      </div>
    </div>
  );
};

export default Product;
