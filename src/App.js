import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Homepage from "./Page/Homepage"
import ShopPage from "./Page/Shoppage"
import SignInSignupPage from './Page/sign-in-and-sign-up/signin-signup';
import {auth, createUserProfileDocument} from "./Components/firebase/firebase-utils"

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        currentUser: null
      };
  }

  unsubscribeFromAuth: null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      }
      else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App max-w-screen-lg mx-auto">
        <Router >
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shoppage" component={ShopPage} />
            <Route path="/signin" component={SignInSignupPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
