import React, { useState } from "react";
import Slider from "react-slick";
import { getData } from "../../utils";
import Link from "next/link";

const HomeBrands = ({ brandCats, brands }) => {
  const [brandsId, setCatID] = useState(112);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const brandsList = (id) => {
    console.log(id);
    return (
      <Slider {...settings} className="brandList">
        {brands.map((brand, ind) => {
          console.log(brand, "=============");
          if (brand.categories.includes(id)) {
            return (
              <div key={ind}>
                <div className="brand-logo">
                  <img src={brand.acf.logo} />
                </div>
                <Link href={`/hello`}>
                  <a className="read-more">Read more</a>
                </Link>
                <div className="brand-image">
                  <img
                    className="hide"
                    src={getData(brand._embedded, "image")}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </Slider>
    );
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
      {brandsList(brandsId)}
    </div>
  );
};

export default HomeBrands;
