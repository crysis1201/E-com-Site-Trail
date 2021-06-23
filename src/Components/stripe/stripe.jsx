import React from "react"
import StripeCheckout from "react-stripe-checkout"

const checkout = ({price}) => {

    const priceForStripe = price * 100 ;
    const publishableKey = "pk_test_51J5YDbSEVypQM2sdjuzdLAWsUYX3XNlItuFkXbRfjdovGCixYTmneV6jC6Z98ZOzRcGhyJ6ceTZfmdBOjIvUKyDr00XjD16HtL";

    const onToken = token => {
        console.log(token);
        alert('Payment Succeful')
    }

    return (  
        <StripeCheckout
            label="Pay Now"
            name="Tweak Clothing"
            billingAddress
            shippingAddress
            bitcoin
            allowRememberMe
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
      );
}
 
export default checkout;