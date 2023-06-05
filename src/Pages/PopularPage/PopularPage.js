import './PopularPage.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies, selectLists } from '../../Slices/MovieListSlice'
import MovieCards from '../../UtilComponents/MovieCards';

function PopularPage() {
  const dispatch = useDispatch();
  const popularList = useSelector(selectLists).popular;
  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])
  return (
    <div className='popular-page-div'>
      {popularList && popularList.map(movie => {
        return(
          <MovieCards movie={movie} key={movie.id} />
        )
      })}
    </div>
  )
}

export default PopularPage