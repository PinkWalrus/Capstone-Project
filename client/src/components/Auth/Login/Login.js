import React, { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";
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

function Login() {
  const { errors, loginCredentials, handleInputChange, handleLoginClick } =
    useContext(UserContext);

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
