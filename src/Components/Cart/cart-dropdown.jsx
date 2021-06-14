import { React } from "react"

import CustomButton from "../CustomButton/CustomButton"

import "./cart-dropdown.styles.scss"

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="class-items"></div>
        <CustomButton>Check Out</CustomButton>
    </div>
)

export default CartDropdown;