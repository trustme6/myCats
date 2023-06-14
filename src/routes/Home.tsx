import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { storage } from "../App";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Global } from "@emotion/react";
import { lightStyles } from "../lightStyles";
import { darkStyles } from "../darkStyles";
import Footer from "../footer";

export const Home = () => {
  const [randomCatPhoto, setRandomCatPhoto] = useState("");
  const [randomCatPhotoKey, setRandomCatPhotoKey] = useState("");
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1080);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(isSmallScreen);

  const logoImage = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  const getRandomCatPhoto = async () => {
    const catPhotosFolder = "images";
    const storageRef = ref(storage, catPhotosFolder);
    const photoList = await listAll(storageRef);
    const photoUrls = await Promise.all(
      photoList.items.map(async (itemRef) => {
        const downloadURL = await getDownloadURL(itemRef);
        return downloadURL;
      })
    );
    const randomIndex = Math.floor(Math.random() * photoUrls.length);
    setRandomCatPhoto(photoUrls[randomIndex]);
    setRandomCatPhotoKey(Date.now().toString());
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1080);
      setIsMenuButtonVisible(window.innerWidth < 1080);
      if (window.innerWidth >= 1080) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getRandomCatPhoto();
  }, []);

  useEffect(() => {
    if (isHomeActive) {
      getRandomCatPhoto();
    }
  }, [isHomeActive]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  const handleHomeButtonClick = () => {
    setIsHomeActive(false);
    getRandomCatPhoto();
    setTimeout(() => {
      setIsHomeActive(true);
    }, 0);
  };

  const catPhotoCaption = "Here is a cat!";

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const menuItems = (
    <>
      <Link to="/" className="navbar-item" onClick={handleHomeButtonClick}>
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

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="navbar">
        <div className="navbar-top" role="navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" onClick={handleHomeButtonClick}>
              <img src={process.env.PUBLIC_URL + logoImage} alt="Icon" />
              <strong>MyCats</strong>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">{!isSmallScreen && menuItems}</div>
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
          </div>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">{menuItems}</div>
          </div>
        )}

        <section className="cat">
          <div className="title-centered">
            <h1 className="title">{catPhotoCaption}</h1>
          </div>
        </section>

        <div className="text-centered">
          {randomCatPhoto && (
            <img key={randomCatPhotoKey} src={randomCatPhoto} alt="Кошка" />
          )}
          <br />
          <br />
          <button className="another-cat" onClick={handleHomeButtonClick}>
            Give me another cat!
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};