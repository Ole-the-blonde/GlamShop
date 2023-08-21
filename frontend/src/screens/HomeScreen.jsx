import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
