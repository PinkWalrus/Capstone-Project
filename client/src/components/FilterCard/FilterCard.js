import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

function FilterCard({
  productsToDisplay,
  setCartItems,
  addProduct,
  addToCartClick,
}) {
  return (
    <>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {productsToDisplay.map((product) => (
          <Col>
            <ProductCard
              key={product.id}
              product={product}
              setCartItems={setCartItems}
              addProduct={addProduct}
              addToCartClick={addToCartClick}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default FilterCard;
