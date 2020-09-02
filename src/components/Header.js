import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="sticky-top">
      <div className="row d-flex align-items-center bg-white">
        {/* <!-- My name section --> */}
        <h1 className="col-md-5 bg-warning p-4 m-0 border-warning text-light text-center">
          Kaori Caplan
        </h1>
        <div className="col-md-2 bg-white"></div>
        {/* <!-- Navbar section --> */}
        <div className="col-md-5 m-0 bg-white">
          <nav className="navbar navbar-expand-md navbar-light">
            {/* <!-- Navbar content --> */}
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;