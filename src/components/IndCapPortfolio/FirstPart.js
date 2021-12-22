import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";
import ItemDetail from "./ItemDetail";
import FactSection from "./FactSection";
import Additional from "./Additional";
import ItemRelations from "./ItemRelations";
import router from "next/router";

const FirstPart = ({ data, page, brands, rel }) => {
  const [display, setDisplay] = useState("none");
  const [post, setPost] = useState();

  const renderPost = (display, post, slug) => {
    setDisplay(display);
    setPost(post);
    router.push(`/${page}#${slug}`);
  };

  return (
    <>
      <div className="firstPart">
        <div className="page-title">{page}</div>
        <div className="page-posts">
          {data.map((post, ind) => {
            const { title, excerpt, slug, _embedded } = post;

            return (
              <div key={ind} className={page}>
                <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                <div
                  onClick={() => renderPost("block", post, slug)}
                  className="read-more"
                >
                  Read more
                </div>
                <div
                  className="post-image"
                  onClick={() => renderPost("block", post, slug)}
                >
                  <img src={getData(_embedded, "image")} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {display !== "none" ? (
        <div>
          <ItemDetail post={post} />
          {post.acf.bg_image && <FactSection post={post} />}
          {post.acf.additional && <Additional post={post} />}
          <ItemRelations post={post} brands={brands} data={rel} name={page} />
        </div>
      ) : null}
    </>
  );
};

export default FirstPart;
