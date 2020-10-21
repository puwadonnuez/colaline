import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import {ProtectedRoute} from './components/protected.route'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/success" component={Success} /> */}
        <ProtectedRoute path="/success" component={Success} />
        </Switch>
      </div>
    );
  }
}

export default App;
