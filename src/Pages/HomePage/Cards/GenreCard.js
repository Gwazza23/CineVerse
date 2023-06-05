import "./GenreCard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre, selectLists } from "../../../Slices/MovieListSlice";
import { selectGenre } from "../../../Slices/GenreSlice";
import { useNavigate } from 'react-router-dom'

function GenreCard({ genres }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const genreMovie = useSelector(selectLists).genre.slice(0, 5);
  const genreName = useSelector(selectGenre).data.slice(1, 6);

  const genreNames = [];
  const movieDetails = [];

  genreName.forEach((genre) =>
    genreNames.push({ name: genre["name"], id: genre["id"] })
  );
  genreMovie.forEach((movie) =>
    movieDetails.push({
      title: movie["title"],
      backdrop_path: movie["backdrop_path"],
      poster_path: movie["poster_path"],
    })
  );

  let combined = [];
  for (let i = 0; i < genreNames.length; i++) {
    combined.push({ genre: genreNames[i], movie: movieDetails[i] });
  }

  useEffect(() => {
    genres.data.slice(1, 6).forEach((data) => {
      dispatch(getMoviesByGenre(data.id));
    });
  }, [dispatch, genres.data]);

  return (
    <div className="genre-list-div">
      <div className="genre-list-title">
        <h2>Genres</h2>
      </div>
      <div className="genre-container">
        <div className="genre-list">
          {combined &&
            combined.map((genre) => {
              const backdropPath =
                genre["movie"] && genre["movie"]["backdrop_path"];
              return (
                <div
                  className="genre-card"
                  style={{
                    backgroundImage: backdropPath
                      ? `url(https://image.tmdb.org/t/p/w342${backdropPath})`
                      : "",
                  }}
                  key={genre["genre"]["id"]}
                  onClick={() => {
                    navigate(`/genre/${genre['genre']['id']}`)
                  }}
                >
                  <h3>{genre["genre"]["name"]}</h3>
                </div>
              );
            })}
          <div className="genre-card">
            <h3>All Genres</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreCard;
