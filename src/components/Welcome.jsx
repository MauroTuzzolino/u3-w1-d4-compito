import { Alert, Container } from "react-bootstrap";

function Welcome() {
  return (
    <Container className="mt-4">
      <Alert variant="info" className="text-center">
        <h1>Benvenuto nel nostro Shop!</h1>
        <p>Scopri i migliori prodotti e offerte disponibili per te.</p>
      </Alert>
    </Container>
  );
}

export default Welcome;
