import "./navbar.css";
// Navbar on Big Screen

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

function NavbarOnBigScreen() {
    const [cookies, setCookie, removeCookie] = useCookies(["role"]);
    const navigate = useNavigate();

    let role = cookies.role ? cookies.role : "client";

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
            pageLink: "about",
        },
        {
            name: "Contact Us",
            pageLink: "#",
        },
    ];

    const navItemsAdmin = [
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
            pageLink: "about",
        },
        {
            name: "Contact Us",
            pageLink: "#",
        },
        {
            name: "Add products",
            pageLink: "/admin",
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
                    {localStorage.getItem("token") ? (
                        <button
                            className="btn__icon fs-5"
                            onClick={() => {
                                localStorage.removeItem("token");
                                removeCookie("role");
                                window.location.reload();
                            }}
                        >
                            <MdLogout />
                        </button>
                    ) : (
                        <button
                            className="btn__icon fs-5"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/login");
                            }}
                        >
                            <BiLogIn />
                        </button>
                    )}
                    <i className="ri-user-line fs-5 iconBTN"></i>
                    <i className="ri-shopping-bag-line fs-5 iconBTN"></i>
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
