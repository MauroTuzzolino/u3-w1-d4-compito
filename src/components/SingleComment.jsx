import React from "react";

const SingleComment = ({ comment }) => (
  <li className="mb-2 border-bottom pb-2">
    <strong>{comment.author}</strong>: {comment.comment} <br />
    <span>Voto: {comment.rate}/5</span>
  </li>
);

export default SingleComment;