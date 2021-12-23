import React from "react";
import { getData } from "../../utils";
import Link from "next/link";

const BrandsDetail = ({ post }) => {
  console.log(post, "============");
  return (
    <div className="BrandsDetail">
      <div className="detail-image">
        <img src={getData(post._embedded, "image")} />
      </div>
      <div className="detail-about">
        <div className="blueTitle">
          About{" "}
          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>
        <div
          className="bodyText"
          dangerouslySetInnerHTML={{ __html: post.acf.about }}
        />
      </div>
      <div className="detail-detail">
        <div className="blueTitle">
          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />{" "}
          Detail
        </div>
        <div
          className="bodyText"
          dangerouslySetInnerHTML={{ __html: post.acf.advantage }}
        />
      </div>
      <div className="certificate">
        <div className="blueTitle">Certification & Accreditations:</div>
        <img src={post.acf.certificate} />
      </div>
    </div>
  );
};

export default BrandsDetail;
