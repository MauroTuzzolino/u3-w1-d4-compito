import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    email: "",
    error: null,
    submitting: false,
    lastEmail: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitting: true, error: null });
    const emailToShow = this.state.email;
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
          email: this.state.email,
        }),
      });
      if (!response.ok) throw new Error("Errore nell'invio del commento");
      this.setState({
        comment: "",
        rate: 1,
        email: "",
        submitting: false,
        lastEmail: emailToShow,
      });
      this.props.onCommentAdded();
    } catch (error) {
      this.setState({ error: error.message, submitting: false });
    }
  };

  render() {
    const { comment, rate, email, error, submitting, lastEmail } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="mt-3">
          <div className="mb-2">
            <label>Recensione</label>
            <input type="text" name="comment" value={comment} onChange={this.handleInputChange} className="form-control" required />
          </div>
          <div className="mb-2">
            <label>Voto</label>
            <select name="rate" value={rate} onChange={this.handleInputChange} className="form-control" required>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.handleInputChange} className="form-control" required />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Invio..." : "Aggiungi"}
          </button>
        </form>
        {lastEmail && (
          <div className="alert alert-success mt-2">
            Commento inviato con la mail: <strong>{lastEmail}</strong>
          </div>
        )}
      </>
    );
  }
}

export default AddComment;
