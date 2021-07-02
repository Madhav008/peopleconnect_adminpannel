import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import CreateCardStep from "../components/CreateCardSteps";
import "../App.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { storage } from "../firebase/firebase";

const CompanyDetail = ({ history }) => {
  const [name, setName] = useState(null);
  const [speciality, setSpeciality] = useState(["", "", "", "", "", ""]);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreviw] = useState(null);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [pos, setPos] = useState(null);
  const [ph, setPh] = useState(null);
  const [whats, setWhats] = useState(null);
  const [add, setAdd] = useState(null);
  const [email, setEmail] = useState(null);
  const [web, setWeb] = useState(null);
  const [est, setEst] = useState(null);
  const [loc, setLoc] = useState(null);
  const [abt, setAbt] = useState(null);
  const [nature, setNature] = useState(null);
  const [url, setUrl] = useState("");
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((getDownloadURL) => {
            setUrl(getDownloadURL);
          });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const json = {
      userId: userInfo._id,
      firstName: fname,
      logo: url,
      lastname: lname,
      position: pos,
      phone: ph,
      companyName: name,
      whatsApp: whats,
      address: add,
      email: email,
      website: web,
      location: loc,
      about: abt,
      establish: est,
      nature: nature,
      specialities: speciality,
    };
    const { data } = await axios.post("/companydetail", json, config);

    if (data) {
      history.push("/social");
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviw(reader.result);
        handleUpload();
      };

      reader.readAsDataURL(image);
    } else {
      setPreviw(null);
    }
  }, [image, preview]);

  const changeInputValue = (index, e) => {
    const values = [...speciality];

    if (e != "") {
      values[index] = e;
      setSpeciality(values);
    }
  };

  return (
    <>
      <CreateCardStep step1 step9 step2 step3 step4 step5 step6 step7 step8 />
      <Container className="my-5">
        <h1 className="text-center">Fill The Company Detail</h1>

        <Card
          className=" card rounded my-3 p-3 "
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        >
          <Card.Img
            className="card-img"
            style={{ objectFit: "cover" }}
            variant="top"
            src={preview}
          />
        </Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Logo</Form.Label>
            <Form.Control
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];

                if (file && file.type.substr(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="position">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              value={pos}
              onChange={(e) => setPos(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="whatsapp">
            <Form.Label>WhatsApp No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter whatsapp"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter website"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="establish">
            <Form.Label>Nature</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Type/Nature of Company"
              value={nature}
              onChange={(e) => setNature(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="establish">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location of Company"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="establish">
            <Form.Label>About The Company</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Detail About The Company"
              value={abt}
              onChange={(e) => setAbt(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="establish">
            <Form.Label>Establish</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter establish"
              value={est}
              onChange={(e) => setEst(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <h1>Specialities</h1>
          {speciality.map((special, index) => (
            <Form.Group controlId="specialities">
              <Form.Label>specialities</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter specialities"
                value={special}
                onChange={(e) => changeInputValue(index, e.target.value)}
              ></Form.Control>
            </Form.Group>
          ))}

          <Button type="submit" variant="primary">
            Submit and Next
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CompanyDetail;
