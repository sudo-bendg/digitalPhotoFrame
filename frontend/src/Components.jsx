import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "./config";

function Head({ title }) {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PhotoFrame</title>
    </head>
  );
}

function Header() {
  return (
    <div id="header">
      <h1 id="headerText">PhotoFrame</h1>
      <span id="links">
        <Link id="uploadLink" to="/">
          <img src="/images/icons8-upload-96.png" />
        </Link>
        <Link id="galleryLink" to="/gallery">
          <img src="/images/icons8-gallery-96.png" />
        </Link>
        <Link id="settingsLink" to="/settings">
          <img src="/images/icons8-settings-96.png" />
        </Link>
      </span>
    </div>
  );
}

function IndexMain() {
  return (
    <div id="main">
      <form id="imageSelect" action={BACKEND_URL + "/upload"} method="POST" encType="multipart/form-data" target="_blank">
        <label for="image">Select an image:</label>
        <div>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

function Image({src, alt}) {
  return (
    <div className="galleryItem">
      <img src={src} alt={alt} />
    </div>
  )
}

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(BACKEND_URL + "/uploads", {mode: 'cors'})
      .then((res) => res.json())
      .then((files) => setImages(files))
      .catch((err) => {
        console.error("Failed to fetch images:", err);
        setImages([]); // fallback to empty array on error
      });
  }, []);

  return (
    <div id="main">
      <div id="galleryGrid">
        {images.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          images.map((filename, idx) => (
            <Image
              key={idx}
              src={`${BACKEND_URL}/uploads/${filename}`}
              alt={filename}
            />
          ))
        )}
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div id="main">
      <form id="settingSelect" action="#">
        <div id="slideSpeedContainer">
          <label for="slideSpeed">Slideshow Speed</label>
          <select name="slideSpeed" id="slideSpeed">
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="8">8</option>
          </select>
        </div>
        <div id="showMetaContainer">
          <label for="showMeta">Show Data</label>
          <input type="radio" id="showMeta" name="showMeta" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { Head, Header, IndexMain, Gallery, Settings };
