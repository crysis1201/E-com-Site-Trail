import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Homepage from "./Page/Homepage"
import ShopPage from "./Page/Shoppage"
import SignInSignupPage from './Page/sign-in-and-sign-up/signin-signup';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <Router >
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shoppage" component={ShopPage} />
          <Route path="/signin" component={SignInSignupPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
