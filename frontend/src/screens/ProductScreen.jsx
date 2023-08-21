import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />

      <div>Description: {product.description}</div>
      <div>Price: ${product.price}</div>
      <div>
        {product.rating}
        {`${product.numReviews} reviews`}
      </div>
      <div> {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</div>

      <button
        className="btn-block"
        type="button"
        disabled={product.countInStock === 0}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductScreen;
