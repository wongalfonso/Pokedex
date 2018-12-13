import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Animation from './components/Animation/Animation';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/pokemon/:name' component = { Profile } />
          <Route path = '/animation' component = { Animation } />
        </Switch>
      </Router>
    )
  }
}