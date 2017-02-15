import React, {Component} from 'react';
import Header from './Header';

export default class Root extends Component {
  render(){
    return(
      <article className="App">
        <Header />
        <section>
          {this.props.children}
        </section>
      </article>
    )
  }
}
