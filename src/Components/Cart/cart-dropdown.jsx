import { React } from "react"

import CustomButton from "../CustomButton/CustomButton"

import CartItem from "./cart-item"

import "./cart-dropdown.styles.scss"

import { connect } from "react-redux"

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="class-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>Check Out</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps) (CartDropdown);