import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Photos from '../photos/Atlanta.jpg'

let sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Photos})`
  };

  let Header = {
      color: "#880000",
      textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"
}
  

class HomePage extends Component {

    render() {
        return (
            <div style={sectionStyle}>
       
<h1 style={Header}>Project Vagabond </h1>
        
       
         </div>
         
        )
    }
}

export default HomePage;