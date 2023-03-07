import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Mon Petit Surf</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            <Nav.Link href="#pricing">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
