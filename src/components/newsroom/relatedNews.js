import React from "react";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Slider from "react-slick";
import Link from "next/link";

const RelatedNews = ({ data, page }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="RelatedNews">
      <Slider {...settings} className="related-news-slider">
        {data.map((news, ind) => {
          return (
            <Link
              key={ind}
              href={`/[categories]/[detail]`}
              as={`/${page}/${news.slug}`}
            >
              <div
                className="related-news-image"
                style={{
                  backgroundImage: `url(${getData(news._embedded, "image")}})`,
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedNews;
