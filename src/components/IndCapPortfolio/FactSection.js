import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";

const FactSection = ({ post }) => {
  const { bg_image } = post.acf;
  /* console.log(post, "=========="); */
  return (
    <div
      className="FactSection"
      style={{
        backgroundImage: `url(${bg_image})`,
      }}
    >
      FactSection
    </div>
  );
};

export default FactSection;
