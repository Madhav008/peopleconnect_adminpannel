import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import CreateCardStep from "../components/CreateCardSteps";
import axios from "axios";
import { useSelector } from "react-redux";
const SocialDetail = ({ history }) => {
  const [youtubeVideos, setYoutubeVideo] = useState([
    { url: "" },
    { url: "" },
    { url: "" },
  ]);
  const [fb, setFb] = useState(null);
  const [whats, setWhats] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [linkdin, setLinkdin] = useState(null);
  const [interest, setInterest] = useState(null);
  const [youtube, setYoutube] = useState(null);

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    function checkNull(youtubeVideos) {
      return youtubeVideos.url != "";
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const json = {
      userId: userInfo._id,
      facebook: fb,
      // logo: preview,
      whatsApp: whats,
      twitter: twitter,
      instagram: instagram,
      linkdin: linkdin,
      youtube: youtube,
      interest: interest,
      youtubeVideo: youtubeVideos.filter(checkNull),
    };
    const { data } = await axios.post("/social", json, config);

    if (data) {
      history.push("/payment");
    }
  };

  const changeInputValue = (index, e) => {
    const values = [...youtubeVideos];

    values[index][e.target.name] = e.target.value;
    setYoutubeVideo(values);
  };

  return (
    <>
      <CreateCardStep step1 step9 step2 step3 step4 step5 step6 step7 step8 />

      <Container className="my-5">
        <h1>Fill The Social Detail</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="facebook">
            <Form.Label>facebook</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter facebook"
              value={fb}
              onChange={(e) => setFb(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="whatsapp">
            <Form.Label>whatsapp</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter whatsapp"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="twitter">
            <Form.Label>twitter</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="instagram">
            <Form.Label>instagram</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="linkdin">
            <Form.Label>linkdin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter linkdin"
              value={linkdin}
              onChange={(e) => setLinkdin(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="youtube">
            <Form.Label>youtube</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter youtube"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="interest">
            <Form.Label>interest</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <h1>Youtube Videos</h1>

          {youtubeVideos.map((video, index) => (
            <Form.Group controlId="youtube">
              <Form.Label>youtube</Form.Label>
              <Form.Control
                name="url"
                type="text"
                placeholder="Enter youtube"
                value={video.url}
                onChange={(e) => changeInputValue(index, e)}
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

export default SocialDetail;
