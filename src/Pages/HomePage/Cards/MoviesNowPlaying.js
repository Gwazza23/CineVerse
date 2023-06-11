import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MoviesNowPlaying.css";

function MoviesNowPlaying({ moviesNowPlaying }) {
  const nowPlaying = moviesNowPlaying.nowPlaying;
  const [preloadedImages, setPreloadedImages] = useState([]);
  console.log(preloadedImages)
  useEffect(() => {
    const images = nowPlaying && nowPlaying.map((movie) => {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
      return img;
    });

    setPreloadedImages(images);
  }, [nowPlaying]);

  return (
    <div className="now-playing-div">
      <div className="now-playing-title">
        <h2>Now Playing</h2>
      </div>
      <div className="now-playing-list">
        {nowPlaying &&
          nowPlaying.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div
                className="now-playing-card"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`,
                }}
              >
                <h3>{movie.title}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MoviesNowPlaying;
