import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";
import ItemDetail from "./ItemDetail";
import FactSection from "./FactSection";
import Additional from "./Additional";
import ItemRelations from "./ItemRelations";
import router from "next/router";

const FirstPart = ({ data, page }) => {
  return (
    <div className="firstPart">
      <div className="page-title">{page}</div>
      <div className="page-posts">
        {data.map((post, ind) => {
          const { title, excerpt, slug, _embedded } = post;

          return (
            <div key={ind} className={page}>
              <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
              <Link href={"/[categories]/[detail]"} as={`/${page}/${slug}`}>
                <a className="read-more">Read more</a>
              </Link>
              <Link href={"/[categories]/[detail]"} as={`/${page}/${slug}`}>
                <a className="post-image">
                  <img src={getData(_embedded, "image")} />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstPart;
