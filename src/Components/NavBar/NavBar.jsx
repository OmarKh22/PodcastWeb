import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; 
// import logo from '../../Assets/images/logo.svg'
import podcastHome from "../../Assets/images/home/podcastHome.png";
import logo from "../../Assets/images/home/logo.png";

const NavBar = () => {
  return (
    <>
      <header className={`${styles.active}`}>
        <nav className="navbar navbar-expand-lg  shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/home">
              <img src={logo} alt="Micro logo" width="180" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto d-flex flex-row">
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link text-light position-relative"
                    to="/home"
                    style={{
                      transition: "all 0.6s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link text-light position-relative"
                    to="/about"
                    style={{
                      transition: "all 0.6s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    عن منصة إلهام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;