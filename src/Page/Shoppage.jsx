import React from "react"
import CollectionPreview from "../Components/Collections/collection-preview.jsx";
import SHOP_DATA from "../Page/shop_data.js";

class ShopPage extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                collection: SHOP_DATA


        }
    }

    render() {
        const {collection} = this.state;
        return(
            <div>
                {
                    collection.map(({id, ...othercollectionprops}) => (
                        <CollectionPreview key={id} {...othercollectionprops}  />
                    ))
                }
            </div>
        )
    }


}

export default ShopPage;