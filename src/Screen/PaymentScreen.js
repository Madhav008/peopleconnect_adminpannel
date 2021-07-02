import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import CreateCardStep from "../components/CreateCardSteps";
import { useSelector } from "react-redux";
import axios from "axios";
import { storage } from "../firebase/firebase";


const PaymentScreen = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const [qr, setqr] = useState(null);
  const [paytm, setpaytm] = useState(null);
  const [phonePay, setphonePay] = useState(null);
  const [gpay, setgpay] = useState(null);
  const [accNo, setaccNo] = useState(null);
  const [code, setcode] = useState(null);
  const [name, setname] = useState(null);
  const [bname, setbname] = useState(null);

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((getDownloadURL) => {
  //           setUrl(getDownloadURL);
  //         });
  //     }
  //   );
  // };

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
      // qrcode: qr,
      paytmNumber: paytm,
      phonePay: phonePay,
      gpayNumber: gpay,
      holderName: name,
      accountNo: accNo,
      ifsc: code,
      bankName: bname,
    };
    const { data } = await axios.post("/payment", json, config);

    if (data) {
      history.push("/services");
    }
  };

  return (
    <>
      <CreateCardStep step1 step9 step2 step3 step4 step5 step6 step7 step8 />

      <Container className="my-5">
        <h1>Fill The Payment Detail</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload QR CODE</Form.Label>
            <Form.Control
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setqr(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group controlId="paytm">
            <Form.Label>Paytm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter paytm"
              value={paytm}
              onChange={(e) => setpaytm(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="googlePay">
            <Form.Label>Google Pay Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Google Pay Number"
              value={gpay}
              onChange={(e) => setgpay(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="phonePay">
            <Form.Label>phonePay</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phonePay"
              value={phonePay}
              onChange={(e) => setphonePay(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <h1>Bank Details</h1>
          <Form.Group controlId="Acoount Holder Name">
            <Form.Label>Acoount Holder Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Acoount Holder Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="IFSC CODE">
            <Form.Label>IFSC CODE</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter IFSC CODE"
              value={code}
              onChange={(e) => setcode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="acoount number">
            <Form.Label>acoount number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter acoount number"
              value={accNo}
              onChange={(e) => setaccNo(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="bank name">
            <Form.Label>bank name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter bank name"
              value={bname}
              onChange={(e) => setbname(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit and Next
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default PaymentScreen;
