import React, { useState } from "react";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Link from "next/link";
import Slider from "react-slick";

const NewsList = ({ data, cats }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="newsList">
      <div className="page-title">Newsroom</div>
      <div className="catList">
        {cats.map((cat, ind) => {
          return <div key={ind}>{cat.name}</div>;
        })}
      </div>
      <Slider {...settings} className="news-slider">
        {data.map((news, ind) => {
          return (
            <div key={ind}>
              <div
                className="newslist-image"
                style={{
                  backgroundImage: `url(${getData(news._embedded, "image")}})`,
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewsList;
