import NavbarOnBigScreen from "./navbarElement/NavbarB";
import NavbarSmallScreen from "./navbarElement/NavbarS";
import "./navbarElement/navbar.css";
import React from "react";

function Header() {
  const navItems = [
    {
      name: "Home",
      pageLink: "/",
    },
    {
      name: "Product",
      pageLink: "#",
    },
    {
      name: "About Us",
      pageLink: "#",
    },
    {
      name: "Contact Us",
      pageLink: "#",
    },
  ];

  const navItemsDesplay = navItems.map((el, index) => {
    return (
      <li className="nav-item" key={new Date() * index}>
        <a
          className="nav-link active border-bottom"
          aria-current="page"
          href={el.pageLink}
        >
          {el.name}
        </a>
      </li>
    );
  });

  const btnIcons = [
    <i className="ri-book-3-line fs-5"></i>,
    <i className="ri-user-line fs-5"></i>,
    <i className="ri-shopping-bag-line fs-5"></i>,
  ];
  const displayBTN = btnIcons.map((el) => el);

  return (
    <div className="p-3 p-md-4 p-lg-5">
      <NavbarOnBigScreen
        navItemsDesplay={navItemsDesplay}
        displayBTN={displayBTN}
      />
      <div className="hidden">
        <NavbarSmallScreen
          navItemsDesplay={navItemsDesplay}
          displayBTN={displayBTN}
        />
      </div>
    </div>
  );
}

export default Header;
