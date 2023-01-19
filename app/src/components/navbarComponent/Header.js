import NavbarOnBigScreen from "./navbarElement/NavbarB";
import NavbarSmallScreen from "./navbarElement/NavbarS";
import "./navbarElement/navbar.css";

function Header() {
  return (
    <div>
      <NavbarOnBigScreen />
      <div className="hidden">
        <NavbarSmallScreen />
      </div>
    </div>
  );
}

export default Header;
