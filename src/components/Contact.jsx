import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BeforeFooter from "./BeforeFooter";

export default function Contact() {
   const [form, setForm] = useState({
     username: "",
     email: "",
    message: "",
   })
   const handleChange = (e ) => {
    const { name, value  } = e.target
    setForm((prevForm) =>({
      ...prevForm,
      [name]: value,
    }))
   }
   console.log(form);
  return (
    <div>
      <div className="ContactHeader">
        <h1>How to Reach us</h1>
      </div>

      <div className="contactBody">
        <Row>
          <Col>
            <span>
              <img src="/images/message.png" alt="message" />{" "}
              <p>abc@gmail.com</p>{" "}
            </span>
            <span>
              <img src="/images/phone.png" alt="phone" /> <p> 123-456-789</p>
            </span>
            <span>
              {" "}
              <img src="/images/clock.png" alt="clock" />{" "}
              <p>Monday to Saturaday - 9:00am to 5:00am </p>
            </span>
            <span>
              <img src="/images/clock.png" alt="clock" />{" "}
              <p> Sunday - 10:00am to 3:00pm </p>
            </span>

            <div className="needhelp">
              <span>
                <h4>Need Help ? Call us</h4>{" "}
              </span>
              <span>
                <h4 id="number">123-456-789</h4>
              </span>
            </div>
          </Col>

          <Col>
            <div className="contactForm">
              <Form>
                <Form.Group className="mb-3 mt-3" >
                <Form.Control 
                placeholder="Name" 
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                />
                <Form.Control 
                type="email" 
                placeholder="Email" 
                required 
                name="email" 
                value={form.email}
                onChange={handleChange}
                />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                <Form.Control
                 as="textarea" 
                 rows={6} 
                 placeholder="Message"
                 name="message"
                 value={form.message}
                 onChange={handleChange}
                 minLength="10"
                 />
                 <Form.Text className="text-muted">
                    Words : {form.message.length}
                  </Form.Text>
               </Form.Group>
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <BeforeFooter />
    </div>
  );
}
