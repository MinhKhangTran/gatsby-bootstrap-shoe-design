import React, { useState } from "react";
import {
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e: any): void => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <section id="contact">
      <h2 className="section_heading mt-5 text-capitalize">Contact</h2>
      <p className="section_sub lead text-secondary">
        I'm baby activated charcoal yr occupy synth retro kitsch portland.{" "}
      </p>
      <Row className="">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Col className="mx-auto">
            <FloatingLabel
              className="mb-4"
              controlId="floatingName"
              label="Name"
            >
              <Form.Control required type="text" placeholder="full name" />
              <Form.Control.Feedback type="invalid">
                Please provide a name
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col className="mx-auto">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-4"
            >
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col className="mx-auto">
            <FloatingLabel controlId="floatingTextarea" label="Message">
              <Form.Control
                required
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "150px" }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col className="mx-auto">
            <Button type="submit" variant="success" className="my-5">
              Submit
            </Button>
          </Col>
        </Form>
      </Row>
    </section>
  );
};

export default Contact;
