import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../App";

import { Global } from '@emotion/react';
import { lightStyles} from "../lightStyles";
import { darkStyles } from "../darkStyles";
import Footer from "../footer";

export function Upload() {
  const [catPhoto, setCatPhoto] = useState("");
  const [uploadedCatPhoto, setUploadedCatPhoto] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [logoImage, setLogoImage] = useState(
    isDarkMode ? "/logo-dark.png" : "/logo-light.png"
  );


useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
    const newLogoImage = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
    setLogoImage(newLogoImage);
  }, [isDarkMode]);
  

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
        {uploadedCatPhoto && <img src={uploadedCatPhoto} alt="Uploaded Cat" />}
      </div>
      <Footer />
    </div>
    </>
  );
}
