import './MovieCards.css'
import {Link} from 'react-router-dom'

function MovieCards({movie}) {
  return (
    <Link to={`/movie/${movie.id}`}><div className='card' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w342${movie.poster_path})`}}>
        <div className='card-details'>
        <h3>{movie.title}</h3>
        <p>{movie.vote_average}</p>
        </div>
    </div></Link>
  )
}

export default MovieCards