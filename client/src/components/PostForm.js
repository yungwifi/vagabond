import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Header = styled.div`
padding: 20px;
margin: auto;
text-align: center;`
const Formbody = styled.div`
padding: 40px;
margin: auto;
text-align: center;
`
class PostForm extends Component {
    state = {
        Post: []
    }
    handleChange = (event) => {
        const post = { ...this.state.Post }
        post[event.target.name] = event.target.value
        this.setState({ post })
        console.log(post)
    }
    createPost = () => {
        axios.post('/api/cities/:city_id/posts', { post: (this.state.Post) })
        console.log(this.state.Post)
            .then((res) => {
                const posts = [...this.state.Post]
                posts.push(res.data)
                console.log(posts)
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        return (
            <div>
                <Header><h2>New Form</h2></Header>
                <Formbody>
                    <div className="row">
                        <form className="col s12" onSubmit={this.createPost}>
                            <div className="row">
                                <div className="input-field col s8">
                                    <input onChange={this.handleChange} name="title" type="text" class="validate" >
                                    </input>
                                    <label for="title">title</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s8">
                                    <input onChange={this.handleChange} name="content" type="text" class="validate" >
                                    </input>
                                    <label for="content">content</label>
                                </div>
                                <br />
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Formbody>
            </div>
        )
    }
}

export default PostForm;