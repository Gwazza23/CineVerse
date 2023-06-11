import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./PopularCard.css";

function PopularCard({ movies }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState([]);
  console.log(preloadedImages)
  useEffect(() => {
    // Preload images on component mount
    const images = movies && movies.popular.slice(0, 3).map((movie) => {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
      return img;
    });

    setPreloadedImages(images);
  }, [movies]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="popular-card-div">
      <div className="popular-card-title">
        <h2>Trending Movies</h2>
      </div>
      <div className="popular-cards">
        {movies &&
          movies.popular.slice(0, 3).map((movie, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div
                  className="movie-card"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className={`img-caption ${isHovered ? "show" : ""}`}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default PopularCard;
