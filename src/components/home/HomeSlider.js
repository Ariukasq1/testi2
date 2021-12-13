import React from "react";
import Slider from "react-slick";

const HomeSlider = ({ sliders }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {sliders.map((item, ind) => {
        const { image } = item.acf;
        return (
          <div key={ind} className="homeSlider">
            <img src={image} />
          </div>
        );
      })}
    </Slider>
  );
};

export default HomeSlider;
