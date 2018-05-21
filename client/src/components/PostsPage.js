import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Cityimg = styled.div`
    width: 200px;
    height: 200px;`

class PostsPage extends Component {
    state = {
        posts: []
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