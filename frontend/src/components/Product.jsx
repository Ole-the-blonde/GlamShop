import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card>
      <a href={`product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>

      <Card.Body>
        <a href={`product/${product._id}`}>
          <Card.Title as="div">
            <h2>{product.name}</h2>
          </Card.Title>
        </a>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
