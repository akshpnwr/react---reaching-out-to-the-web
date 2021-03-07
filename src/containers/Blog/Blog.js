import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
    selectPostId: null,
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
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

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
