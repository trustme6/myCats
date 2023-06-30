import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import MenuItems from "./menuItems";
import NavbarEnd from "./navbarEnd";
import { ThemeContext } from "../contexts/themeContext";
import { useBreakpoints } from "../hooks/useBreakpoints";
import Modal from "./modal";
import styled from "@emotion/styled";




const Wrapper = styled.nav<{isDarkMode: boolean}>`
.navbar-item {
  background-color: ${props => props.isDarkMode ? 'hsl(0, 0%, 14%)' : '#fff;'};
}

.navbar-item:visited {
  color: ${props => props.isDarkMode ? 'white' : '#4a4a4a'};
}

.navbar-item:hover {
  background-color:  ${props => props.isDarkMode ? 'white' : 'rgba(0, 0, 0, 0.1)'};
  color: #3273dc;
}

.navbar-item a {
  color:  ${props => props.isDarkMode ? 'white' : '#4a4a4a'};
}

.navbar-item a:visited {
  color: ${props => props.isDarkMode ? 'white' : '#4a4a4a'};

  text-decoration: none;
}

`;


export const NavbarTop = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
 
  const logoImage = isDarkMode ? "icons/logo-dark.png" : "icons/logo-light.png";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSmallScreen } = useBreakpoints();
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(isSmallScreen);

  const handleDarkModeToggle = () => {
    if (toggleTheme !== undefined) {
      toggleTheme();
    }
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isSmallScreen) {
      setIsMenuButtonVisible(true);
    } else {
      setIsModalOpen(false);
      setIsMenuButtonVisible(false);
    }
  }, [isSmallScreen]);

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <div className="navbar-top" role="navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={process.env.PUBLIC_URL + logoImage} alt="Icon" />
            <strong>MyCats</strong>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {!isSmallScreen && (
              <MenuItems
                isSmallScreen={isSmallScreen}
                isDarkMode={isDarkMode}
                handleDarkModeToggle={handleDarkModeToggle}
              />
            )}
          </div>
          <NavbarEnd
            isMenuButtonVisible={isMenuButtonVisible}
            isSmallScreen={isSmallScreen}
            handleModalToggle={handleModalToggle}
            handleDarkModeToggle={handleDarkModeToggle}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        menuItems={
          <MenuItems
            isSmallScreen={isSmallScreen}
            isDarkMode={isDarkMode}
            handleDarkModeToggle={handleDarkModeToggle}
          />
        }
      />
    </Wrapper>
  );
};
