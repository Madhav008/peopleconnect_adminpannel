import React, { useState, useEffect } from "react";
import CreateCardStep from "../components/CreateCardSteps";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { logout } from "../reducers/userReducer";

const LandingScreen = ({ history }) => {
  const [companyUrl, setcompanyUrl] = useState(null);
  const { userInfo } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  const isLoggedIn = async () => {
    console.log("Logged In");

    try {
      if (userInfo) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await axios.get("/api/auth/profile", config);
        console.log(data);
      } else {
        history.push("/login");
      }
    } catch (error) {
      logoutHandler();
      history.push("/login");
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, [history, isLoggedIn]);
  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const json = {
      companyUrl: companyUrl,
      userId: userInfo._id,
    };
    const { data } = await axios.post("/link", json, config);

    if (data) {
      history.push("/theame");
    }
  };
  return (
    <div>
      <CreateCardStep step1 step9 step2 step3 step4 step5 step6 step7 step8 />

      <Container>
        <h3 className="text-center">Update Business or Company Name</h3>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="companyName">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Company Name"
              value={companyUrl}
              onChange={(e) => setcompanyUrl(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit and Next
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LandingScreen;
