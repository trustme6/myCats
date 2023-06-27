import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../FirebaseApp";

import { Global } from "@emotion/react";

import { useBreakpoints } from "../hooks/useBreakpoints";
import MenuItems from "../components/menuItems";
import NavbarEnd from "../components/navbarEnd";
import Modal from "../components/modal";
import Footer from "../components/footer";
import { darkStyles } from "../styles/darkStyles";
import { lightStyles } from "../styles/lightStyles";

export function Upload() {
  const [catPhoto, setCatPhoto] = useState("");
  const [uploadedCatPhoto, setUploadedCatPhoto] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [logoImage, setLogoImage] = useState(
    isDarkMode ? "/logo-dark.png" : "/logo-light.png"
  );

  const { isSmallScreen } = useBreakpoints();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(isSmallScreen);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
    const newLogoImage = isDarkMode
      ? "icons/logo-dark.png"
      : "icons/logo-light.png";
    setLogoImage(newLogoImage);
  }, [isDarkMode]);

  useEffect(() => {
    if (isSmallScreen) {
      setIsMenuButtonVisible(true);
    } else {
      setIsModalOpen(false);
      setIsMenuButtonVisible(false);
    }
  }, [isSmallScreen]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCatPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCatPhoto(URL.createObjectURL(file));
    }
  };

  const handleCatPhotoUpload = async () => {
    const fileInput = document.getElementById(
      "cat-photo-upload"
    ) as HTMLInputElement | null;

    if (fileInput) {
      const file = fileInput.files?.[0];

      if (file) {
        const catPhotosFolder = "images";
        const storageRef = ref(storage, catPhotosFolder + "/" + file.name);

        try {
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          setUploadedCatPhoto(downloadURL);
          alert("Cat photo uploaded successfully!");
          window.location.reload();
        } catch (error) {
          console.error("Error uploading cat photo:", error);
          alert("Failed to upload cat photo. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="main">
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
        <section className="cat">
          <div className="title-centered">
            <h1 className="title">Add your cat</h1>
          </div>
        </section>

        <div className="text-centered">
          {catPhoto && <img src={catPhoto} alt="Cat" />}
          <input
            type="file"
            id="cat-photo-upload"
            accept="image/*"
            onChange={handleCatPhotoChange}
          />
          <button onClick={handleCatPhotoUpload}>Загрузить</button>
          {uploadedCatPhoto && (
            <img src={uploadedCatPhoto} alt="Uploaded Cat" />
          )}
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
