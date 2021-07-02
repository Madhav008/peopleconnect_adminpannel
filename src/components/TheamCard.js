import React from "react";
import { Card, Form, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { history } from "react-router";

const TheamCard = ({ template ,history}) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const submitHandler = async (e, templateId) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const json = {
      userId: userInfo._id,
      TemplateId: templateId,
    };
    const { data } = await axios.post("/template", json, config);

    if (data) {
      history.push("/company");
    }
  };
  return (
    <>
      <Form onSubmit={(e) => submitHandler(e, template._id)}>
        <Form.Group>
          <Card className="rounded my-3 p-3">
            <Image src={template.image} alt={template.name} fluid rounded />

            <Card.Body>
              <Card.Title as="div">
                <p>{template.name}</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </Form.Group>
        <Button className="d-flex m-auto" type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </>
  );
};

export default TheamCard;
