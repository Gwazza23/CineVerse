import { useParams } from "react-router-dom";
import BannerCard from "./Cards/BannerCard";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMovieDetails, selectMovies } from "../../Slices/MoviesSlice";
import ReviewsCard from "./Cards/ReviewsCard";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const movie = useSelector(selectMovies).movie;

  useEffect(() => {
    setIsLoading(true); // Set loading state to true before fetching new movie details
    dispatch(getMovieDetails(id))
      .then(() => setIsLoading(false)) // Set loading state to false when details are fetched
      .catch(() => setIsLoading(false)); // Set loading state to false in case of an error
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading screen while fetching movie details
  }

  return (
    <div>
      <BannerCard movie={movie} />
      <ReviewsCard id={id} />
    </div>
  );
}

export default MoviePage;
