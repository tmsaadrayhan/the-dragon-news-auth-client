import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const NavigationBar = () => {
  const { account, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="m-3 bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>

              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </Nav.Link>
              {account ? (
                <div className="d-flex ">
                  <Nav.Link>{account.email}</Nav.Link>
                  <Button onClick={handleSignOut} variant="secondary">
                    log out
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">log in</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
