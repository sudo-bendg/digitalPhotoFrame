import { Link } from "react-router-dom";
import "./style.css";

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
      <form id="imageSelect" action="#">
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

function Gallery() {
  return (
    <div id="main">
      <div id="galleryGrid">
        <div class="galleryItem">
          <img
            src="../public/images/icons8-gallery-96.png"
            alt="Gallery Icon"
          />
        </div>
        <div class="galleryItem">
          <img src="../public/images/icons8-home-96.png" alt="Home Icon" />
        </div>
        <div class="galleryItem">
          <img
            src="../public/images/icons8-settings-96.png"
            alt="Settings Icon"
          />
        </div>
        <div class="galleryItem">
          <img
            src="../public/images/icons8-gallery-96.png"
            alt="Gallery Icon"
          />
        </div>
        <div class="galleryItem">
          <img src="../public/images/icons8-home-96.png" alt="Home Icon" />
        </div>
        <div class="galleryItem">
          <img
            src="../public/images/icons8-settings-96.png"
            alt="Settings Icon"
          />
        </div>
        <div class="galleryItem">
          <img
            src="../public/images/icons8-gallery-96.png"
            alt="Gallery Icon"
          />
        </div>
        <div class="galleryItem">
          <img src="../public/images/icons8-home-96.png" alt="Home Icon" />
        </div>
        <div class="galleryItem">
          <img
            src="../public/images/icons8-settings-96.png"
            alt="Settings Icon"
          />
        </div>
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
