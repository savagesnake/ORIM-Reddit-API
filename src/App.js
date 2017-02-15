import React, { Component } from 'react';
import './css/App.css';
import Root from './components/Root';
import List from './components/List';
import PostView from './components/PostView';
import {Route,Router,browserHistory,IndexRoute } from 'react-router';

/**
* set up the route component
* set the posts list as defualt "/"
* set the post path params :subreddit/:id
**/
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={List}/>
          <Route path={"post/:subreddit/:id"} component={PostView} />
        </Route>
      </Router>
    );
  }
}

//export App component
export default App;
