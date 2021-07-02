import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import CreateCardStep from "../components/CreateCardSteps";
import { storage } from "../firebase/firebase";
import axios from "axios";
import { useSelector } from "react-redux";
const ServicesScreen = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const [inputFields, setInputField] = useState([
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];

    if (event.target.name === "image") {
      if (event.target.files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          values[index][event.target.name] = reader.result;
          const uploadTask = storage
            .ref(`images/${event.target.files[0].name}`)
            .put(event.target.files[0]);
          uploadTask.on(
            (error) => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(event.target.files[0].name)
                .getDownloadURL()
                .then((getDownloadURL) => {
                  values[index]["image"] = getDownloadURL;
                });
            }
          );
          setInputField(values);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      values[index][event.target.name] = event.target.value;
    }

    setInputField(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    function checkNull(inputField) {
      return inputField.title != "";
    }
    console.log(inputFields.filter(checkNull));

    //send request to data

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const json = {
      userId: userInfo._id,
      service: inputFields.filter(checkNull),
    };
    const { data } = await axios.post("/product", json, config);

    if (data) {
      history.push("/order");
    }
  };
  return (
    <div>
      <CreateCardStep step1 step9 step2 step3 step4 step5 step6 step7 step8 />

      <Container>
        <h3 className="text-center">Product and Services</h3>
        <Row>
          {inputFields.map((inputField, index) => (
            <Col key={index} sm={12} md={6} lg={4.5} xl={4}>
              <Card className="rounded my-3 p-3">
                <Card.Img
                  className="card-img"
                  style={{ objectFit: "cover" }}
                  variant="top"
                  src={inputField.image}
                />

                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Product Image</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => handleChangeInput(index, e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="title">
                      <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter Name Of Product"
                        value={inputField.title}
                        onChange={(e) => handleChangeInput(index, e)}
                      ></Form.Control>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Button
            onClick={handleSubmit}
            className="mr-auto ml-auto"
            type="submit"
            variant="primary"
          >
            Submit and next
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesScreen;
