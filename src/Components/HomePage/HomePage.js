import "./HomePage.css";
import PopularCard from "./Cards/PopularCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularMovies, selectPopular } from "../../Slices/PopularSlice";

function HomePage() {
  const dispatch = useDispatch();

  const popularMovies = useSelector(selectPopular);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <div>
      <PopularCard movies={popularMovies}/>
    </div>
  );
}

export default HomePage;
