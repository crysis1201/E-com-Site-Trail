import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Homepage from "./Page/Homepage"

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
