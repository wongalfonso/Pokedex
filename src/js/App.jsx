import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = { Home } />
        </Switch>
      </Router>
    )
  }
}