import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    selectPostId: null,
  };

  componentDidMount() {
    axios.get('/posts').then((res) => {
      const posts = res.data.slice(0, 4).map((post) => {
        return {
          ...post,
          author: 'aksh',
        };
      });
      this.setState({
        posts: posts,
      });
    });
  }

  postsHandler = (id) => {
    this.setState({
      selectPostId: id,
    });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title.slice(0, 11)}
          author={post.author}
          clicked={() => this.postsHandler(post.id)}
        />
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
