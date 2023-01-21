import React, { useState, useEffect } from "react";
import { firstImage } from "../../images/images";
import "./cart.css";

export const Cart = () => {
  const [user, setUser] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      // get user detailes
      const respond = await fetch("https://fakestoreapi.com/carts/user/2");
      const user = await respond.json();
      console.log(user);
    };

    getUser();
  }, []);

  const num = 1;

  return (
    <div className="p-3 p-md-4 p-lg-5 text-center font">
      <div className={"d-none"}>
        <h3>Your cart</h3>
        <p>Your cart is currently empty.</p>
        <button className="btn btn-outline-warning ">
          https://premiumteam.ca/
        </button>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <p>PRODUCT</p>
          <p>PRICE</p>
        </div>
        <div className="d-flex borderItem">
          <div style={{ width: "35%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectPosition: "center",
                objectFit: "cover",
              }}
              src={firstImage}
              alt="Product-Image"
            />
          </div>
          <div className="p-2 w-100 text-start">
            <p style={{ maxWidth: "300px" }}>
              Lunar New Year 2023 (30 sachets) - Year of the Rabbit
            </p>
            <button className="btn btn-outline-warning ">Remove</button>
          </div>
          <div className="text-end">
            <p className="mb-2 mt-3">$24.95</p>
            <p className="d-inline-block">Qty</p>
            <input
              type="number"
              style={{ width: "30%", margin: "0px 0 0 5px" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
