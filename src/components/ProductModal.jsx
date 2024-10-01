import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import CommonModal from "../common/CommonModal";
import CommonButton from "../common/CommonButton";

// Component for adding or editing products
const ProductModal = ({ show, onHide, onSave, product }) => {
  const [productData, setProductData] = useState({
    name: "",
    details: "",
    price: "",
    quantity: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (product) {
      setProductData(product);
    } else {
      setProductData({ name: "", details: "", price: "", quantity: "" });
    }
  }, [product]);

  const handleSubmit = () => {
    const { name, details, price, quantity } = productData;

    if (!name || !details || !price || !quantity) {
      setError("All fields are required.");
      return;
    }
    if (isNaN(price) || isNaN(quantity)) {
      setError("Price and Quantity must be numbers.");
      return;
    }

    setError("");
    onSave({ ...productData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <CommonModal
      show={show}
      onHide={onHide}
      title={product ? "Edit Product" : "Add Product"}
      footer={[
        <CommonButton variant="secondary" onClick={onHide}>
          Close
        </CommonButton>,
        <CommonButton variant="primary" onClick={handleSubmit}>
          Save Changes
        </CommonButton>,
      ]}
    >
      {error && <div className="alert alert-danger">{error}</div>}
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            type="text"
            name="details"
            value={productData.details}
            onChange={handleChange}
            placeholder="Enter product details"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            placeholder="Enter product quantity"
          />
        </Form.Group>
      </Form>
    </CommonModal>
  );
};

export default ProductModal;
