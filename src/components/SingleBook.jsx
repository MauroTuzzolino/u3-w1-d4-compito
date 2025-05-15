import React from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

const SingleBook = ({ book, selected, onSelect }) => {
  return (
    <Card
      className={`custom-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    >
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="card-img"
        />
      </div>
      <Card.Body className="custom-card-body">
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text>Prezzo: €{book.price.toFixed(2)}</Card.Text>
        {selected && (
          <div onClick={(e) => e.stopPropagation()}>
            <CommentArea asin={book.asin} />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
