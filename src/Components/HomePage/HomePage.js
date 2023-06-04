import "./HomePage.css";
import PopularCard from "./Cards/PopularCard";
import GenreCard from "./Cards/GenreCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularMovies, selectLists, getMoviesNowPlaying } from "../../Slices/MovieListSlice";
import { getMovieGenres, selectGenre } from "../../Slices/GenreSlice";
import MoviesNowPlaying from "./Cards/MoviesNowPlaying";


function HomePage() {
  const dispatch = useDispatch();

  const movieLists = useSelector(selectLists);
  const movieGenres = useSelector(selectGenre);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getMovieGenres())
    dispatch(getMoviesNowPlaying())
  }, [dispatch]);
  
  return (
    <div>
      <PopularCard movies={movieLists}/>
      <GenreCard genres={movieGenres}/>
      <MoviesNowPlaying moviesNowPlaying={movieLists}/>
    </div>
  );
}

export default HomePage;
