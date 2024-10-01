import React from "react";
import { Table, Button } from "react-bootstrap";

const ProductDetails = ({ products, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Details</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.details}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td className="d-flex gap-2">
              <Button variant="warning" onClick={() => onEdit(product)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(product.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductDetails;
