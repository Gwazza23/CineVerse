import "../../Util/Pages.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedMovies, selectLists } from "../../Slices/MovieListSlice";
import { motion } from "framer-motion";
import { pageVariants } from "../../Util/PageVariants";
import MovieCards from "../../Util/MovieCards";
import Button from "../../Util/Button";

function PopularPage() {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
    scrollToTop();
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();
  const popularList = useSelector(selectLists).topRated;
  useEffect(() => {
    dispatch(getTopRatedMovies(page));
  }, [dispatch, page]);
  return (
    <motion.div
      animate="animate"
      exit="exit"
      initial="initial"
      variants={pageVariants}
    >
      <div className="page-div">
        {popularList &&
          popularList.map((movie) => {
            return <MovieCards movie={movie} key={movie.id} />;
          })}
      </div>
      {page === 1 ? (
        <div className="btn-div">
          <p>{page}</p>
          <Button page={"nextPage"} onClick={handleNextPage} />
        </div>
      ) : (
        <div className="btn-div">
          <Button page={"previousPage"} onClick={handlePreviousPage} />
          <p>{page}</p>
          <Button page={"nextPage"} onClick={handleNextPage} />
        </div>
      )}
    </motion.div>
  );
}

export default PopularPage;
