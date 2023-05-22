import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
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
const storage = getStorage(app);

export function Home() {
  const [randomCatPhoto, setRandomCatPhoto] = useState("");
  const [randomCatPhotoKey, setRandomCatPhotoKey] = useState("");
  const [isHomeActive, setIsHomeActive] = useState(true);

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
    setRandomCatPhotoKey(Date.now().toString()); // Генерация нового ключа
  };

  useEffect(() => {
    getRandomCatPhoto();
  }, []);

  useEffect(() => {
    if (isHomeActive) {
      getRandomCatPhoto();
    }
  }, [isHomeActive]);

  const handleHomeButtonClick = () => {
    setIsHomeActive(false);
    setTimeout(() => {
      setIsHomeActive(true);
    }, 0);
  };

  const catPhotoCaption = "Here is a cat!";

  return (
    <div class="navbar">
      <div class="navbar-top" role="navigation">
        <button class="navbar-item" onClick={handleHomeButtonClick}>
          <Link to="/">Home</Link>
        </button>
        <button class="navbar-item">
          <Link to="/about">About</Link>
        </button>
        <button class="navbar-item">
          <Link to="/upload">Upload</Link>
        </button>
      </div>
      <section class="cat">
        <div class="title-centered">
          <h1 class="title">{catPhotoCaption}</h1>
        </div>
      </section>
      <div class="text-centered">
        {randomCatPhoto && (
          <img key={randomCatPhotoKey} src={randomCatPhoto} alt="Кошка" />
        )}
      </div>
    </div>
  );
}
export function About() {
  return (
    <div class="navbar">
      <div class="navbar-top" role="navigation">
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
      <h1 class ="title">About</h1>
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
          endearing. She looks at the world more widely because of her big eyes
          and plays with pleasure even with people who are not shy. Sometimes
          she sleeps in positions that deny physics. One of the little sisters
          of Shishka.{" "}
        </p>
      </div>
      <div>
        <h2>Frida</h2>
        <img src={process.env.PUBLIC_URL + "/images/frida-3.jpg"} alt="Cat 3" />
        <h2>Cup of friducchio</h2>
        <p>
          Purrs like a tractor. The plumpest of the cats with the noblest fur.
          Loves being petted in the shower. An efficient predator that can prey
          on anything that moves, but often sleeps sweetly on her cardboard
          couch, in which otherwise she does not fit completely.One of the
          little sisters of Shishka
        </p>
      </div>
    </div>
  );
}

export function Upload() {
  const [catPhoto, setCatPhoto] = useState("");
  const [uploadedCatPhoto, setUploadedCatPhoto] = useState("");

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
    <div class ="navbar">
    <div class="navbar-top" role="navigation">
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
        <section class="cat">
        <div class="title-centered">
        <h1 class = "title">Add your cat</h1>
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
    
    </div>);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/upload" Component={Upload} />
      </Routes>
    </Router>
  );
}

export default App;
