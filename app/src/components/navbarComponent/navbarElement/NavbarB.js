import "./navbar.css";
import { BASE_URL } from "../../../constants/urls";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useEffect, useState } from "react";
// Navbar on Big Screen
import React from "react";

function NavbarOnBigScreen({userLogged}) {
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

  const count = localStorage.getItem("count");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="displayNavbarOnBigScreen">
      <div className="d-flex align-items-center justify-content-between navbar-container">
        <div>
          <h1>Premium Team</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center iconsBTN">
          <a href="#" className="text-decoration-none text-dark">
            <i className="ri-book-3-line fs-5 iconBTN"></i>
          </a>
          <Popup
            trigger={(open) => <i className="ri-user-line fs-5 iconBTN"></i>}
            closeOnDocumentClick
          >
            <span>
              <p>User: {user.name}</p>

            </span>
          </Popup>
          <a href="/order" className="text-decoration-none text-dark shop">
            <i className="ri-shopping-bag-line fs-5 iconBTN"></i>
            <p className="notification">{count}</p>
          </a>
        </div>
      </div>
      <br />
      <ul className="nav md justify-content-center">{displayNavItems}</ul>
    </div>
  );
}

export default NavbarOnBigScreen;
