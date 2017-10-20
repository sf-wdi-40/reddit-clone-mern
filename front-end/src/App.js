import React, { Component } from 'react';
import './App.css';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={PostsContainer}/>
          <Route path="/posts/:post_id" component={PostContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
