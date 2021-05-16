
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" />
        <Route path="/contact-us" />
      </Switch>
  );
}

export default App;
