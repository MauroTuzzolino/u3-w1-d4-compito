import { Navbar, Nav, Container } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MyNavbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
