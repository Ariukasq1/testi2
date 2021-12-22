import React from "react";
import { getData } from "../../utils";
import Link from "next/link";
import Slider from "react-slick";

const ItemRelations = ({ post, data, brands, name }) => {
  const category = name === "industries" ? "capabilities" : "industries";
  const brandRelations = brands.filter((el) => post.acf.brands.includes(el.id));
  const relations = data.filter((el) => post.acf[category].includes(el.id));

  const showBrands = brandRelations.length > 4 ? 4 : brandRelations.length;
  const showRel = relations.length > 4 ? 4 : relations.length;

  const brnd_settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: showBrands,
    slidesToScroll: 1,
  };

  const rel_settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: showRel,
    slidesToScroll: 1,
  };

  const renderData = () => {
    if (relations.length === 0) {
      return null;
    }

    return (
      <div className="relations">
        <div className="heading-tag">{category}</div>
        <Slider {...rel_settings}>
          {relations.map((el, ind) => {
            return (
              <div key={ind} className="relation-card">
                <div dangerouslySetInnerHTML={{ __html: el.title.rendered }} />
                <Link href={`/${category}#${el.slug}`}>
                  <div className="relation-image">
                    <img src={getData(el._embedded, "image")} />
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  const renderBrandRelations = () => {
    if (brandRelations.length === 0) {
      return null;
    }

    return (
      <div className="relations">
        <div className="heading-tag">Brands</div>
        <Slider {...brnd_settings}>
          {brandRelations.map((brnd, ind) => {
            return (
              <div key={ind} className="relation-card">
                <div
                  dangerouslySetInnerHTML={{ __html: brnd.title.rendered }}
                />
                <div className="relation-image">
                  <img src={getData(brnd._embedded, "image")} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };
  return (
    <div className="ItemRelations">
      <div className="blueTitle">Relations</div>
      {renderBrandRelations()}
      {renderData()}
    </div>
  );
};

export default ItemRelations;
