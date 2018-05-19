import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <NavBar>
            <Route exact path="/" component={HomePage} />
            </NavBar>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
