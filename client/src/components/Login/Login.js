import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login({ setUser, errors, setErrors, setIsLoggedIn }) {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // update the userData object
  const handleInputChange = (e) => {
    const stateCopy = { ...loginCredentials };
    stateCopy[e.target.name] = e.target.value;
    setLoginCredentials(stateCopy);
  };

  // submit the form data
  const handleLoginClick = () => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    };
    fetch("/login", config).then((resp) => {
      setLoginCredentials({
        email: "",
        password: "",
      });
      if (resp.ok) {
        return resp.json().then((user) => {
          setUser(user);
          setIsLoggedIn(true);
          navigate("/");
        });
      } else {
        resp.json().then(({ errors }) => setErrors(errors));
      }
    });
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-black-50 mb-3">
                Please enter your email and password!
              </p>

              <div className="text-center mb-3">
                {errors.map((err) => {
                  return <div style={{ color: "red" }}>{err}</div>;
                })}
              </div>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Your Email"
                id="formControlLg"
                size="lg"
                type="email"
                value={loginCredentials.email}
                name="email"
                onChange={handleInputChange}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg2"
                size="lg"
                type="password"
                value={loginCredentials.password}
                name="password"
                onChange={handleInputChange}
              />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn size="lg mb-4" onClick={handleLoginClick}>
                Login
              </MDBBtn>
              <div className="text-center">
                <p>
                  Not a member? <a href="/signup">Register</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
