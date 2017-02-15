import React, {Component} from "react";
import Axios from "axios";
import Comment from "./Comments";
import noImage from "../../public/noImage.png";


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
    const {title,thumbnail} = this.state.postInfo
    //regex url to check if the url is valid
    const urlRegex = /^(http|https)/;

      return(
        <article>
          <section className="postInfo">
            <img src={urlRegex.test(thumbnail) ? thumbnail : noImage} alt={title}/>
            <p className="titleView">{title}</p>
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
