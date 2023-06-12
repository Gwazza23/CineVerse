# Project Overview

Welcome to **CineVerse**, this is a movie review website driven by [themoviedb.org](https://developer.themoviedb.org/docs) API.

## Features

* **Home**: The Home page acts as the main hub through which users can navigate to movies by different \
genres of films, movies currently playing in theaters or view the top 3 currently trending films. If a user \
hovers over the poster for a movie in the trending section, it will display the overview for the film

* **Category**: users can browse the api list of films by popular,upcoming or trending. When hovering over the \
posters, users can view the name of the film along with the rating for it.

* **Genre**: users can browse the api list of films by genre. when hovering over the posters, users can view the \
name of the film along with the rating for it.

* **Movie Details**:
    * each page contains details of the movie such as rating,release data and director.
    * each page contains list of cast members.
    * each page contains reviews submitted by users at [themoviedb.org](https://www.themoviedb.org/)
    
    <br>
    
* **Responsive Design**: The website has been optimized to be viewed on range of devices from mobile phones to desktops.

## Dependecies ##

The following dependecies are used in this project:
* [React](https://reactjs.org/): JavaScript library for building user interface.

* [React Redux](https://react-redux.js.org/): Allows React components to read data from a Redux store and dispatch actions  to the \
store to update state.

* [React Router](https://reactrouter.com/en/main): Allows for client-side routing.

* [Framer Motion](https://www.framer.com/motion/): Production-ready motion library for React.

* [Axios](https://axios-http.com/): A promised based HTTP client for browser and node.js

## Areas for improvment

* currently the genres section of the homepage only display 5 genres, this is because themoviedb API some time sends faulty genre ids\
resulting in the GET request used to retrieve a list of movies using genre id providing null results, therfore, a decision was made to\
exclude a full list of genres and for the time being to include only 5 genres.
