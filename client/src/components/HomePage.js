import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Photos from '../photos/Atlanta.jpg'

let sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Photos})`
  };

class HomePage extends Component {

    render() {
        return (
            <div style={sectionStyle}>
       
<h1 >Project Vagabond </h1>
        
       
         </div>
         
        )
    }
}

export default HomePage;