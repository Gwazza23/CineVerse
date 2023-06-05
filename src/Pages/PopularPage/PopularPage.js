import "./PopularPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, selectLists } from "../../Slices/MovieListSlice";
import MovieCards from "../../UtilComponents/MovieCards";
import Button from "../../UtilComponents/Button";

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
  const popularList = useSelector(selectLists).popular;
  useEffect(() => {
    dispatch(getPopularMovies(page));
  }, [dispatch, page]);
  return (
    <>
      <div className="popular-page-div">
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
    </>
  );
}

export default PopularPage;
