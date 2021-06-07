import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          ImageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "Hats",
          id: 1,
          
        },
        {
          title: "Jackets",
          ImageUrl: "https://i.ibb.co/cvpntL1/jackets.png",
          linkUrl: "",
          id: 2,
        },
        {
          title: "sneakers",
          ImageUrl: "https://i.ibb.co/cvpntL1/sneakers.png",
          linkUrl: "",
          id: 3,
        },
        {
          title: "mens",
          ImageUrl: "https://i.ibb.co/cvpntL1/mens.png",
          size: "large",
          linkUrl: "",
          id: 4,
        },
        {
          title: "womens",
          ImageUrl: "https://i.ibb.co/cvpntL1/womens.png",
          size: "large",
          linkUrl: "",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionsprop}) => (
          <MenuItem
            key={id}
            {...otherSectionsprop}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
