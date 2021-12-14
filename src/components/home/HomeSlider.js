import React from "react";
import Slider from "react-slick";

const HomeSlider = ({ sliders }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {sliders.map((item, ind) => {
        console.log(item, "==============");
        const { image, body, position_of_text } = item.acf;
        return (
          <div key={ind}>
            <div
              className="homeSlider"
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: `${body.font_color}`,
              }}
            >
              <div
                className="sliderText"
                style={{ textAlign: `${position_of_text}` }}
              >
                <h1>{body.text}</h1>
                <h2>{body.description}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HomeSlider;
