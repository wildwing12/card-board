import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand href="#home">Navbar</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link to="/write" style={{ textDecoration: "none" }}><Nav.Link href="#write">Write</Nav.Link></Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default Layout;
