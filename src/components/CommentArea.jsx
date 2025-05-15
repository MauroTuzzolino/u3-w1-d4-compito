import React, { Component } from "react";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import Loading from "../components/Loading";
import Error from "../components/Error";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
    error: null,
  };

  fetchComments = async () => {
    const { asin } = this.props;
    try {
      this.setState({ loading: true });
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzllZDFjMjUwNDAwMTUxYWI2NTAiLCJpYXQiOjE3NDczMTAxNjAsImV4cCI6MTc0ODUxOTc2MH0.peo7062loMcg7H1CRADDp4Dy1m_QBX4P3FegY02NRIc",
        },
      });
      if (!response.ok) throw new Error("Errore nel recupero commenti");
      const data = await response.json();
      this.setState({ comments: data, loading: false, error: null });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  handleCommentAdded = () => {
    this.fetchComments();
  };

  render() {
    const { comments, loading, error } = this.state;
    return (
      <div className="comment-area">
        <h5>Recensioni</h5>
        {loading && <Loading />}
        {error && <Error message={error} />}
        <CommentsList comments={comments} />
        <AddComment asin={this.props.asin} onCommentAdded={this.handleCommentAdded} />
      </div>
    );
  }
}

export default CommentArea;
