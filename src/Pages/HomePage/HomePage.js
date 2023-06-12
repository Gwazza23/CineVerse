import PopularCard from "./Cards/PopularCard";
import GenreCard from "./Cards/GenreCard";
import MoviesNowPlaying from "./Cards/MoviesNowPlaying";

import { motion } from 'framer-motion';
import { pageVariants } from '../../Util/PageVariants'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularMovies, selectLists, getMoviesNowPlaying } from "../../Slices/MovieListSlice";
import { getMovieGenres, selectGenre } from "../../Slices/GenreSlice";


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
    <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit'>
      <PopularCard movies={movieLists}/>
      <GenreCard genres={movieGenres}/>
      <MoviesNowPlaying moviesNowPlaying={movieLists}/>
    </motion.div>
  );
}

export default HomePage;
