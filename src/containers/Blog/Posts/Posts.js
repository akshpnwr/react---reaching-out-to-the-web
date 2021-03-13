import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import React, { Component } from 'react';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
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
    this.props.history.push({ pathname: `/posts/${id}` });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        // <Link to={`/${post.id}`} key={post.id}>
        <Post
          key={post.id}
          title={post.title.slice(0, 11)}
          author={post.author}
          clicked={() => this.postsHandler(post.id)}
        />
        // </Link>
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={`${this.props.match.url}/:id`}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
