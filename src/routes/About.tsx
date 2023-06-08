import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";
import { lightStyles } from "../lightStyles";
import { darkStyles } from "../darkStyles";
import Footer from "../footer";

const catInfoData = [
  {
    name: "Shishka",
    image: "/images/shishka-1.jpg",
    description:
      "She will always support in difficult times. She has a complex character that makes life more interesting. Can scare a sudden appearance from around the corner. The oldest of the cats.",
  },
  {
    name: "Vishnya",
    image: "/images/vishnya-2.jpg",
    description:
      "Wakes up better than any alarm clock. Extremely affectionate and endearing. She looks at the world more widely because of her big eyes and plays with pleasure even with people who are not shy. Sometimes she sleeps in positions that deny physics. One of the little sisters of Shishka.",
  },
  {
    name: "Frida",
    image: "/images/frida-3.jpg",
    description:
      "Purrs like a tractor. The plumpest of the cats with the noblest fur. Loves being petted in the shower. An efficient predator that can prey on anything that moves, but often sleeps sweetly on her cardboard couch, in which otherwise she does not fit completely. One of the little sisters of Shishka.",
  },
];

export function About() {
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

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="navbar">
        <div className="navbar-top" role="navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={process.env.PUBLIC_URL + logoImage} alt="Icon" />
              <strong>MyCats</strong>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/upload" className="navbar-item">
                Upload
              </Link>
            </div>
            <div className="navbar-end">
              <button className="is-dark" onClick={handleDarkModeToggle}>
                <strong>{isDarkMode ? "Light mode" : "Dark mode"}</strong>
              </button>
            </div>
          </div>
        </div>

        <section className="cat">
          <div className="title-centered">
            <h1 className="title">About</h1>
          </div>
        </section>

        <div className="content-container">
          {catInfoData.map((cat, index) => (
            <div className="cat-info" key={index}>
              <div className="cat-image">
                <h2>{cat.name}</h2>
                <img
                  src={process.env.PUBLIC_URL + cat.image}
                  alt={`Cat ${index + 1}`}
                />
              </div>
              <div className="cat-description">
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
