import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CreateCardStep = ({
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
  step9,
}) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/">
            <Nav.Link>Company Url</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Company Url</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step9 ? (
          <LinkContainer to="/theame">
            <Nav.Link>Select Card</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Select Card</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/company">
            <Nav.Link>Company Detail</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Company Detail</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/social">
            <Nav.Link>Social</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Social</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step5 ? (
          <LinkContainer to="/service">
            <Nav.Link>Product And Services</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Product And Services</Nav.Link>
        )}
      </Nav.Item>{" "}
      <Nav.Item>
        {step6 ? (
          <LinkContainer to="/order">
            <Nav.Link>Ecommerce</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Ecommerce</Nav.Link>
        )}
      </Nav.Item>{" "}
      <Nav.Item>
        {step7 ? (
          <LinkContainer to="/images">
            <Nav.Link>Images</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Images</Nav.Link>
        )}
      </Nav.Item>{" "}
      <Nav.Item>
        {step8 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Previw Card</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Previw Card</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CreateCardStep;
