import React from "react";
import './style.css'

function Head({ title }) {
    return (<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PhotoFrame</title>
        
    </head>)
}

function Header() {
    return (<div id="header">
        <a id="headerLeftLink" href="./gallery.html"><img id="headerLeftImage" src="/images/icons8-gallery-96.png" /></a>
        <h1 id="headerText">PhotoFrame</h1>
        <a id="headerRightLink" href="./settings.html"><img id="headerRightImage" src="/images/icons8-settings-96.png" /></a>
    </div>)
}

function IndexMain() {
    return (<div id="main">
        <form id="imageSelect" action="#">
            <label for="image">Select an image:</label>
            <div>
                <input type="file" id="image" name="image" accept="image/png, image/jpeg" />
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>)
}

export {Head, Header, IndexMain};