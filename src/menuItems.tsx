import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ isSmallScreen, isDarkMode, handleDarkModeToggle }) => {
  return (
    <>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
      <Link to="/upload" className="navbar-item">
        Upload
      </Link>
      {isSmallScreen && (
        <button className="is-dark" onClick={handleDarkModeToggle}>
          <strong>{isDarkMode ? "Light mode" : "Dark mode"}</strong>
        </button>
      )}
    </>
  );
};

export default MenuItems;