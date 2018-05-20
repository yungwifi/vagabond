import React, {Component} from 'react'


const nav = {
    backgroundColor: '#2E4A62'
};

class NavBar extends Component{
    render() {
        return (


<nav style={nav}>
<div className="nav-wrapper z-depth-4">
  <a href="/" className="brand-logo">Vagabond</a>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><a href="/cities">Cities</a></li>
    <li><a href="/profile">Profile</a></li>
  </ul>
  
</div>
</nav>


) }

}

export default NavBar