import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <NavBar />
            <Route exact path="/" component={HomePage} />
           
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
