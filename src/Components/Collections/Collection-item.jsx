import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import { connect } from "react-redux";
import { addItem } from "../../react/cart/cart.actions";
import "../Collections/collection-item.styles.scss"

const collectionItem = ({items, addItem }) => {

    const { imageUrl, name, price } = items;

    return ( 
        <div className="collection-item">   
            <div style={{
                background: `url(${imageUrl})`
            }} className="image" />
                <div className="collection-footer">
                    <div className="name">{name}</div>
                    <div className="price">{price}</div>
                </div>
                <CustomButton onClick={() => addItem(items)}>Add to Cart</CustomButton>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    addItem: items => dispatch(addItem(items))
})
 
export default connect(null, mapDispatchToProps) (collectionItem);