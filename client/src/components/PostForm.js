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
const createPost = () => {
    axios.post()
}

class PostForm extends Component {
    state = {  posts: []
    }
    render() {
        return (
            <div>
                <Header><h2>New Form</h2></Header>
                <Formbody>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s8">
                                <input id="title" type="text" class="validate" >
                                </input>
                                <label for="title">title</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s8">
                                <input id="content" type="text" class="validate" >
                                </input>
                                <label for="content">content</label>
                            </div>
                            <br/>
                                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
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