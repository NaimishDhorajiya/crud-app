import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import ProductDetails from "./components/ProductDetails";
import ProductModal from "./components/ProductModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Load products from local storage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Save products to local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Function to add or update product
  const handleSave = (product) => {
    if (currentProduct) {
      // Update existing product
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      // Add new product
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setShowModal(false);
    setCurrentProduct(null);
  };

  // Function to delete a product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to handle edit
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  return (
    <Container>
      <h1 className="d-flex align-items-center justify-content-center mb-2">
        Product Management
      </h1>
      <div className="d-flex align-items-center justify-content-end my-2">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Product
        </Button>
      </div>
      <ProductDetails
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSave}
        product={currentProduct}
      />
    </Container>
  );
};

export default App;
