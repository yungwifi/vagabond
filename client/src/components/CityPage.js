import React, { Component } from 'react'
import Photo1 from './images/london.jpg'
import Photo2 from './images/san_francisco.jpg'
import Photo3 from './images/photo2.jpg'
import { Parallax, Background } from 'react-parallax'
import CityVerbiage from './CityVerbiage'

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class CityPage extends Component {
    render() {
        return (
          <div>
          
          <Parallax bgImage={Photo1}
            strength={500}>
            <div style={{height: 500}}>
              <div style={insideStyles}>London</div>
            </div>
          </Parallax>
          <h2>See posts for London</h2>
          <Parallax bgImage={Photo2} strength={400}>
            <div style={{height: 500}}>
              <div style={insideStyles}>San Francisco</div>
            </div>
          </Parallax>
          <h2>See posts for San Fran</h2>
          <Parallax bgImage={Photo3} strength={300}>
            <div style={{height: 500}}>
              <div style={insideStyles}>Atlanta</div>
            </div>
          </Parallax>
         
            <h2>See posts for Atlanta</h2>
        </div>
        )
    }
}

export default CityPage