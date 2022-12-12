import React, { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Signup() {
  const { errors, userData, handleInputChangeSignUp, handleFormSubmit } =
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
      <div className="mask gradient-custom-3"></div>
      <MDBCard
        className="bg-white my-5 mx-auto"
        style={{ borderRadius: "1rem", maxWidth: "500px" }}
      >
        <MDBCardBody className="p-5 w-100 d-flex flex-column">
          <h2 className="fw-bold mb-3 text-center">Create an Account</h2>

          <div className="text-center mb-3">
            {errors.map((err) => {
              return <div style={{ color: "red" }}>{err}</div>;
            })}
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Your Name"
            size="lg"
            id="form1"
            type="text"
            value={userData.first_name}
            name="first_name"
            onChange={handleInputChangeSignUp}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="lg"
            id="form2"
            type="email"
            value={userData.email}
            name="email"
            onChange={handleInputChangeSignUp}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            size="lg"
            id="form3"
            type="password"
            value={userData.password}
            name="password"
            onChange={handleInputChangeSignUp}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Repeat your password"
            size="lg"
            id="form4"
            type="password"
            value={userData.password_confirmation}
            name="password_confirmation"
            onChange={handleInputChangeSignUp}
          />
          {/* <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div> */}
          <MDBBtn
            className="mb-4 w-100 gradient-custom-4"
            size="lg"
            onClick={handleFormSubmit}
          >
            Register
          </MDBBtn>
          <div className="text-center">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
