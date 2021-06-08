import React from "react"

import "../Collections/collection-item.styles.scss"

const collectionItem = ({imageUrl, name, price }) => {
    return ( 
        <div className="collection-item">   
            <div style={{
                background: `url(${imageUrl})`
            }} className="image" />
                <div className="collection-footer">
                    <div className="name">{name}</div>
                    <div className="price">{price}</div>
                </div>
        </div>
     );
}
 
export default collectionItem;