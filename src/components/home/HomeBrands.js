import React, { useState } from "react";
import Slider from "react-slick";

const HomeBrands = ({ brandCats, brands }) => {
  const [filteredBrands, setCatID] = useState(brands);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homeBrands">
      <div className="heading-tag">Brands</div>
      <div className="heading-title">Our products</div>
      <div className="catList">
        <div onClick={() => setCatID(112)}>All Brands</div>
        {brandCats.map((cat, ind) => {
          const { name, id } = cat;
          return (
            <div key={ind} onClick={() => setCatID(id)}>
              {name}
            </div>
          );
        })}
      </div>
      <div className="brandsList">
        {filteredBrands.map((brand, ind) => {
          return <div key={ind}>hello</div>;
        })}
      </div>
    </div>
  );
};

export default HomeBrands;
