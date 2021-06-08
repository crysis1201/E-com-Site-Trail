import React from "react";

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

    this.state({ email: "", password: "" });
  };

  handleChange = event => {
      const {name, value} = event.target;
      this.setstate({[name]: value})
  }

  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            type="email"
            onChange={this.handleChange}
            value={this.state.email} required />
          <label>Email</label>

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type="submit" value="submit Form" />
        </form>
      </div>
    );
  }
}

export default signIn;