import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => (
  <ul className="list-unstyled">
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} />
    ))}
  </ul>
);

export default CommentsList;