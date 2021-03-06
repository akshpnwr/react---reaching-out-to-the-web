import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    console.log('didmout');
    this.loadData();
  }

  componentDidUpdate() {
    console.log('didupdate');
    this.loadData();
  }

  loadData() {
    if (!this.props.match.params.id) return;

    if (
      !(
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      )
    )
      return;

    axios.get(`/posts/${this.props.match.params.id}`).then((res) => {
      this.setState({
        loadedPost: res.data,
      });
    });
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`).then((res) => {
      console.log(res);
    });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.match.params.id)
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;

    if (this.props.match.params.id && this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
