import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Homepage from "./Page/Homepage"
import ShopPage from "./Page/Shoppage"

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <Router >
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shoppage" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
