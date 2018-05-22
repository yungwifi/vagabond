import React, { Component } from 'react'
import { Link }from 'react-router-dom'
import axios from 'axios'
import  Atlanta1 from './images/Atlanta1.png'
import { Parallax } from 'react-parallax'
import PostsPage from './PostsPage';


const Styles = { background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };

class CityShow extends Component {
    state = {
        city: {},
        posts: [], 
    }

    componentDidMount() {
        this.getCity()
    }

    getCity = () =>{
        const cityId = this.props.match.params.city_id
        console.log('MOUNTED')
        axios.get(`/api/cities/${cityId}`)
            .then(response => {
                console.log('Response.data: ', response.data)
                this.setState({
                    city: response.data,
                    posts: response.data.posts,
                })
            })
    
    }
    render() {

        return(
            <div> 
            {this.state.city.name}
                    {this.state.city.post}

                       

                         <Parallax bgImage={Atlanta1} strength={300}>
          <div style={{ height: 500 }}>
            <div style={Styles}>Atlanta</div>
          </div>

            </Parallax>
            <Link to={`/cities/${this.props.match.params.city_id}/posts/new`}> <button>Add New Post</button></Link>
            <PostsPage posts={this.state.posts} />
        </div>
        )
    
    }
}
export default CityShow