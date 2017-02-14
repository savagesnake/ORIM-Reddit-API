import React, { Component } from 'react';
import Root from './components/Root';
import {Route, Router, browserHistory,IndexRoute} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Root} />
          <Route path={"post"} />
        </Route>
      </Router>
    );
  }
}

export default App;
