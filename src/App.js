import React, { Component } from 'react';
import Root from './components/Root';
import Posts from './components/Posts';
import {Route, Router, browserHistory,IndexRoute} from 'react-router';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Posts} />
          <Route path={"post"} component={Posts} />
        </Route>
      </Router>
    );
  }
}

export default App;
