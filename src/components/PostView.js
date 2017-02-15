import React, {Component} from "react";
import Axios from "axios";
import Comment from "./Comments";
import noImage from "../../public/noImage.png";
import {Link} from "react-router";


export default class PostView extends Component {
  constructor(){
      super();
      this.state={
        postInfo:[],
        comments:[]
      }
  }


  getPostComments(){
      // build the url to fetch data
      const url = `https://www.reddit.com/r/${this.props.params.subreddit+'/comments/'+this.props.params.id+'.json'}`

      // fetch data for single post
      Axios.get(url)
      .then((response)=>{
        this.setState({
          postInfo:response.data[0].data.children[0].data,
          comments:response.data[1].data.children
        })
      })
      .catch((errors)=>{
        console.log(errors);
      });
    }

    componentDidMount(){
      this.getPostComments();
    }


render(){
    const {title,thumbnail,created} = this.state.postInfo
    //create date from the utc
    const date = new Date(Date(created));

    //regex url to check if the url is valid
    const urlRegex = /^(http|https)/;

      return(
        <article>
          <Link to='/' className="btn back">Back</Link>
          <section className="postInfo">
            <img src={urlRegex.test(thumbnail) ? thumbnail : noImage} alt={title}/>
            <p className="titleView">{title}</p>
            <strong>Created: {date.toLocaleDateString("en-US")}</strong>
          </section>
          <div id="comments">
            <hr/>
            {this.state.comments.map((comment,index)=>{
              return(
                <Comment key={index} comment={comment}/>
              )
            })
          }
          </div>
        </article>
    );
  }
}
