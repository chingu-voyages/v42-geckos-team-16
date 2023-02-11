import NavbarOnBigScreen from "./navbarElement/NavbarB";
import NavbarSmallScreen from "./navbarElement/NavbarS";
import "./navbarElement/navbar.css";

function Header() {
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

  return (
    <div>
      <NavbarOnBigScreen navItems={navItems} />
      <div className="hidden">
        <NavbarSmallScreen navItems={navItems} />
      </div>
    </div>
  );
}

export default Header;
