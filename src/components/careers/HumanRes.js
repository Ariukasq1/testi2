import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";

const HumanRes = ({ career, page }) => {
  return (
    <div className="human-res">
      <div className="heading-tag">Human Resource</div>
      <div className="heading-title">We put company culture first</div>
      <div className="careerList">
        {career.map((item, ind) => {
          return (
            <Link
              key={ind}
              href={"/[categories]/[detail]"}
              as={`/${page}/${item.slug}`}
            >
              <div className="card">
                <div className="card-image">
                  <img src={getData(item._embedded, "image")} />
                </div>
                <div className="card-text">
                  <h4
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HumanRes;
