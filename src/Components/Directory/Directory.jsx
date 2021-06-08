import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./Directory.scss";
import Sections_Data from "../Directory/sections.data.js"

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: Sections_Data
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
