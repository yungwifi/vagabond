import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const Splash = styled.div`
display: flex;


img{
    width: 100vw;
    
}
nav{
 background-color: #2E4A62;
}
`

class HomePage extends Component {
    render() {
        return (
           <Splash>
            <div>
            <nav>
    <div class="nav-wrapper z-depth-4">
      <a href="#" class="brand-logo">Vagabond</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sign Up</a></li>
        <li><a href="badges.html">Log In</a></li>
      </ul>
    </div>
  </nav>
  <img src='atlanta.jpg' alt="atlanta" />  
            </div>
         </Splash>
         
        )
    }
}

export default HomePage