import React from "react";
// import { Link } from "react-router-dom";

function Navbar(props) {
  const ReloadPage = () => {
    let reload = window.location.reload();
    console.log(reload);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TextUtils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" href="/About">
                About
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-a" href="/">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/">
                Contact
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.Mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.ToggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              id="currentmodetext"
            >
              Enable DarkMode
            </label>
          </div>
          <div className="ms-3">
            <button className="btn btn-primary" onClick={ReloadPage}>
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
