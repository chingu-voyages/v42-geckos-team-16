import "./navbar.css";
// navbar on small screen
function NavbarSmallScreen() {
  // nav Items
  const navItems = [
    {
      name: "Home",
      pageLink: "#",
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

  const navItemsDesplay = navItems.map((el) => {
    return (
      <li class="nav-item">
        <a
          class="nav-link active border-bottom"
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
        <a class="navbar-brand" href="#">
          <h3>Premium Team</h3>
        </a>
        <div className="d-flex justify-content-between align-items-center w-25 max-width">
          <i className="ri-book-3-line fs-5"></i>
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
            <i class="ri-menu-line fs-5"></i>
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
