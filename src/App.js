import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.scss";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMC0ckwcjAegoLb8PwqDYmtH0KVK9dAiY",
  authDomain: "cats-ef561.firebaseapp.com",
  projectId: "cats-ef561",
  storageBucket: "cats-ef561.appspot.com",
  messagingSenderId: "1029282213070",
  appId: "1:1029282213070:web:a9732b58ee280bb5ea749f",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);




export function Upload() {
  const [catPhoto, setCatPhoto] = useState("");
  const [uploadedCatPhoto, setUploadedCatPhoto] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logoImage, setLogoImage] = useState("/logo-light");

  useEffect(() => {
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
    const fileInput = document.getElementById("cat-photo-upload");
    const file = fileInput.files[0];

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
  };

  return (
    <div class={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div class="navbar-top" role="navigation">
        <button class="navbar-item">
          <img
            src={process.env.PUBLIC_URL + logoImage}
            alt="Icon"
          />
          <strong>
            <Link to="/">MyCats</Link>
          </strong>
        </button>
        <div class="navbar-menu">
          <div class="navbar-start">
            <button class="navbar-item">
              <Link to="/">Home</Link>
            </button>
            <button class="navbar-item">
              <Link to="/about">About</Link>
            </button>
            <button class="navbar-item">
              <Link to="/upload">Upload</Link>
            </button>
          </div>
          <div class="navbar-end">
            <button class="navbar-item">
              <button class="is-dark" onClick={handleDarkModeToggle}>
                <strong>{isDarkMode ? "Light mode" : "Dark mode"}</strong>
              </button>
            </button>
          </div>
        </div>
      </div>
      <section class="cat">
        <div class="title-centered">
          <h1 class="title">Add your cat</h1>
        </div>
      </section>

      <div class="text-centered">
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
      <footer class="footer">
        <div class="text-centered">
          <p> Meow</p>
        </div>
      </footer>
    </div>
  );
}
