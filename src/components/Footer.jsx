import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
        <div className="footerMenu">
<hr />
        <Container className="footerContainer">
          <Row>
            <Col>
              <Navbar variant="dark">
                <Container>
                  <Nav className="me-auto flex-column">
                  <h4 className="">Quick Links</h4>
                    <ul>

                  <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link "  aria-current="page" to="/store">
                  Store
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li >
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li >
                <Link  className="nav-link" to="/account">
                  Account
                </Link>
              </li>
                    </ul>
                  </Nav>

                </Container>
              </Navbar>
            </Col>
            <Col>
              <Navbar variant="dark">
                <Container>
                  <Nav className="me-auto flex-column">
                  <h4>For Him</h4>
                    <Nav.Link href="#home">Men Jeans</Nav.Link>
                    <Nav.Link href="#features">Men Shirts</Nav.Link>
                    <Nav.Link href="#pricing">Men Shorts</Nav.Link>
                    <Nav.Link href="#features">Men Shoes</Nav.Link>
                    <Nav.Link href="#pricing">Men Accessories</Nav.Link>
                    <Nav.Link href="#pricing">Men Jackets</Nav.Link>

                  </Nav>
                </Container>
              </Navbar>
            </Col>

            <Col>
              <Navbar variant="light">
                <Container>
                  <Nav className="me-auto flex-column footercol">
                  <h4>For Her</h4>
                    <Nav.Link href="#home">Women Jeans</Nav.Link>
                    <Nav.Link href="#features">Women Shirts</Nav.Link>
                    <Nav.Link href="#pricing">Women Shorts</Nav.Link>
                    <Nav.Link href="#features">Women Shoes</Nav.Link>
                    <Nav.Link href="#pricing">Women Accessories</Nav.Link>
                    <Nav.Link href="#pricing">Women Jackets</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      <hr />
      </div>
    </div>
  )
}
