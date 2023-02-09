import React, { useState, useEffect } from "react";
import { firstImage } from "../../images/images";
import "./cart.css";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const Cart = () => {
  const [user, setUser] = useState([]);
  const [qt, setQt] = useState();
  const [cartItems, setCartItems] = useState([]);
  const userLogged = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getOrder = async () => {
    const { data } = await axios.get(`${BASE_URL}/orders/`, config);
    const res = data.data;
    console.log(res);
    res.map(async (result) => {
      const prod = await fetch(
        `https://fakestoreapi.com/products/${result.products}`
      );
      const response = await prod.json();

      setCartItems([
        ...cartItems,
        { product: response, qt: Number(result.quantity), id: result._id },
      ]);
    });
    console.log(cartItems[1]);
  };
  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="p-3 p-md-4 p-lg-5 text-center font">
      <div className={"d-none"}>
        <h3>Your cart</h3>
        <p>Your cart is currently empty.</p>
        <button className="btn btn-outline-warning ">
          https://premiumteam.ca/
        </button>
      </div>

      <div className="d-flex justify-content-between">
        <p>PRODUCT</p>
        <p>PRICE</p>
      </div>
      {cartItems.map((cart) => (
        <div className="d-flex borderItem" key={cart.id}>
          <div style={{ width: "35%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectPosition: "center",
                objectFit: "cover",
              }}
              src={cart.product.image}
              alt="Product"
            />
          </div>
          <div className="p-2 w-100 text-start">
            <p style={{ maxWidth: "300px" }}>{cart.product.title}</p>
            <button className="btn btn-outline-warning ">Remove</button>
          </div>
          <div className="text-end">
            <p className="mb-2 mt-3">${cart.product.price}</p>
            <p className="d-inline-block">Qty</p>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={Number(cart.qt).toString()}
              onChange={(e) => setQt(Number(e.target.value))}
              style={{ width: "30%", margin: "0px 0 0 5px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
