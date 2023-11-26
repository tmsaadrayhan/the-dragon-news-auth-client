import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="d-flex marquee">
        <Button className="m-3 btn" variant="danger">
          {" "}
          Latest
        </Button>
        <Marquee speed={100} gradient>
          <h3>
            I can be a React component, multiple React components, or just some
            text.
          </h3>
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
