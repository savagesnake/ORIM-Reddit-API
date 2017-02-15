import React, {Component} from "react";
import Axios from "axios";
class Posts extends Component {
  constructor(){
    super();
    this.state={
      posts:[],
      before:null,
      after:null,
      pgLocation:0
    }
}

// set function to get json data and updare state
getPosts(url){
  Axios.get(url)
  .then((response) => {
    this.setState({
      posts:response.data.data.children,
      before:response.data.data.before,
      after:response.data.data.after

      //end of set state
    })
    //end of then
  }).catch((errors)=>{
    console.log(errors);
    //end of catch
  });
  //end of getMovies
}
  componentDidDount(){
    let apiURL = "https://www.reddit.com/r/all/hot.json?limit=5";
    //call function and pass the url
    this.getPosts(apiURL);
  }

  /**
  * Listings do not use page numbers because their content changes so frequently.
  * Instead, they allow you to view slices of the underlying data
  * Listing JSON responses contain after and before fields
  * which are equivalent to the "next" and "prev" buttons
  **/
  // get the next five post
  nextPosts(){
    //  set after value to fetch data
      let after = this.state.after
      const nextPost = `https://www.reddit.com/r/all/hot.json?count=200&after=${after+"&limit=5"}`;

      // fetch data
      this.getPosts(nextPost);

      // add to pglocation to show the prev button
      this.state.pgLocation++
    }

  // get the previous five post
  prevPosts(){
  //  set before value to fetch data
      let before = this.state.before
      const prevPost = `https://www.reddit.com/r/all/hot.json?count=200&before=${before+"&limit=5"}`;

      // fetch data
      this.getPosts(prevPost);

      // substract from pglocation to hide the prev button
      this.state.pgLocation--
    }

  render(){
    console.log(this.props)
    return(
      <div>Test</div>
    );
  }
}
export default Posts;
