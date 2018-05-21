import React, { Component } from 'react'
import Photo1 from './images/london.jpg'
import Photo2 from './images/san_francisco.jpg'
import Photo3 from './images/photo2.jpg'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Styles = { background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };

class CityPage extends Component {
  // state = {
  //   cities: [],
  //   city: {
  //     cityName: '',
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  //   this.getAllCities()
  // }

  // getAllCities = () => {
  //   axios.get('/api/cities')
  //     .then(res => {
  //       console.log("Saving cities to state", res.data)
  //       this.setState({ cities: res.data })
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  // createCity = () => {
  //   axios.post('/api/cities', { city: this.state.city })
  //   .then((res) => {
  //     const cities = [...this.state.cities]
  //     city.push(res.data)
  //     this.setState({cities})
  //   })
  // }

  // handleSignUp = (e) => {
  //   e.preventDefault()
  //   axios.post('/api/cities', { city: this.state.city })
  //   .then((res) => {
  //     const city = [...this.state.cities]
  //     cities.push(res.data)
  //     this.setState({cities})
  //   })
  // }

  // handleChange = (event) => {
  //   const city = { ...this.state.city }
  //   city[event.target.name] = event.target.value
  //   this.setState({ city })
  // }

  render() {

    return (
      <div>

        {/* <button className="waves-effect waves-light btn center-align btn-small">Create City </button>
   <form onSubmit={this.updateUserfunction}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              onChange={this.handleUpdateUserChange}
              name="userName"
              type="text"
              value={this.state.updatedUser.userName}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleUpdateUserChange}
              name="password"
              type="text"
              value={this.state.updatedUser.password}
            />
          </div>
          <div className="center">
            <button className="waves-effect waves-light btn center-align btn-small">
              Update
            </button>
          </div>
        </form> */}

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