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
    setTimeout(() => {
      setIsHomeActive(true);
    }, 0);
  };

  const catPhotoCaption = "Here is a cat!";

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="navbar">
        <div className="navbar-top" role="navigation">
          <div className="navbar-brand">
            <button className="navbar-item" onClick={handleHomeButtonClick}>
              <img src={process.env.PUBLIC_URL + logoImage} alt="Icon" />
              <strong>
                <Link to="/"> MyCats</Link>
              </strong>
            </button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <button className="navbar-item" onClick={handleHomeButtonClick}>
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
