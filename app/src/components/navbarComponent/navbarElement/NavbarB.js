import "./navbar.css";
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

    return (
        <div className="displayNavbarOnBigScreen">
            <div className="d-flex align-items-center justify-content-between navbar-container">
                <div>
                    <h1>Premium Team</h1>
                </div>
                <div className="d-flex justify-content-between align-items-center iconsBTN">
                    <i className="ri-book-3-line fs-5 iconBTN"></i>
                    <i className="ri-user-line fs-5 iconBTN"></i>
                    <i className="ri-shopping-bag-line fs-5 iconBTN"></i>
                </div>
            </div>
            <br />
            <ul className="nav md justify-content-center">{displayNavItems}</ul>
        </div>
    );
}

export default NavbarOnBigScreen;
