
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
        </Route>
        <Route path="/contact-us">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
