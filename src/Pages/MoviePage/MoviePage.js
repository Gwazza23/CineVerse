import { useParams } from "react-router-dom";
import BannerCard from "./Cards/BannerCard";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMovieDetails, selectMovies } from "../../Slices/MoviesSlice";
import ReviewsCard from "./Cards/ReviewsCard";

function MoviePage() {
  const dispatch = useDispatch();
  const {id} = useParams();

  const movie = useSelector(selectMovies).movie;

  useEffect(() => {
    dispatch(getMovieDetails(id))
  }, [dispatch, id])

  return <div>
    <BannerCard movie={movie} />
    <ReviewsCard id = {id} />
  </div>;
}

export default MoviePage;
