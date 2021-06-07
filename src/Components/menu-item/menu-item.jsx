import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom"

const MenuItem = ({ title, ImageUrl, size, linkUrl, history, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
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

export default withRouter(MenuItem);
