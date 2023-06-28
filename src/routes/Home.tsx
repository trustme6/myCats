import React, { useState, useEffect, useContext } from "react";

import { storage } from "../FirebaseApp";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Global } from "@emotion/react";

import Footer from "../components/footer";
import { darkStyles } from "../styles/darkStyles";
import { lightStyles } from "../styles/lightStyles";
import { NavbarTop } from "../components/navbarTop";
import { ThemeContext } from "../contexts/themeContext";

export const Home = () => {
  const [randomCatPhoto, setRandomCatPhoto] = useState("");
  const [randomCatPhotoKey, setRandomCatPhotoKey] = useState("");
  const { isDarkMode } = useContext(ThemeContext);
  const [catPhotos, setCatPhotos] = useState<string[]>([]);

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
    getCatPhotos();
  }, []);

  useEffect(() => {
    getRandomCatPhoto();
  }, [catPhotos.length]);

  const catPhotoCaption = "Here is a cat!";

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="main">
        <NavbarTop />
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
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};
