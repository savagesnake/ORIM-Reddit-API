import React from 'react';

const Comment = (props) => {
  const {body,author} = props.comment.data
  return(
  <div className="comment">
    <div className="commentAuthor">By: {author}</div>
    <p>{body}</p>
  </div>
  );
}

export default Comment;
