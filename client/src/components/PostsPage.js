import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

const CityImg = styled.div`
    width: 200px;
    height: 200px;
    `

class PostsPage extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getAllPosts()
    }

    getAllPosts = () => {
        const cityId = this.props.match.params.city_id
        axios.get(`/api/cities/${cityId}/posts`)
            .then(res => {
                console.log("Getting Posts", res.data)
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    deletePost = () => {
        const cityId = this.props.match.params.city_id
        const url = `/api/cities/${cityId}/posts/:id`
        console.log("DELETE POST ROUTE BEING CALLED", url)
        axios.delete(url)
            .then((res) => {
                console.log("RESPONSE FROM SPOT DELETING", res.data)
                this.componentDidMount()
            }).catch(console.error)
    }

    render() {
        const cardLoop = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                    <div className="col s12 m7">
                        <h2 className="header">{post.title}</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                                <CityImg >
                                    <img src="https://lorempixel.com/100/190/nature/6" />
                                </CityImg>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>{post.content}</p>
                                    <br />
                                    <Link to={`/cities/${post.city_id}/posts/${post.id}`}><Button> Show Post </Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
        )
        return (
            <div>
                {cardLoop}
            </div>
        );
    }
}

export default PostsPage;