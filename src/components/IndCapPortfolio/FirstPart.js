import React from "react";
import { getData } from "../../utils";
import Link from "next/link";

const FirstPart = ({ data, page }) => {
  return (
    <div className="firstPart">
      <div className="page-title">{page}</div>
      <div className="page-posts">
        {data.map((post, ind) => {
          const { title, slug, excerpt, _embedded } = post;
          return (
            <div key={ind} className={page}>
              <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
              <Link href={`/${page}/${slug}`}>
                <a className="read-more">Read more</a>
              </Link>
              <Link href={`/${page}/${slug}`}>
                <a>
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
