
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
    <div class="header-wrapper">
      <div class="site-branding">
       <div class="site-branding-text">
          <p class="site-title">Hormalno</p>
        </div>
      </div>
    </div>
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
