import "./navbar.css";
import { BASE_URL } from "../../../constants/urls";
// import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// Navbar on Big Screen
import { useEffect, useState } from "react";

import React from "react";

function NavbarOnBigScreen() {
  const navItems = [
    {
      name: "Home",
      pageLink: "/",
    },
    {
      name: "Products",
      pageLink: "/products",
    },
    {
      name: "About Us",
      pageLink: "#",
    },
    {
      name: "Contact Us",
      pageLink: "#",
    },
    {
      name: "Add products",
      pageLink: "/add_products",

    },
  ];

  const displayNavItems = navItems.map((el, index) => {
    return (
      <li className="nav-item" key={new Date() * index}>
        <a
          className="text-dark nav-link active link-color "
          aria-current="page"
          href={el.pageLink}
        >
          {el.name}
        </a>
      </li>
    );
  });
  const [data, setData] = useState([""])

  useEffect(() => {
  const fetchUserInfo = async () => {
    const data = await axios.get("https://store-api-81pb.onrender.com/api/v1/users");
    setData(data.data);
    console.log(data.data);
  };
    fetchUserInfo();
  }, [])

  // const userData = (data);
  return (
    <div className="displayNavbarOnBigScreen">
      <div className="d-flex align-items-center justify-content-between navbar-container">
        <div>
          <h1>Premium Team</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center iconsBTN">
          <i className="ri-book-3-line fs-5 iconBTN"></i>
          {/* TODO add likn to user information */}
          <Popup
            trigger={open => (
              <i className="ri-user-line fs-5 iconBTN">
              </i>
            )}
            //     position="bottom center"
            closeOnDocumentClick
          >
            <span>
   <p>Status: {data.status}</p>
            {/* {data.map((dataItem) => {
        return (
          <div className="Popup">
            <h2>{dataItem.email}</h2>
          </div>
        )})} */}
            </span>
          </Popup>

          <i className="ri-shopping-bag-line fs-5 iconBTN"></i>
        </div>
      </div>
      <br />
      <ul className="nav md justify-content-center">{displayNavItems}</ul>
    </div>
  );
}

export default NavbarOnBigScreen;
