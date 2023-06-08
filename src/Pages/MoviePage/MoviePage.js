import { useParams } from "react-router-dom";
import BannerCard from "./Cards/BannerCard";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMovieDetails, selectMovies } from "../../Slices/MoviesSlice";

function MoviePage() {
  const dispatch = useDispatch();
  const {id} = useParams();

  const movie = useSelector(selectMovies).data

  useEffect(() => {
    dispatch(getMovieDetails(id))
  }, [dispatch, id])

  return <div>
    <BannerCard movie={movie} />
  </div>;
}

export default MoviePage;
