import React from "react";
import { Button } from "react-bootstrap";

// Common Button Component
const CommonButton = ({ variant, onClick, children }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CommonButton;
