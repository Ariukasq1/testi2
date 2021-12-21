import React, { useState } from "react";

const AboutServices = ({ serviceCats, services }) => {
  const [id, setId] = useState(serviceCats[0].id);

  const serviceList = (catId) => {
    return (
      <div className="serviceList">
        {services.map((item, ind) => {
          const products = Object.values(item.acf);
          if (catId !== item.categories[0]) {
            return null;
          }

          return (
            <div key={ind} className="products">
              {products.map((group, ind) => {
                return (
                  <div key={ind}>
                    <div className="product-title">
                      <div className="serviceIcon">
                        <img src={group.icon} />
                      </div>
                      <h5>{group.name}</h5>
                    </div>
                    <div
                      className="product-desc"
                      dangerouslySetInnerHTML={{ __html: group.desc }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="about-service">
      <div className="heading-tag">What we do ?</div>
      <div className="heading-title">Our products</div>
      <div className="catList">
        {serviceCats.map((cat, ind) => {
          return (
            <div key={ind} onClick={() => setId(cat.id)}>
              {cat.name}
            </div>
          );
        })}
      </div>
      {serviceList(id)}
    </div>
  );
};

export default AboutServices;
