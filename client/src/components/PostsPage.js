import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const cityimg = styled.img`
    width: 200px
    hight: 200px`
const cardHeader =styled.div`
`
class PostsPage extends Component {
    state = {
        posts: []
    }
    
    render() {
        const cardLoop = this.state.posts.map((post, i) => {
            return(
                <div key={i}>
                < div class = "col s12 m7" >
                    <h2 class="header">{post.title}</h2>
                    <div class="card horizontal">
                        <div class="card-image">
                            <cityimg src="https://lorempixel.com/100/190/nature/6" />
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                    </div>
  </div >
        )}
    )
        return (
            <div>
        {cardLoop}
            </div>
        );
    }
}

export default PostsPage;