import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import "./ProductCard.css";
import {
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "./ProductCard.css";

function ProductCard({ product, addToCartClick }) {
  const { id, name, description, product_image, price } = product;
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <div>
      {/* <Link to={`/products/${id}`}> */}
      {/* <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn> */}

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody style={{ display: "flex", paddingLeft: "4em" }}>
              <Col>
                <Row>
                  <h2>{product.name}</h2>
                  <hr></hr>
                  <p>{product.category}</p>
                  <p>{product.description}</p>
                  <span>
                    <strong>{product.price}</strong>
                    <Link as="li" onClick={() => addToCartClick(product)}>
                      <button className="add-to-cart">ADD TO CART</button>
                    </Link>
                  </span>
                </Row>
              </Col>
              <Col>
                <Row>
                  <img src={product.product_image} />
                </Row>
              </Col>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div onClick={toggleShow} className="product-card-container">
        <img src={product_image} />
        <div className="product-card-info">
          <h4 className="product-card-title">{name}</h4>
          <hr className="product-card-hr" />
          <span className="product-card-description">{description}</span>
          <Link as="li" onClick={() => addToCartClick(product)}>
            <div>
              <button className="product-card-cart">
                <MDBIcon
                  className="product-card-cart"
                  icon="shopping-cart"
                ></MDBIcon>
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ProductCard;
