import React from "react";
import { getData } from "../../utils";
import Link from "next/link";

const HomeCapabilties = ({ capability }) => {
  const { content, _embedded } = capability;

  return (
    <div className="homeCapability">
      <div className="halfImage">
        <img src={getData(_embedded, "image")} />
      </div>
      <div className="halfText">
        <div className="capabilitiesText">
          <div className="heading-tag">Capabilities</div>
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <Link href="/capabilities">
            <a className="readMore">Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCapabilties;
