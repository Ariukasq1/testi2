import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";
import ItemDetail from "./ItemDetail";
import FactSection from "./FactSection";
import Additional from "./Additional";
import ItemRelations from "./ItemRelations";

const FirstPart = ({ data, page }) => {
  const [display, setDisplay] = useState("none");
  const [post, setPost] = useState();

  const renderPost = (display, post) => {
    setDisplay(display);
    setPost(post);
  };

  return (
    <>
      <div className="firstPart">
        <div className="page-title">{page}</div>
        <div className="page-posts">
          {data.map((post, ind) => {
            const { title, slug, excerpt, _embedded } = post;
            return (
              <div key={ind} className={page}>
                <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                <div
                  onClick={() => renderPost("block", post)}
                  className="read-more"
                >
                  Read more
                </div>
                <div
                  className="post-image"
                  onClick={() => renderPost("block", post)}
                >
                  <img src={getData(_embedded, "image")} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {display !== "none" ? (
        <>
          <ItemDetail post={post} />
          {post.acf.bg_image && <FactSection post={post} />}
          {post.acf.additional && <Additional post={post} />}
          <ItemRelations post={post} />
        </>
      ) : null}
    </>
  );
};

export default FirstPart;
