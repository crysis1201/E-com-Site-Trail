import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Page/Homepage";
import ShopPage from "./Page/Shoppage";
import SignInSignupPage from "./Page/sign-in-and-sign-up/signin-signup";
import {
  auth,
  createUserProfileDocument,
} from "./Components/firebase/firebase-utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./react/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./react/user/user.selectors";
import checkoutPage from "./Page/checkoutpage";

class App extends React.Component {
  unsubscribeFromAuth: null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App max-w-screen-lg mx-auto">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shoppage" component={ShopPage} />
            <Route exact path="/checkout" component={checkoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInSignupPage />
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
