import React, { useContext } from "react";

import { Global } from "@emotion/react";

import Footer from "../components/footer";
import { darkStyles } from "../styles/darkStyles";
import { lightStyles } from "../styles/lightStyles";

import { ThemeContext } from "../contexts/themeContext";
import { NavbarTop } from "../components/navbarTop";
import { useBreakpoints } from "../hooks/useBreakpoints";

const catInfoData = [
  {
    name: "Shishka",
    about: "A silent killer",
    image: "/images/shishka-1.jpg",
    description:
      "She will always support in difficult times. She has a complex character that makes life more interesting. Can scare a sudden appearance from around the corner. The oldest of the cats.",
  },
  {
    name: "Vishnya",
    about: "Good but crazy",
    image: "/images/vishnya-1.jpg",
    description:
      "Wakes up better than any alarm clock. Extremely affectionate and endearing. She looks at the world more widely because of her big eyes and plays with pleasure even with people who are not shy. Sometimes she sleeps in positions that deny physics. One of the little sisters of Shishka.",
  },
  {
    name: "Frida",
    about: "Cup of freeducchio",
    image: "/images/frida-1.jpg",
    description:
      "Purrs like a tractor. The plumpest of the cats with the noblest fur. Loves being petted in the shower. An efficient predator that can prey on anything that moves, but often sleeps sweetly on her cardboard couch, in which otherwise she does not fit completely. One of the little sisters of Shishka.",
  },
];

export function About() {
  const { isDarkMode } = useContext(ThemeContext);
  const { isSmallScreen } = useBreakpoints();

  return (
    <>
      <Global styles={isDarkMode ? darkStyles : lightStyles} />
      <div className="main">
        <NavbarTop />

        <section className="cat">
          <div className="title-centered">
            <h1 className="title">About</h1>
          </div>
        </section>

        <div className="content-container">
          {catInfoData.map((cat, index) => (
            <div
              className={`cat-info ${isSmallScreen ? "small-screen" : ""}`}
              key={index}
            >
              <div className="cat-image">
                <h2>{cat.name}</h2>
                <img
                  src={process.env.PUBLIC_URL + cat.image}
                  alt={`Cat ${index + 1}`}
                />
              </div>
              <div className="cat-description">
                <h2>{cat.about}</h2>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
