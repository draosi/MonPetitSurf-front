import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home">GitHub</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
