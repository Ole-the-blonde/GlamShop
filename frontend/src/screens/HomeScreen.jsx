import React from "react";
import Product from "../components/Product";
import products from "../products";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default HomeScreen;
