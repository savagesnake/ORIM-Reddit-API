import React from "react";
import {Link} from "react-router";
import noImage from "../../public/noImage.png";
// set is as a const becuase this component does not have state
const Post = (props) => {
    let {title,thumbnail,url,num_comments,score,created,author,subreddit,id} = props.post;
    //regex url to check if the url is valid
    const urlRegex = /^(http|https)/;
    //create date from the utc
    const date = new Date(Date(created));

    return(
      <li className="article">
        <p className="author">Author: {author}</p>
        <div className="article-contain">
          <img className="art-image" src={urlRegex.test(thumbnail) ? thumbnail : noImage} alt="not available"/>
          <p><a href={url} target="_blank">{title}</a></p>
          <span className="date-created">created: {date.toLocaleDateString("en-US")}</span>
          <table className="post-info">
            <tbody>
              <tr>
                <td>
                  <p className="comments"> <Link  to={"/post/"+subreddit+"/"+id} >{num_comments} comments</Link></p>
                </td>
                <td>
                  <p>score:&nbsp; {score}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    )
  }

// export post component
export default Post;

// define the prop types
Post.propTypes ={
  post: React.PropTypes.object
};
