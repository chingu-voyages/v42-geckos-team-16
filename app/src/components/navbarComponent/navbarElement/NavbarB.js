import "./navbar.css";
import { BASE_URL } from "../../../constants/urls";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
// Navbar on Big Screen
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
      const data = await axios.get(`${BASE_URL}/users`);
      setData(data.data);
      console.log(data.data);
    };
    fetchUserInfo();
  }, [])

  return (
    <div className="displayNavbarOnBigScreen">
      <div className="d-flex align-items-center justify-content-between navbar-container">
        <div>
          <h1>Premium Team</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center iconsBTN">
          <i className="ri-book-3-line fs-5 iconBTN"></i>
          <Popup
            trigger={open => (
              <i className="ri-user-line fs-5 iconBTN">
              </i>
            )}
            closeOnDocumentClick
          >
            <span>
              <p>
              </p>
              <img width="100%" height="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/480px-Crystal_Clear_kdm_user_female.svg.png"  />
              <p>Status: {data.status}</p>
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
