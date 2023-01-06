import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";

import "./Account.css";

function Account({ user, setUser }) {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    zipcode: "",
  });

  // update the userData object
  const handleInputChange = (e) => {
    const stateCopy = { ...formData };
    stateCopy[e.target.name] = e.target.value;
    setFormData(stateCopy);
  };

  function handleUpdateUser(updatedUser) {
    if (user.id === updatedUser.id) {
      return updatedUser;
    } else {
      return user;
    }
  }

  // submit the form data
  const handleUserSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch(`/users/${id}`, config).then((resp) => {
      if (resp.ok) {
        return resp.json().then((data) => {
          console.log(data);
          handleUpdateUser(data);
          setFormData({
            password: data.password,
            first_name: data.first_name,
            last_name: data.last_name,
            phone_number: data.phone_number,
            address_line1: data.address_line1,
            address_line2: data.address_line2,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
          });
          setUser(data);
          navigate("/");
        });
      } else {
        resp.json().then(({ errors }) => {
          //   setErrors([errors]);
          console.log(errors);
        });
      }
    });
  };

  return (
    <>
      <Container style={{ maxWidth: 1000, marginBottom: "3em" }}>
        <h2 className="center-text mt-5 mb-5 fw-bold">
          Hi, {user.first_name}!
        </h2>
        {/* <p className="center-text">
          View Previous Orders <Link to={"/invoices"}>Here</Link>
        </p> */}
        {/* <hr /> */}
        <h2 className="center-text mt-4 mb-4 fw-light">
          Update Your Contact Information
        </h2>
        <Form onSubmit={handleUserSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder={user.email} disabled />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                placeholder={user.password}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="addToCart-name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder={user.phone_number}
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="addToCart-name"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder={user.first_name}
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                className="addToCart-name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder={user.last_name}
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
                className="addToCart-name"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder={user.address_line1}
                type="text"
                name="address_line1"
                value={formData.address_line1}
                onChange={handleInputChange}
                required
                className="addToCart-name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder={user.address_line2}
                type="text"
                name="address_line2"
                value={formData.address_line2}
                onChange={handleInputChange}
                className="addToCart-name"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder={user.city}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="addToCart-name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder={user.state}
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="addToCart-name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                placeholder={user.zipcode}
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
                required
                className="addToCart-name"
              />
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button
              className="btn-submit"
              variant="primary"
              type="submit"
              onSubmit={handleUserSubmit}
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Account;
