import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                activeStyle={{
                  textDecoration: 'underline',
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: 'quick-submit=true',
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}

        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
