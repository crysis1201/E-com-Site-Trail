import React from "react"
import "../Collections/collection-preview.styles.scss"
import CollectionItem from "../Collections/Collection-item.jsx"

const CollectionPreview = ({items, title}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(({id, ...otheritemsprops}) => (
          <CollectionItem key={id} {...otheritemsprops} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
