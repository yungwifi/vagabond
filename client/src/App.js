import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CityPage from './components/CityPage'
import ProfilePage from './components/ProfilePage'
import PostsPage from './components/PostsPage'
import ShowPostPage from './components/ShowPostPage';
import PostForm from './components/PostForm';

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
            <Route exact path="/cities/:city_id/posts" component={PostsPage} />
<<<<<<< HEAD
<<<<<<< HEAD
            <Route exact path="/cities/:city_id/posts/new" component={PostForm} />
=======
         
>>>>>>> e5d39536f9d13d28c06a27e601bfdcd803831f0b
=======
>>>>>>> 3e4222e2fd732e760e0ec269fc78d386558e7b2b
            <Route exact path="/cities/:city_id/posts/:id" component={ShowPostPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;