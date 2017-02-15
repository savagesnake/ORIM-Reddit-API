import React from "react";
import {Link} from "react-router";

// set is as a const becuase this component does not have state
const List = (props) => {
    let {title,thumbnail,url,num_comments,score,created,author,subreddit,id} = props.post;
    let date = new Date(Date(created));
    return(
      <li className="article">
        <img className="art-image" src={thumbnail} alt="not available"/>
        <p>Author: {author}</p>
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
      </li>
    )
  }

// export component
export default List;

// define the prop types
List.propTypes ={
  post: React.PropTypes.object
};
