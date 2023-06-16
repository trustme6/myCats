import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { storage } from "../App";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Global } from "@emotion/react";
import { lightStyles } from "../lightStyles";
import { darkStyles } from "../darkStyles";
import Footer from "../footer";
import Modal from "../modal";
import NavbarEnd from "../navbarEnd";
import MenuItems from "../menuItems";
import { useBreakpoints } from "../hooks/useBreakpoints";

export const Home = () => {
  const [randomCatPhoto, setRandomCatPhoto] = useState("");
  const [randomCatPhotoKey, setRandomCatPhotoKey] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isSmallScreen } = useBreakpoints();

  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(isSmallScreen);

  const [catPhotos, setCatPhotos] = useState<string[]>([]);

  const logoImage = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  const getRandomCatPhoto = async () => {
    const randomIndex = Math.floor(Math.random() * catPhotos.length);
    setRandomCatPhoto(catPhotos[randomIndex]);
    setRandomCatPhotoKey(Date.now().toString());
  };

  const getCatPhotos = async () => {
    const catPhotosFolder = "images";
    const storageRef = ref(storage, catPhotosFolder);
    const photoList = await listAll(storageRef);
    const photoUrls = await Promise.all(
      photoList.items.map(async (itemRef) => {
        const downloadURL = await getDownloadURL(itemRef);
        return downloadURL;
      })
    );

    setCatPhotos(photoUrls);
  };

  useEffect(() => {
    if (isSmallScreen) {
      setIsMenuButtonVisible(true);
    } else {
      setIsModalOpen(false);
      setIsMenuButtonVisible(false);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    getCatPhotos();
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);
  useEffect(() => {
    getRandomCatPhoto();
  }, [catPhotos.length]);

  const catPhotoCaption = "Here is a cat!";

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="navbar">
        <div className="navbar-top" role="navigation">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item"
              onClick={() => getRandomCatPhoto()}
            >
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
          <button className="another-cat" onClick={getRandomCatPhoto}>
            Give me another cat!
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};
