import "./navbar.css";
import { BASE_URL } from "../../../constants/urls";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useEffect, useState } from "react";
// Navbar on Big Screen
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies, get } from "react-cookie";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";

function NavbarOnBigScreen({ navItems }) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "role",
    "token",
    "user",
    "count",
  ]);
  const navigate = useNavigate();

  function changeLocation() {
    navigate("/login");
  }

  let role = cookies.role ? cookies.role : "client";

  const [data, setData] = useState([""]);
  const user = cookies.user ? cookies.user : null;
  let count = cookies.count ? cookies.count : 0;

  const navItemsAdmin = [
    {
      name: "Home",
      pageLink: "/v42-geckos-team-16/",
    },
    {
      name: "Products",
      pageLink: "/v42-geckos-team-16/products",
    },
    {
      name: "About Us",
      pageLink: "/v42-geckos-team-16/about",
    },
    {
      name: "Contact Us",
      pageLink: "/v42-geckos-team-16/contact",
    },
    {
      name: "Add products",
      pageLink: "/v42-geckos-team-16/admin",
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

  const displayNavItemsAdmin = navItemsAdmin.map((el, index) => {
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

  return (
    <div className="displayNavbarOnBigScreen">
      <div className="d-flex align-items-center justify-content-between navbar-container">
        <div>
          <h1>Premium Team</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center iconsBTN">
          {cookies.token ? (
            <>
              <Popup
                trigger={(open) => (
                  <i className="ri-user-line fs-5 iconBTN"></i>
                )}
                closeOnDocumentClick
              >
                <span>
                  <p>User: {user.name}</p>
                </span>
              </Popup>

              <a
                href="/v42-geckos-team-16/order"
                className="text-decoration-none text-dark shop"
              >
                <i className="ri-shopping-bag-line fs-5 iconBTN"></i>
                <p className="notification">{count}</p>
              </a>
              <button
                className="btn__icon fs-5"
                onClick={() => {
                  removeCookie("user");
                  removeCookie("count");
                  removeCookie("token");
                  removeCookie("role");
                  toast.success("Logout success");
                  window.location.reload();
                }}
              >
                <MdLogout />
              </button>
            </>
          ) : (
            <button
              className="btn__icon fs-5"
              onClick={(e) => {
                e.preventDefault();
                console.log("login");
                changeLocation();
              }}
            >
              <BiLogIn />
            </button>
          )}
        </div>
      </div>
      <br />
      <ul className="nav md justify-content-center">
        {role === "admin" ? displayNavItemsAdmin : displayNavItems}
      </ul>
    </div>
  );
}

export default NavbarOnBigScreen;
