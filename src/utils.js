import axios from "axios";
import React from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <RightOutlined onClick={onClick} className="next-arrow" />;
};

export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <LeftOutlined onClick={onClick} className="prev-arrow" />;
};

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export const getData = (object, type) => {
  switch (type) {
    case "categories":
      return object && object["wp:term"] && object["wp:term"][0]
        ? object["wp:term"][0]
        : [];
    case "tags":
      return object && object["wp:term"] && object["wp:term"][1]
        ? object["wp:term"][1]
        : [];
    case "author":
      return object && object["author"] && object["author"][0]
        ? object["author"][0]
        : null;
    case "image":
      return object &&
        object["wp:featuredmedia"] &&
        object["wp:featuredmedia"][0] &&
        object["wp:featuredmedia"][0].source_url
        ? object["wp:featuredmedia"][0].source_url
        : null;
    default:
      break;
  }
};

export const prefixer = (url) => {
  if (process.env.NODE_ENV !== "production") {
    return url;
  }

  return `/${url}`;
};
