import React, {Component} from 'react';
import Post from './Post';
import Buttons from './Buttons';
import Axios from 'axios';

class List extends Component {
  constructor(){
      super();
      this.state={
        posts:[],
        search:"",
        before:null,
        after:null,
        pgLocation:0
      }
      this.getPosts = this.getPosts.bind(this)
      this.prevPosts = this.prevPosts.bind(this)
      this.nextPosts = this.nextPosts.bind(this)
      this.updateSearch = this.updateSearch.bind(this)

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

    //updatet the statet of search to the value typed in
    updateSearch(event){
        this.setState({
          search: event.target.value
        });
    }

  componentDidMount(){
    let apiURL = "https://www.reddit.com/r/all/hot.json?limit=5";
    //call function and pass the url
    this.getPosts(apiURL);
  }

  render(){
    //set a filter for any tyoe letter in the input box
    let filterPosts = this.state.posts.filter((post)=>{
        return (
          post.data.title.toLowerCase().indexOf(this.state.search) !== -1
        )
      }
    );
    return(
      <div>
        <section id="filter">
            <label></label>
          <input className="filter-box" type="text" value={this.state.Posts} onChange={this.updateSearch.bind(this)} placeholder="Search Filter"/>
        </section>
         <Buttons pgLocation={this.state.pgLocation}  prev={this.prevPosts} next={this.nextPosts}/>
      <ul  className="posts">
        {filterPosts.map((post,index)=>{
          return(
            <Post key={index} post={post.data} />
            )
        })}
      </ul>
      <Buttons pgLocation={this.state.pgLocation} prevStatus={this.state.before} prev={this.prevPosts} next={this.nextPosts}/>
    </div>
    );
  }
}

// export List component
export default List;
