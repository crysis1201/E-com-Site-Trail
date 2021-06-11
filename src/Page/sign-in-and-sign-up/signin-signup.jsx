import React from "react"
import SignIn from "../../Components/SignIn/Sign-in.jsx"
import SignUp from "../../Components/SignIn/signUp/sign-up.jsx";

import "./sign-in-and-sign-up.styles.scss"
const signInSignupPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
     );
}
 
export default signInSignupPage;