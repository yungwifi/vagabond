import React, { Component } from 'react';
import axios from 'axios'
import { Button, Modal  } from 'react-materialize'
import { Link, Redirect } from 'react-router-dom'

class ShowPostPage extends Component {
  state = {
    post: {},
    redirect: false
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = () => {
    const cityId = this.props.match.params.city_id
    const postId = this.props.match.params.id
    axios.get(`/api/cities/${cityId}/posts/${postId}`)
      .then(res => {
        console.log("Getting Post", res.data)
        this.setState({
          post: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  deletePost = () => {
    const cityId = this.props.match.params.city_id
    const url = `/api/cities/${cityId}/posts/${this.state.post.id}`
    console.log("DELETE POST ROUTE BEING CALLED", url)
    axios.delete(url)
      .then((res) => {
        console.log("RESPONSE FROM POST DELETING", res.data)
        this.setState({redirect: true})
      }).catch(console.error)
  }

  render() {
    if(this.state.redirect){
      return(<Redirect to={`/cities/${this.state.post.city_id}`}/>)
    }
    return (
      <div>

        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
              </div>
              <div className="card-content">
                <span className="card-title">{this.state.post.title}</span>
                <p>{this.state.post.content}</p>
                <Modal 
                header='Delete Post'
                trigger={<Button> Delete Post</Button>}>
                <p> Are you sure you want to delete this post? </p>
                <Button onClick={this.deletePost}> Delete Post </Button>
                </Modal>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ShowPostPage;