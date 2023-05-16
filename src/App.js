import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [catPhoto, setCatPhoto] = useState("");
  const catPhotoCaption = "Here is cat!";

  const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
  };


  const getRandomCatPhoto = () => {
    const randomIndex = getRandomInt();
    const catPhotosFolder = process.env.PUBLIC_URL + "/images";
    const catPhotos = ["frida-1.jpg", "frida-2.jpg", "frida-3.jpg","vishnya-1.jpg", "vishnya-2.jpg", "vishnya-3.jpg", "shishka-1.jpg", "shishka-2.jpg", "shishka-3.jpg"]; 


    const randomCatPhotoPath = catPhotosFolder + "/" + catPhotos[randomIndex];
    return randomCatPhotoPath;
  };


  useEffect(() => {
    const randomCatPhoto = getRandomCatPhoto();
    setCatPhoto(randomCatPhoto);
  }, []);

  const handleCatPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCatPhoto(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      const randomCatPhoto = getRandomCatPhoto();
      setCatPhoto(randomCatPhoto);
    } else {
      console.log(`Нажата кнопка ${buttonNumber}`);
    }
  }

  

  return (
    <div>
     
      <button onClick={() => handleButtonClick(1)}>myCats</button>
      <button onClick={() => handleButtonClick(1)}>Home</button>
      <button onClick={() => handleButtonClick(3)}>About</button>
      <button onClick={() => handleButtonClick(4)}>Dark mode</button>
      <button onClick={() => handleButtonClick(1)}>Give me another cat!</button>
      <button onClick={() => handleButtonClick(6)}>Upload</button>
      <div>
        <h2>{catPhotoCaption}</h2>
        <input type="file" accept="image/*" onChange={handleCatPhotoChange} />
        {catPhoto && <img src={catPhoto} alt="Кошка" />}
      </div>
    </div>
  );
}

export default App;
