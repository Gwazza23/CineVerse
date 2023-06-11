import "./BannerCard.css";

function BannerCard({ movie, credits }) {

  const convertTime = (mins) => {
    let hours = Math.floor(mins / 60);
    let remainingMinutes = mins % 60;

    let hourString = hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") : "";
    let minuteString =
      remainingMinutes > 0
        ? remainingMinutes + " minute" + (remainingMinutes > 1 ? "s" : "")
        : "";

    let result =
      hourString + (hourString && minuteString ? " " : " ") + minuteString;
    return result;
  };

  const runtime = convertTime(movie.runtime);
  const formattedNumber = Math.round(movie.vote_average * 10) / 10;

  let textColor;

  if (formattedNumber >= 8) {
    textColor = "lightgreen";
  } else if (formattedNumber >= 5 && formattedNumber < 8) {
    textColor = "orange";
  } else {
    textColor = "red";
  }

  const director = credits?.crew?.find(member => member.job === 'Director');
  const directorName = director ? director.name : "Unknown Director";

  return (
    <div className="banner-div">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="banner-details">
        <div className="banner-details-img">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="banner-details-info">
          <h2>{movie.title}</h2>
          <h3>{movie.tagline}</h3>
          <p>
            {isNaN(formattedNumber) ? (
              "N/A"
            ) : (
              <span style={{color: textColor}}>{formattedNumber} &#9733;</span>
            )}
          </p>
          <p>Runtime - {runtime}</p>
          <p>Release Date - {movie.release_date}</p>
          <p>Director - {directorName}</p>
        </div>
        <div className="banner-details-overview">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
