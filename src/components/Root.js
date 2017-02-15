import React, {Component} from 'react';
import Header from './Header';

export default class Root extends Component {
  render(){
    return(
      <div id="app">
        <header>
          <Header />
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
