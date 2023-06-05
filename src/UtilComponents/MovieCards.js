import './MovieCards.css'

function MovieCards({movie}) {
    console.log(movie)
  return (
    <div className='card' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w342${movie.poster_path})`}}>
        <div className='card-details'>
        <h3>{movie.title}</h3>
        <p>{movie.vote_average}</p>
        </div>
    </div>
  )
}

export default MovieCards