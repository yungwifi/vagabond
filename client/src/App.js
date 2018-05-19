import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CityPage from './components/CityPage'
import FooterBar from './components/FooterBar';



class App extends Component {
  render() {
    return (
      <div>
      <Router>
        
          <Switch>
          <NavBar />
          <Route exact path="/cities" component={CityPage} />
            <Route exact path="/" component={HomePage} />
            <FooterBar />
          </Switch>
    
      </Router>
      </div>
    )
  }
}

export default App;
