import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const Header = styled.div`
padding: 20px;
margin: auto;
text-align: center;`
const FormBody = styled.div`
padding: 40px;
margin: auto;
text-align: center;
`
class PostForm extends Component {
  state = {
    post: {
      title: '',
      content: ''
    },
    redirect: false
  }
  handleChange = (event) => {
    const post = { ...this.state.Post }
    post[event.target.name] = event.target.value
    console.log(post)
    this.setState({ post })
  }

  createPost = () => {
    const cityId = this.props.match.params.city_id
    console.log("CREATE POST ROUTE BEING CALLED", cityId)
    axios.post(`/api/cities/${cityId}/posts`, {post: this.state.post})
      .then((res) => {
        console.log("RESPONSE FROM NEW POST", res.data)
        this.setState ({ post: res.data.posts })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/cities/${this.state.post.city_id}`} />)
    }
    return (
      <div>
        <Header><h2>New Post Form</h2></Header>
        <FormBody>
          <div className="row">
              <div className="row">
                <div className="input-field col s8">
                  <input onChange={this.handleChange} name="title" type="text" >
                  </input>
                  <label for="title">title</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s8">
                  <input onChange={this.handleChange} name="content" type="text" >
                  </input>
                  <label for="content">content</label>
                </div>
                <br />
                <button onClick={this.createPost} className="btn waves-effect waves-light">Submit</button>
              </div>
         
          </div>
        </FormBody>
      </div>
    )
  }
}

export default PostForm;