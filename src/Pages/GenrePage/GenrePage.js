import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllMoviesByGenre, selectLists } from '../../Slices/MovieListSlice';
import { motion } from 'framer-motion'
import { pageVariants } from '../../Util/PageVariants';
import MovieCards from '../../Util/MovieCards';

function GenrePage() {
    const dispatch = useDispatch();
    const {id,name} = useParams();
    const genres = useSelector(selectLists).allGenre;

    useEffect(() => {
        dispatch(getAllMoviesByGenre(id))
    }, [dispatch, id])
  return (
    <motion.div variants={pageVariants} initial='initial' exit='exit' animate='animate'>
    <h2 className='page-title'>{name}</h2>
    <div className='page-div'>
        {genres && genres.map((movie) => {
            return <MovieCards movie={movie} key={movie.id}/>
        })}
    </div>
    </motion.div>
  )
}

export default GenrePage