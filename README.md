# digitalPhotoFrame

A nice project written in (mostly) Javascript to provide digital photo frame functionality to a Raspberry Pi. The photo frame functionality iteself will be implemented using bash, and will be left to the end of the project to add. We also provide a Javascript web app built using Express and React which allows users to upload photos and edit settings via LAN.

## Progress

The steps expected to be taken in this project are as follows:

- Wireframe html pages
- Express Backend
- React Frontend
- Bash

## Site Map

### /

Homepage. Allows uploads of images via a html form. Uploading these files will put them into the correct directory on the Pi. There are also links to /gallery and /settings.

### /gallery

Photo gallery. We display thumbnails of our photos, and allow photos in the gallery to be deleted. There is also a link to /.

### /settings

Settings. These will edit a runtime config file on the pi, allowing things like speed of slideshow, timeout, displaying metadeta to be changed.
