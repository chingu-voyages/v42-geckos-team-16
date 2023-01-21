import "./navbar.css";
// navbar on small screen
function NavbarSmallScreen(props) {
  const { navItemsDesplay, displayBTN } = props;

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <h3>Premium Team</h3>
        </a>
        <div className="d-flex justify-content-between align-items-center w-50 ">
          {displayBTN}
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
