import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";
import horrorBooks from "../books/horror.json";
import romanceBooks from "../books/romance.json";
import scifiBooks from "../books/scifi.json";
import historyBooks from "../books/history.json";
import SingleBook from "../components/SingleBook";

const genres = {
  Fantasy: fantasyBooks,
  Horror: horrorBooks,
  Romance: romanceBooks,
  SciFi: scifiBooks,
  History: historyBooks,
};

function BookFilter() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const filteredBooks = selectedGenre && genres[selectedGenre].filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container className="mt-4">
      <Row className="mb-4 justify-content-center">
        {Object.keys(genres).map((genre) => (
          <Col key={genre} xs={6} sm={4} md={3} lg={2} className="mb-2">
            <Button
              variant={selectedGenre === genre ? "primary" : "dark"}
              className="w-100"
              onClick={() => {
                setSelectedGenre(selectedGenre === genre ? null : genre);
                setSelectedAsin(null);
              }}
            >
              {genre}
            </Button>
          </Col>
        ))}
      </Row>

      {selectedGenre && (
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Cerca un libro..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </Form.Group>
      )}

      <Row>
        {filteredBooks &&
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex align-items-stretch">
              <div className="w-100 position-relative">
                <SingleBook book={book} selected={selectedAsin === book.asin} onSelect={() => setSelectedAsin(selectedAsin === book.asin ? null : book.asin)} />
                <Button
                  variant="danger"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleDelete(book.asin)}
                  style={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}
                >
                  DELETE
                </Button>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default BookFilter;
