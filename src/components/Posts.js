import React, {Component} from "react";
import Axios from "axios";
class Posts extends Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
}

// set function to get json data and updare state
getPosts(url){
  Axios.get(url)
  .then((response) => {
    this.setState({
      posts:response.data.data.children,
      //end of set state
    })
    //end of then
  }).catch((errors)=>{
    console.log(errors);
    //end of catch
  });
  //end of getMovies
}

  render(){
    return(
      <div>Test</div>
    );
  }
}

export default Posts;
