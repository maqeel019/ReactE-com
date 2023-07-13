import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BeforeFooter from "./BeforeFooter";

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
          nostrum numquam enim cupiditate odio quam?
        </p>

        <Container className="teamContainer">
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
     
     <BeforeFooter /> 
    </div>
  );
}
