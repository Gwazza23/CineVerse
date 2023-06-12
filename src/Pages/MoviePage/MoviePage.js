import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovieCredits, getMovieDetails, selectMovies } from "../../Slices/MoviesSlice";
import { motion } from 'framer-motion'
import { pageVariants } from '../../Util/PageVariants'
import BannerCard from "./Cards/BannerCard";
import ReviewsCard from "./Cards/ReviewsCard";
import CastCard from "./Cards/CastCard";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const movie = useSelector(selectMovies).movie;
  const credits = useSelector(selectMovies).credits;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getMovieDetails(id));
    dispatch(getMovieCredits(id))
      .then(() => {
        setIsLoading(false);
      });
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit'>
      <BannerCard movie={movie} credits={credits} />
      <CastCard credits={credits} />
      <ReviewsCard id={id} />
    </motion.div>
  );
}

export default MoviePage;
