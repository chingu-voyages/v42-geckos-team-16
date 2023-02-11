import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { BiLogIn } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
// navbar on small screen
function NavbarSmallScreen() {
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);
  // const navigate = useNavigate();

  let role = cookies.role ? cookies.role : "client";

  // nav Items
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
    {
      name: "Add products",
      pageLink: "/admin",
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

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <h3>Premium Team</h3>
        </a>
        <div className="d-flex justify-content-between align-items-center w-25 max-width">
          {localStorage.getItem("token") ? (
            <button
              className="btn__icon fs-5"
              onClick={() => {
                localStorage.removeItem("token");
                removeCookie("role");
                toast.success("Logout success");
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
              }}
            >
              <BiLogIn />
            </button>
          )}
          <i className="ri-user-line fs-5"></i>
          <i className="ri-shopping-bag-line fs-5"></i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ri-menu-line fs-5"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navItemsDesplay}</ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSmallScreen;
