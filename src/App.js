
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
            {/* <AboutUs /> */}
        </Route>
        <Route path="/contact-us">
            {/* <ContactUs /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
