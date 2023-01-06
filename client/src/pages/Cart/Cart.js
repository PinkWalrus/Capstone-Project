import React, { useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../context/UserProvider";
import "./Cart.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Footer from "../../components/Footer/Footer";

function Cart() {
  const { user, setUser, errors, setErrors } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeFromCartClick = (removeData) => {
    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(removeData),
    };
    fetch(`/carts/${user.cart.id}`, config).then((resp) => {
      if (resp.ok) {
        return resp.json().then((data) => {
          setUser(data);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
        });
      }
    });
  };

  const emptyCart = () => {
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`/carts/${user.cart.id}`, config).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          setUser(data);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
        });
      }
    });
  };

  return (
    <>
      <Container
        className="mt-5"
        style={{ maxWidth: 850, marginBottom: "3em" }}
      >
        <MDBRow className="align-items-center h-100">
          <MDBCol>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>

            {user.cart.products.map((item) => {
              return (
                <MDBCard
                  key={item.product.id}
                  className="cart-card rounded-3 mb-4"
                >
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={item.product.product_image}
                          alt={item.product.name}
                        />
                      </MDBCol>
                      <MDBCol md="4" lg="4" xl="4">
                        <p className="lead fw-normal mb-2">
                          {item.product.name}
                        </p>
                        <p style={{ fontStyle: "italic" }}>
                          {item.product.category}
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="1"
                        lg="1"
                        xl="1"
                        className="d-flex align-items-center justify-content-around"
                      >
                        {item.quantity}
                      </MDBCol>
                      <MDBCol md="2" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          ${item.product.price}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-center">
                        <a className="text-dark">
                          <MDBIcon
                            fas
                            icon="trash-alt text-dark"
                            size="lg"
                            onClick={() => {
                              removeFromCartClick({
                                type: "DELETE_PRODUCT",
                                payload: {
                                  id: item.product.id,
                                },
                              });
                            }}
                          />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              );
            })}

            <MDBBtn
              className="mb-4 fw-bold"
              style={{ fontSize: "1em" }}
              color="dark"
              block
              size="lg"
              onClick={() => emptyCart()}
            >
              Remove All Items From Cart
            </MDBBtn>

            <MDBCard className="mb-4">
              <MDBCardBody className="p-4 d-flex flex-row">
                Subtotal
              </MDBCardBody>
            </MDBCard>

            {/* <MDBBtn color="warning" block size="lg">
              Checkout
            </MDBBtn> */}
          </MDBCol>
        </MDBRow>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
