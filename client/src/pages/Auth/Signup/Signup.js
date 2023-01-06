import React, { useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserProvider";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Footer from "../../../components/Footer/Footer";

function Signup() {
  const { errors, userData, handleInputChangeSignUp, handleFormSubmit } =
    useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <MDBContainer className="my-5" style={{ maxWidth: 850 }}>
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://ik.imagekit.io/pinkwalrus/AdobeStock_289925223_FgWFsV9dr.jpeg"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column text-center">
                  <h2 className="fw-normal my-4 pb-3">Create an account</h2>

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

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleFormSubmit}
                  >
                    Register
                  </MDBBtn>

                  <div className="text-center mb-5 pb-lg-2">
                    <p>
                      Already have an account? <a href="/login">Login here</a>
                    </p>
                  </div>
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

export default Signup;
