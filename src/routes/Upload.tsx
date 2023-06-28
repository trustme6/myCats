import React, { useState, useContext } from "react";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../FirebaseApp";

import { Global } from "@emotion/react";

import Footer from "../components/footer";
import { darkStyles } from "../styles/darkStyles";
import { lightStyles } from "../styles/lightStyles";
import { NavbarTop } from "../components/navbarTop";
import { ThemeContext } from "../contexts/themeContext";

export function Upload() {
  const [catPhoto, setCatPhoto] = useState("");
  const [uploadedCatPhoto, setUploadedCatPhoto] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

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
        <NavbarTop />

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
