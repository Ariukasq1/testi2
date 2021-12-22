import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";

const ItemDetail = ({ post }) => {
  const { title, content, acf, _embedded } = post;
  const { supports } = acf;
  const datas = supports.desc.split("<li>");

  return (
    <div className="ItemDetail">
      <div className="halfContents">
        <div
          className="blueTitle"
          dangerouslySetInnerHTML={{ __html: supports.title }}
        />
        <div className="cards">
          {datas.map((data, ind) => {
            if (
              data.includes("<ul") ||
              data.includes("<p><!-- /wp:list --></p>")
            ) {
              return null;
            }

            return <div key={ind} dangerouslySetInnerHTML={{ __html: data }} />;
          })}
        </div>
      </div>
      <div
        className="halfImage"
        style={{ backgroundImage: `url(${getData(_embedded, "image")})` }}
      >
        <div className="overlayText">
          <h2
            dangerouslySetInnerHTML={{
              __html: title.rendered,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: content.rendered,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
