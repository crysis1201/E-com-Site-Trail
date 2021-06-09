import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../form-Input/Form-Input";
import { signInWithGoogle } from  "../firebase/firebase-utils"

class signIn extends React.Component {
  constructor(props) {
    super(props);

        this.state = {
        email: "",
        password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
      const {name, value} = event.target;
      this.setState({[name]: value})
  }

  render() {
    return (
      <div className="w-1/2" >
        <h2 className="text-2xl pb-5 pt-5 text-left">I already have an account</h2>
        <p className="text-left">Sign in with your email and password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={this.state.email} required />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="flex justify-between">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google {''}</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;