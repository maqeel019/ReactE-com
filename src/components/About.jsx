import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="AboutSection">
        <h1>What are We Offering</h1>
      </div>
      <div className="d-flex justify-content-center card1">
        <Card style={{ width: "80vw" }}>
          <div className="d-flex">
            <Card.Body className="flex-grow-1 text-start">
              <h1>Who we Are</h1>
              <hr />
              <p style={{ whiteSpace: "pre-line" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                aspernatur quas at aliquid quae delectus ipsum perferendis
                doloremque suscipit sunt. Ut expedita culpa repellendus delectus
                quia vero nulla, esse fuga perferendis doloremque suscipit sunt.
                Ut expedita culpa repellendus delectus quia vero nulla, esse
                fuga
              </p>
            </Card.Body>
            <img
              src="/images/team.jpg"
              alt="Card Image"
              className="w-50"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
        </Card>
      </div>

      <div className="card2">
        <hr />
        <h6>A few Words About</h6>
        <h1>Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing eli t. Quae
          veritatis nihil minima dolor repudiandae nostrum numquam enim
          cupiditate odio quam? t. Quae veritatis nihil minima dolor repudiandae
          nostrum numquam enim cupiditate odio quam?
        </p>

        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/batman.jpeg" />
                <Card.Body>
                  <h4>Batman</h4>
                  <h6>Ceo / Founder</h6>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/superman.jpeg" />
                <Card.Body>
                  <h4>SuperMan</h4>
                  <h6>COO</h6>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/spiderman.jpg" />
                <Card.Body>
                  <h4>SpiderMan</h4>
                  <h6>Marketingg Head</h6>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/ironman.jpg" />
                <Card.Body>
                  <h4>IronMan</h4>
                  <h6>Lead Developer</h6>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/aquaman.jpeg" />
                <Card.Body>
                  <h4>AquaMan</h4>
                  <h6>Intern Designer</h6>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/wonderwoman.jpeg" />
                <Card.Body>
                  <h4>WonderWoman</h4>
                  <h6>Graphic Designer</h6>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="card3">
        <div className="content">
          <hr />
          <h3>Follow Us</h3>
          <a href="#">
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/images/twitter.png" alt="twitter" />
          </a>
          <a href="#">
            <img src="/images/github.png" alt="github" />
          </a>
        </div>
      </div>

      <div className="card4 m-4">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="/images/quality.png" />
                <Card.Body>
                  <h5>Best Quality</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, tempore!
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="/images/tag.png" />
                <Card.Body>
                  <h5>Best Offers</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, tempore!
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="/images/delivery.png" />
                <Card.Body>
                  <h5>Worldwide Shipping</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, tempore!
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="/images/lock.png" />
                <Card.Body>
                  <h5>Secure Payment</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, tempore!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footerMenu">
<hr />
        <Container>
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
                  <Nav className="me-auto flex-column">
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
  );
}
