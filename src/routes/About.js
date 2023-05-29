import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  
        <div class="content-container">
          <h1 class="title">About</h1>
  
          <div class="cat-info">
            <div class="cat-image">
              <h2>Shishka</h2>
              <img
                src={process.env.PUBLIC_URL + "/images/shishka-1.jpg"}
                alt="Cat 1"
              />
            </div>
            <div class="cat-description">
              <h2>A silent killer</h2>
              <p>
                She will always support in difficult times. She has a complex
                character that makes life more interesting. Can scare a sudden
                appearance from around the corner. The oldest of the cats.
              </p>
            </div>
          </div>
  
          <div class="cat-info">
            <div class="cat-image">
              <h2>Vishnya</h2>
              <img
                src={process.env.PUBLIC_URL + "/images/vishnya-2.jpg"}
                alt="Cat 2"
              />
            </div>
            <div class="cat-description">
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
  
          <div class="cat-info">
            <div class="cat-image">
              <h2>Frida</h2>
              <img
                src={process.env.PUBLIC_URL + "/images/frida-3.jpg"}
                alt="Cat 3"
              />
            </div>
            <div class="cat-description">
              <h2>Cup of friduchio</h2>
              <p>
                Purrs like a tractor. The plumpest of the cats with the noblest
                fur. Loves being petted in the shower. An efficient predator that
                can prey on anything that moves, but often sleeps sweetly on her
                cardboard couch, in which otherwise she does not fit completely.
                One of the little sisters of Shishka.
              </p>
            </div>
          </div>
        </div>
  
        <footer class="footer">
          <div class="text-centered">
            <p>Meow</p>
          </div>
        </footer>
      </div>
    );
  }