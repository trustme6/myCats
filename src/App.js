import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catPhoto, setCatPhoto] = useState("");
  const [showAboutPage, setShowAboutPage] = useState(false);
  
  

  const catPhotoCaption = "Here is cat!";

  const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
  };

  const getRandomCatPhoto = () => {
    const randomIndex = getRandomInt();
    const catPhotosFolder = process.env.PUBLIC_URL + "/images";
    const catPhotos = [
      "frida-1.jpg",
      "frida-2.jpg",
      "frida-3.jpg",
      "vishnya-1.jpg",
      "vishnya-2.jpg",
      "vishnya-3.jpg",
      "shishka-1.jpg",
      "shishka-2.jpg",
      "shishka-3.jpg",
    ];

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
      setShowAboutPage(false);
    } else if (buttonNumber === 2) {
      setShowAboutPage(true);
    } else {
      console.log(`Нажата кнопка ${buttonNumber}`);
    }
  };

  const renderAboutPage = () => {
    return (
      <div>
        <h1>About</h1>
        <div>
          <h2>Shishka</h2>
          <img
            src={process.env.PUBLIC_URL + "/images/shishka-1.jpg"}
            alt="Cat 1"
          />
          <h2>Silent killer</h2>
          <p>
            She will always support in difficult times. She has a complex
            character that makes life more interesting. Can scare a sudden
            appearance from around the corner. The oldest of the cats.
          </p>
        </div>
        <div>
          <h2>Vishnya</h2>
          <img
            src={process.env.PUBLIC_URL + "/images/vishnya-2.jpg"}
            alt="Cat 2"
          />
          <h2>Good but crazy</h2>
          <p>
            Wakes up better than any alarm clock. Extremely affectionate and
            endearing. She looks at the world more widely because of her big
            eyes and plays with pleasure even with people who are not shy.
            Sometimes she sleeps in positions that deny physics. One of the
            little sisters of Shishka.{" "}
          </p>
        </div>
        <div>
          <h2>Frida</h2>
          <img
            src={process.env.PUBLIC_URL + "/images/frida-3.jpg"}
            alt="Cat 3"
          />
          <h2>Cup of friducchio</h2>
          <p>
            Purrs like a tractor. The plumpest of the cats with the noblest fur.
            Loves being petted in the shower. An efficient predator that can
            prey on anything that moves, but often sleeps sweetly on her
            cardboard couch, in which otherwise she does not fit completely.One
            of the little sisters of Shishka
          </p>
        </div>
      </div>
    );
    
  };

  

  return (
    <div>
    <button onClick={() => handleButtonClick(1)}>MyCats</button>
    <button onClick={() => handleButtonClick(1)}>Home</button>
    <button onClick={() => handleButtonClick(2)}>About</button>
    <button onClick={() => handleButtonClick(3)}>Dark mode</button>
    <button onClick={() => handleButtonClick(1)}>Give me another cat!</button>
    <button onClick={() => handleButtonClick(5)}>Upload</button>
    {showAboutPage ? (
      renderAboutPage()
    ) : (
      <div>
        <h2>{catPhotoCaption}</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleCatPhotoChange}
        />
        {catPhoto && <img src={catPhoto} alt="Кошка" />}
      </div>
    )}
  </div>
);
}

export default App;
