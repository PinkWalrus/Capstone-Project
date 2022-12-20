import React, { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserProvider";

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
          console.log(data);
          setUser(data);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
        });
        console.log(errors);
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
          console.log(data);
          setUser(data);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
        });
        console.log(errors);
      }
    });
  };

  return (
    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
              </div>

              {user.cart.products.map((item) => {
                console.log(item);
                return (
                  <MDBCard key={item.product.id} className="rounded-3 mb-4">
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
                        <MDBCol md="3" lg="3" xl="3">
                          <p className="lead fw-normal mb-2">
                            {item.product.name}
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          lg="3"
                          xl="2"
                          className="d-flex align-items-center justify-content-around"
                        >
                          {item.quantity}
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                          <MDBTypography tag="h5" className="mb-0">
                            ${item.product.price}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a className="text-danger">
                            <MDBIcon
                              fas
                              icon="trash text-danger"
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
              <MDBCard className="mb-4">
                <MDBCardBody className="p-4">
                  <MDBBtn
                    color="danger"
                    block
                    size="lg"
                    onClick={() => emptyCart()}
                  >
                    Remove All Items From Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="p-4 d-flex flex-row">
                  Subtotal
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBBtn color="warning" block size="lg">
                    Checkout
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
