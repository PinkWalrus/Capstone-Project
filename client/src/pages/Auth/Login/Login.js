import React, { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Footer from "../../../components/Footer/Footer";

function Login() {
  const { errors, loginCredentials, handleInputChange, handleLoginClick } =
    useContext(UserContext);

  return (
    <>
      <Container>
        <MDBContainer className="my-5" style={{ maxWidth: 850 }}>
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://ik.imagekit.io/pinkwalrus/AdobeStock_211053981_mbllqzmA8.jpeg"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <h2 className="fw-normal my-4 pb-3 text-center">
                    Sign into your account
                  </h2>

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

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleLoginClick}
                  >
                    Login
                  </MDBBtn>

                  <p className="text-center">
                    Not a member? <a href="/signup">Register</a>
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
