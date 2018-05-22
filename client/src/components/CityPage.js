import React, { Component } from 'react'
import Photo1 from './images/london.jpg'
import Photo2 from './images/san_francisco.jpg'
import Photo3 from './images/photo2.jpg'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Styles = { background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };

class CityPage extends Component {


  render() {

    return (
      <div>

        <Parallax bgImage={Photo1}
          strength={500}>
          <div style={{ height: 500 }}>
            <div style={Styles}>London</div>
          </div>
        </Parallax>
        <a href="/cities/:city_id/posts"><h2>See posts for London</h2></a>
        <Parallax bgImage={Photo2} strength={400}>
          <div style={{ height: 500 }}>
            <div style={Styles}>San Francisco</div>
          </div>
        </Parallax>
        <a href="/cities/:city_id/posts"><h2>See posts for San Fran</h2></a>
        <Parallax bgImage={Photo3} strength={300}>
          <div style={{ height: 500 }}>
            <div style={Styles}>Atlanta</div>
          </div>
        </Parallax>

        <a href="/cities/:city_id/posts"> <h2>See posts for Atlanta</h2></a>
      </div>
      
    )
  }
}


export default CityPage