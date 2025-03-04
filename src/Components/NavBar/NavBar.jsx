import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; 
import logo from '../../Assets/images/logo.svg'
const NavBar = () => {
  return (
<>
<header className={`${styles.active}`}>
      <nav className="navbar navbar-expand-lg  shadow-sm">
        <div className="container">
        
          <Link className="navbar-brand" to="home">
            <img src={logo} alt="Micro logo" width="120"  />
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

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="home">
                  Home
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
