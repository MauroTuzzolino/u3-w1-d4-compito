import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <SingleBook
              book={book}
              selected={selectedAsin === book.asin}
              onSelect={() =>
                setSelectedAsin(selectedAsin === book.asin ? null : book.asin)
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
