import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
const ButtonStyle = () => {
  return (
    <Container>
      <Row xs="auto">
        <Col lg={10} md={9} xs="8">
          <Button className="mt-4">
            {" "}
            <i className="fa fa-chevron-circle-left"> </i> Back
          </Button>
        </Col>
        <Col lg={2} md={3} xs="3">
          <Button className="btn btn-info mt-4">
            Skip <i className="fa fa-chevron-circle-right"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonStyle;
