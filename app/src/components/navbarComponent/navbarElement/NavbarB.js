import "./navbar.css";
// Navbar on Big Screen

import React from "react";

function NavbarOnBigScreen(props) {
  const { navItemsDesplay, displayBTN } = props;

  return (
    <div className="displayNavbarOnBigScreen">
      <div className="d-flex align-items-center justify-content-between navbar-container">
        <div>
          <h1>Premium Team</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center iconsBTN">
          {displayBTN}
        </div>
      </div>
      <br />
      <ul className="nav md justify-content-center">{navItemsDesplay}</ul>
    </div>
  );
}

export default NavbarOnBigScreen;
