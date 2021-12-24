import React from "react";
import { getData } from "../../utils";

const NewsDetail = ({ post }) => {
  return (
    <div className="NewsDetail">
      <div className="detail-news">
        <div
          className="blueTitle"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
      <div className="detail-image">
        <img src={getData(post._embedded, "image")} />
      </div>
    </div>
  );
};

export default NewsDetail;
