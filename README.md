# JavaScript Automatic/Manual Slideshow


This slideshow pulls images with keywork 'wildfire' from Pixabay API.
This is HTML, CSS and JavaScript project.

The Pixabay API key is hidden with the help of Node.js and Dotevn Webpack

This is the start off as a simple app which will be gradually improved by adding more features and UX improvements.

## Challenges

 - create a carousel with JavaScript
 - practice some css animation (transition, fading, keyframes)
 - integrate external API
 - hide Pixabay API key
 - use node.js and webpacks
 
## Setup

 - clone the repo to your computer
 - in Terminal navigate to the copied repo's folder
 - run `npm install` to install all dependencies
 - in the copied repo's folder rename the file `.env_sample` to the `.env` and add your pixabay API key instead of the YOUR_API_KEY_HERE
 - run `npm run serve` to open the slideshow on your localhost.
For the localhost 8001 port is being used - http://localhost:8001/.

![](img/slideshow.gif)

## Features to be added

 - ~~adding text to the slides~~
 - ~~adding key listeners to sliding (left and right arrow keys)~~
 - ~~automated slide transitions~~
 - adding pause button
 - hiding slideshow arrows on first and last slides
 - giving the user an opportunity to choose a keyword for fetching images