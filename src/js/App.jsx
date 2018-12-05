import React from 'react';
import { BrowserRouter as Rouater, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = { HomePage } />
        </Switch>
      </Router>
    )
  }
}