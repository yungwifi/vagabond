import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'react-materialize'
import { Link, Redirect } from 'react-router-dom'

const CityImg = styled.div`
    width: 200px;
    height: 200px;
    `

class PostsPage extends Component {
    state = {
        posts: [],
        redirect: false
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
        if (this.state.redirect) {
            return (<Redirect to={`/cities/${this.props.match.params.city_id}`} />)
          }
        const cardLoop = this.props.posts.map((post, i) => {
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