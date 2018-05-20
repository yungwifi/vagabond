import React, { Component } from 'react';
import photo1 from './images/london.jpg'
import photo2 from './images/san_francisco.jpg'

class CityPage extends Component {
    render() {
        return (
            <div>
                 <div class="parallax-container">
      <div class="parallax">
      <img src={photo1} alt='parallax_yo'/>
      </div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">You hit the city page</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax">
      <img src={photo2} alt='parallax_yo' />
      

         
            </div>
            </div>
            </div>
        );
    }
}

export default CityPage;