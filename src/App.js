import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Homepage from "./Page/Homepage"
import ShopPage from "./Page/Shoppage"

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <Router >
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shoppage" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
