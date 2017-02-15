import React, { Component } from 'react';
import './css/App.css';
import Root from './components/Root';
import Posts from './components/Posts';
import Post from './components/Post';
import {Route,Router,browserHistory,IndexRoute } from 'react-router';

/**
* set up the route component
* set the posts as defualt "/"
* set the post path params :subreddit/:id
**/
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Posts}/>
          <Route path={"post/:subreddit/:id"} component={Post} />
        </Route>
      </Router>
    );
  }
}

//export App component
export default App;
