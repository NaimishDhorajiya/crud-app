import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// Component for adding or editing products
const ProductModal = ({ show, onHide, onSave, product }) => {
  const [productData, setProductData] = useState({
    name: "",
    details: "",
    price: "",
    quantity: "",
  });
  const [error, setError] = useState("");

  // Set form fields if editing a product
  useEffect(() => {
    if (product) {
      setProductData(product);
    } else {
      setProductData({ name: "", details: "", price: "", quantity: "" });
    }
  }, [product]);

  // Function to validate and save the product
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
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product ? "Edit Product" : "Add Product"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
