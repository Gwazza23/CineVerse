import { useParams } from "react-router-dom";
import BannerCard from "./Cards/BannerCard";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMovieDetails, selectMovies } from "../../Slices/MoviesSlice";
import ReviewsCard from "./Cards/ReviewsCard";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const movie = useSelector(selectMovies).movie;

  useEffect(() => {
    setIsLoading(true);
    dispatch(getMovieDetails(id))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BannerCard movie={movie} />
      <ReviewsCard id={id} />
    </div>
  );
}

export default MoviePage;
