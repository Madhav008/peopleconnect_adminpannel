import React, { useState, useEffect } from "react";
import ButtonStyle from "../components/ButtonStyle";
import { Container, Row, Col } from "react-bootstrap";
import TheamCard from "../components/TheamCard";
import CreateCardStep from "../components/CreateCardSteps";
import axios from "axios";
const TheameScreen = ({ history }) => {
  const [template, settemplate] = useState([]);

  useEffect(() => {
    fetch("/template")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        settemplate(data.msg);
      });
  }, []);

  return (
    <div>
      <CreateCardStep step1 step9 step2 step3 step4 step5 step6 step7 step8 />

      <Container>
        <h3 className="text-center">Select Theme for your card.</h3>
        <Row>
          {template.map((e) => (
            <Col key={e.id} sm={12} md={4} lg={4} xl={4}>
              <TheamCard template={e} history={history} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TheameScreen;
