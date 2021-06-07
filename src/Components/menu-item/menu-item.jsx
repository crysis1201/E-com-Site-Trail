import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, ImageUrl, size }) => {
  return (
    <div className={`${size} menu-item` }>
      <div className="background-image"
        style={{ backgroundImage: `url(${ImageUrl})` }}

      ></div>
      <div className="content">
        <p className="block uppercase text-md">{title}</p>
        <span className="block uppercase">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
