
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" />
        <Route path="/contact-us" />
      </Switch>
    </div>
  );
}

export default App;
