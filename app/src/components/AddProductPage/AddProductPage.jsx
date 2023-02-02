import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddProductPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO
    alert(`Product ${productName} added`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProductDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(event) => setProductDescription(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
          />
        </Form.Group>
        <Button class="button mt-5 bg-primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
}

export default AddProductPage;
