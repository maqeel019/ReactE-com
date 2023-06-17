import React from 'react'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BeforeFooter() {
  return (
    <div>
        
      <div className="card4">
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
    </div>
  )
}
