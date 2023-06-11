import { useParams } from "react-router-dom";
import BannerCard from "./Cards/BannerCard";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMovieCredits, getMovieDetails, selectMovies } from "../../Slices/MoviesSlice";
import ReviewsCard from "./Cards/ReviewsCard";
import CastCard from "./Cards/CastCard";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const movie = useSelector(selectMovies).movie;
  const credits = useSelector(selectMovies).credits;

  useEffect(() => {
    dispatch(getMovieDetails(id));
    dispatch(getMovieCredits(id));
  }, [dispatch, id]);

  return (
    <div>
      <BannerCard movie={movie} credits={credits}/>
      <CastCard credits={credits}/>
      <ReviewsCard id={id} />
    </div>
  );
}

export default MoviePage;
