import React from "react";
import { Link } from "react-router-dom";

const NavbarTop = ({ isDarkMode, handleDarkModeToggle, logoImage }) => {
  return (
    <div className="navbar">
      <div className="navbar-top" role="navigation">
        <div className="navbar-brand">
          <button className="navbar-item">
            <img src={process.env.PUBLIC_URL + logoImage} alt="Icon" />
            <strong>
              <Link to="/">MyCats</Link>
            </strong>
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <button className="navbar-item">
              <Link to="/">Home</Link>
            </button>

            <Link to="/about" className="navbar-item">
              About
            </Link>

            <Link to="/upload" className="navbar-item">
              Upload
            </Link>
          </div>
          <div className="navbar-end">
            <button className="navbar-item">
              <button className="is-dark" onClick={handleDarkModeToggle}>
                <strong>{isDarkMode ? "Light mode" : "Dark mode"}</strong>
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;