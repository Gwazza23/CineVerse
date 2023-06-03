import "./HomePage.css";
import PopularCard from "./Cards/PopularCard";
import GenreCard from "./Cards/GenreCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularMovies, selectLists } from "../../Slices/MovieListSlice";
import { getMovieGenres, selectGenre } from "../../Slices/GenreSlice";


function HomePage() {
  const dispatch = useDispatch();

  const popularMovies = useSelector(selectLists);
  const movieGenres = useSelector(selectGenre);



  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getMovieGenres())
  }, [dispatch]);
  
  return (
    <div>
      <PopularCard movies={popularMovies}/>
      <GenreCard genres={movieGenres}/>
    </div>
  );
}

export default HomePage;
