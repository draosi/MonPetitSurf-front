import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const NavBar = () => {
  let navigate = useNavigate();

  const logOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("usertoken");
    navigate("/");
  };

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);
  console.log(decoded);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Mon Petit Surf</Navbar.Brand>
          <Nav>
            {decoded && (
              <>
                <Nav.Link href="/search">Home</Nav.Link>
                <Nav.Link href={`/user/${decoded.user._id}`}>Profile</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
                <Nav.Link href="" onClick={logOut}>
                  Log out
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
