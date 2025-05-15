import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    error: null,
    submitting: false,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitting: true, error: null });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzllZDFjMjUwNDAwMTUxYWI2NTAiLCJpYXQiOjE3NDczMTAxNjAsImV4cCI6MTc0ODUxOTc2MH0.peo7062loMcg7H1CRADDp4Dy1m_QBX4P3FegY02NRIc",
        },
        body: JSON.stringify({
          comment: this.state.comment,
          rate: this.state.rate,
          elementId: this.props.asin,
        }),
      });
      if (!response.ok) throw new Error("Errore nell'invio del commento");
      this.setState({ comment: "", rate: 1, submitting: false });
      this.props.onCommentAdded();
    } catch (error) {
      this.setState({ error: error.message, submitting: false });
    }
  };

  render() {
    const { comment, rate, error, submitting } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <div className="mb-2">
          <label>Recensione</label>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={this.handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-2">
          <label>Voto</label>
          <select
            name="rate"
            value={rate}
            onChange={this.handleInputChange}
            className="form-control"
            required
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Invio..." : "Aggiungi"}
        </button>
      </form>
    );
  }
}

export default AddComment;