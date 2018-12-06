import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/pokemon/:name' component = { Profile } />
        </Switch>
      </Router>
    )
  }
}