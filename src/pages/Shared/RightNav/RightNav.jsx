import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png"

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="m-1" variant="outline-dark">
        <FaGoogle />
        Login with Google
      </Button>
      <Button className="m-1" variant="outline-dark">
        <FaGithub />
        Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
