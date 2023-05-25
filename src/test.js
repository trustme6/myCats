export function About() {
    return (
      <div className="navbar">
        {/* ... */}
        <div className="content-container">
          <h1 className="title">About</h1>
          <div className="about-container">
            <div className="about-image">
              <img
                src={process.env.PUBLIC_URL + "/images/shishka-1.jpg"}
                alt="Cat 1"
              />
            </div>
            <div className="about-content">
              <h2 className="about-heading">Shishka</h2>
              <p className="about-description">
                She will always support in difficult times. She has a complex
                character that makes life more interesting. Can scare a sudden
                appearance from around the corner. The oldest of the cats.
              </p>
            </div>
          </div>
          {/* ... */}
        </div>
        {/* ... */}
      </div>
    );
  }
  