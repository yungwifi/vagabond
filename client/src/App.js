import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CityPage from './components/CityPage'
import ProfilePage from './components/ProfilePage'
import PostsPage from './components/PostsPage'
import ShowPostPage from './components/ShowPostPage';
import PostForm from './components/PostForm'
import CityShowPage from './components/CityShowPage'




class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cities" component={CityPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/cities/:city_id/posts/new" component={PostForm} />
            <Route exact path="/cities/:city_id/posts/:id" component={ShowPostPage} />
            <Route exact path="/cities/:city_id" component={CityShowPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
