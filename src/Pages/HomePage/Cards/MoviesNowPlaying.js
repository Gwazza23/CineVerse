import "./MoviesNowPlaying.css";

function MoviesNowPlaying({ moviesNowPlaying }) {
  const nowPlaying = moviesNowPlaying.nowPlaying;
  return (
    <div className="now-playing-div">
        <div className="now-playing-title">
            <h2>Now Playing</h2>
        </div>
      <div className="now-playing-list">
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <div className="now-playing-card" key={movie.id} style={{backgroundImage:`url(https://image.tmdb.org/t/p/w342${movie.poster_path})`}}>
                <h3>{movie.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MoviesNowPlaying;
