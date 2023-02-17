import NavbarOnBigScreen from "./navbarElement/NavbarB";
import NavbarSmallScreen from "./navbarElement/NavbarS";
import "./navbarElement/navbar.css";

function Header() {
  const navItems = [
    {
      name: "Home",
      pageLink: "/v42-geckos-team-16/home",
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
