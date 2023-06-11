import "./ReviewsCard.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectMovies, getMovieReviews } from "../../../Slices/MoviesSlice";

function ReviewsCard({ id }) {
  const [showFullMap, setShowFullMap] = useState({});
  const dispatch = useDispatch();
  const reviews = useSelector(selectMovies).reviews.results;

  const toggleContent = (reviewId) => {
    setShowFullMap((prevMap) => ({
      ...prevMap,
      [reviewId]: !prevMap[reviewId],
    }));
  };

  useEffect(() => {
    dispatch(getMovieReviews({ id: id, page: 1 }));
  }, [dispatch, id]);

  const renderReviewContent = (content, reviewId) => {
    if (content.length > 250 && !showFullMap[reviewId]) {
      const truncatedContent = `${content.slice(0, 250)}...`;
      return { __html: truncatedContent };
    }
    return { __html: content };
  };

  return (
    <div className="reviews-div">
      <h2>Reviews</h2>
      {reviews && reviews.length === 0 ? (
        <p className="no-reviews">No reviews available</p>
      ) : (
        reviews &&
        reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <h3>{review.author}</h3>
            <div className="review-content">
              <p dangerouslySetInnerHTML={renderReviewContent(review.content, review.id)}></p>
              {review.content.length > 250 && (
                <button onClick={() => toggleContent(review.id)}>
                  {showFullMap[review.id] ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewsCard;
