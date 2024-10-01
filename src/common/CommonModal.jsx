import React from "react";
import { Modal } from "react-bootstrap";

// Common Modal Component
const CommonModal = ({ show, onHide, title, children, footer }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};

export default CommonModal;
