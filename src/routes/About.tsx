import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";
import { lightStyles } from "../lightStyles";
import { darkStyles } from "../darkStyles";

export function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logoImage, setLogoImage] = useState("/logo-light.png");

  useEffect(() => {
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
          <button className="navbar-item">
            <img src={process.env.PUBLIC_URL + logoImage} alt="Icon" />
            <strong>
              <Link to="/">MyCats</Link>
            </strong>
          </button>
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
            <h1 className="title">About</h1>
          </div>
          </section>
        <div className="content-container">
        
          <div className="cat-info">
            <div className="cat-image">
              <h2>Shishka</h2>
              <img
                src={process.env.PUBLIC_URL + "/images/shishka-1.jpg"}
                alt="Cat 1"
              />
            </div>
            <div className="cat-description">
              <h2>A silent killer</h2>
              <p>
                She will always support in difficult times. She has a complex
                character that makes life more interesting. Can scare a sudden
                appearance from around the corner. The oldest of the cats.
              </p>
            </div>
          </div>

          <div className="cat-info">
            <div className="cat-image">
              <h2>Vishnya</h2>
              <img
                src={process.env.PUBLIC_URL + "/images/vishnya-2.jpg"}
                alt="Cat 2"
              />
            </div>
            <div className="cat-description">
              <h2>Good but crazy</h2>
              <p>
                Wakes up better than any alarm clock. Extremely affectionate and
                endearing. She looks at the world more widely because of her big
                eyes and plays with pleasure even with people who are not shy.
                Sometimes she sleeps in positions that deny physics. One of the
                little sisters of Shishka.
              </p>
            </div>
          </div>

          <div className="cat-info">
            <div className="cat-image">
              <h2>Frida</h2>
              <img
                src={process.env.PUBLIC_URL + "/images/frida-3.jpg"}
                alt="Cat 3"
              />
            </div>
            <div className="cat-description">
              <h2>Cup of friduchio</h2>
              <p>
                Purrs like a tractor. The plumpest of the cats with the noblest
                fur. Loves being petted in the shower. An efficient predator
                that can prey on anything that moves, but often sleeps sweetly
                on her cardboard couch, in which otherwise she does not fit
                completely. One of the little sisters of Shishka.
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="text-centered">
            <p>Meow</p>
          </div>
        </footer>
      </div>
    </>
  );
}
