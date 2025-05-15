import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments, setComments }) => {
  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzllZDFjMjUwNDAwMTUxYWI2NTAiLCJpYXQiOjE3NDczMTAxNjAsImV4cCI6MTc0ODUxOTc2MH0.peo7062loMcg7H1CRADDp4Dy1m_QBX4P3FegY02NRIc",
        },
      });
      console.log("DELETE response:", response);
      if (response.ok) {
        setComments((prev) => prev.filter((c) => c._id !== commentId));
      } else {
        alert("Errore nella cancellazione del commento");
      }
    } catch (error) {
      alert("Errore di rete");
    }
  };

  return (
    <ul className="list-unstyled">
      {comments.map((comment) => (
        <div key={comment._id} className="d-flex align-items-center mb-2">
          <SingleComment comment={comment} />
          <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(comment._id)}>
            DELETE
          </button>
        </div>
      ))}
    </ul>
  );
};

export default CommentsList;
