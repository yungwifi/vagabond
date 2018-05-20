import React, { Component } from 'react';
import Photo from "./images/photo.jpg";
import axios from 'axios'

const Image = {
    width: "200px"
}



const Align = {
    display: "flex",
    flexDirection: "column"
}

const Inherit ={
    width: "inherit"
}

const Float = {
    float: "right"
}

class ProfilePage extends Component {
    
    render() {
        return (
            <div>

             <div class="row">
    <div class="col s12 m7" style={Inherit}>
      <div class="card">
        <div class="card-image">
          <img style={Image} src={Photo} />
          <div style={Align} class="card-content">
          <p> Name: </p>
                <p> Current City: </p>
                <p>Date Joined: </p>
                <button className="waves-effect waves-light btn">  Edit Profile </button>
        </div>
        </div>
       
       
      </div>
    </div>
 

            <div class="col s12 m7" style={Float}>
    <h2 class="header">Posts</h2>
    <div class="card horizontal">
      <div class="card-image">
        
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Post1</p>
          <p>Post2</p>
          <p>Post3</p>
        </div>
        <div class="card-action">
          <a href="#">Edit post</a>
        </div>
      </div>
    </div>
  </div>
  </div>
            </div>
        );
    }
}

export default ProfilePage
