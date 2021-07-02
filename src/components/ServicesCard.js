import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const ServicesCard = () => {


  
  return (


    <>
      <Card className="rounded my-3 p-3">
        <Card.Img src="https://www.mybusinessdvc.com/panel/images/template4.png" />

        <Card.Body>
          
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload QR CODE</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="paytm">
              <Form.Control
                type="text"
                placeholder="Enter Name Of Product"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
          </Form>
        </Card.Body>
      </Card>

      
    </>
  );
};

export default ServicesCard;
