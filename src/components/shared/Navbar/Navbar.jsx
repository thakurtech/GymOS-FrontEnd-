import React, { useState } from "react";
import logo from "../../../assets/logo/fitxl.png";
import { Link } from "react-router-dom";
// import { isLoggedUser } from "../../../service/storeUserInfo";
import Icon from "../../Buttons/Icon";
import Button from "../../Buttons/Button";
import "./Navbar.css";

const Navbar = () => {
  const isLogged = false;
  // Mobile Menu State
  const [mobileMenu, setMobileMenu] = useState(false);
  // Menus List
  const menus = ["Home", "About", "Gallery", "Contact"];

  return (
    <div className="navbar-container">
      {/* Mobile Menu */}
      <div className="navbar-mobile">
        <Link to="/" className="navbar-logo-mobile">
          <img src={logo} alt="FitXL Logo" className="h-12 w-auto" />
        </Link>
        <div className="hamburger-menu">
          <button
            className={`hamburger-btn ${mobileMenu ? "active" : ""}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {mobileMenu && (
          <ul className="mobile-menu-list">
            {menus.map((menu, index) => {
              return (
                <Link
                  to={menu === "Home" ? "/" : menu.toLowerCase()}
                  key={index}
                  onClick={() => setMobileMenu(false)}
                  className="mobile-menu-item"
                >
                  <li>{menu}</li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
      {/* Desktop Menu */}
      <div className="navbar-desktop">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo-desktop">
            <img src={logo} alt="FitXL Logo" className="h-14 w-auto" />
          </Link>
          <div className="navbar-links">
            <ul className="menu-list">
              {menus.map((menu, index) => {
                return (
                  <Link
                    to={menu === "Home" ? "/" : menu.toLowerCase()}
                    key={index}
                    className="menu-item"
                  >
                    <li>{menu}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
