import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError(errorMessage);
      });
  };
  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <Container className="w-25 mx-auto">
      <h3>Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccept}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and Condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button disabled= {!accept} variant="danger" type="submit">
          Sign Up
        </Button>
        <br />
        <Form.Text className="text-success">
          Already have an account<Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
