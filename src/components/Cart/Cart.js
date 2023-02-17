import React, { useState, useEffect } from "react";
import "./cart.css";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useCookies } from "react-cookie";

export const Cart = () => {
  const [user, setUser] = useState([]);
  const [qt, setQt] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cookies, setCookie] = useCookies(["role", "token", "user", "count"]);

  useEffect(() => {
    const token = cookies.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const getOrder = async () => {
      const { data } = await axios.get(`${BASE_URL}/orders/`, config);
      console.log(data);
      localStorage.setItem("count", data.length);
      const items = data.map((result) => ({
        id: result._id,
        products: result.products,
        quantity: result.quantity,
      }));
      setCartItems(items);
    };
    getOrder();
  }, []);

  console.log(cartItems[0]);

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
        <div className="d-flex flex-row borderItem" key={cart._id}>
          <div style={{ width: "10%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectPosition: "center",
                objectFit: "cover",
              }}
              src={cart.products.image}
              alt="Product"
            />
          </div>
          <div className="p-2 w-100 text-start">
            <p style={{ maxWidth: "300px" }}>{cart.products.title}</p>
            <button className="btn btn-outline-warning ">Remove</button>
          </div>
          <div className="text-end">
            <p className="mb-2 mt-3">${cart.products.price}</p>
            <p className="d-inline-block">Qty</p>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={Number(cart.quantity).toString()}
              onChange={(e) => setQt(Number(e.target.value))}
              style={{ width: "15%", margin: "0px 0 0 5px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
