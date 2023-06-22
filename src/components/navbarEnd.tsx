
import React from "react";

const NavbarEnd = ({ isMenuButtonVisible, isSmallScreen, handleModalToggle, handleDarkModeToggle, isDarkMode }) => {
  return (
    <div className="navbar-end">
      {isMenuButtonVisible && (
        <button className="is-dark" onClick={handleModalToggle}>
          <img
            src={process.env.PUBLIC_URL + "/fish-bone-menu.png"}
            alt="Icon"
          />
        </button>
      )}
      {!isSmallScreen && (
        <button className="is-dark" onClick={handleDarkModeToggle}>
          <strong>{isDarkMode ? "Light mode" : "Dark mode"}</strong>
        </button>
      )}
    </div>
  );
};

export default NavbarEnd;