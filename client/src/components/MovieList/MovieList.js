import Movie from '../Movie/Movie';
import {useState,useEffect} from 'react';
import axios from 'axios';

const showMovies = (movie) => {
  return(
    <div className='movie'>
      <Movie movie={movie} />
    </div>
  )
}
const MoviesList = () => {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      const res = await axios.get('http://localhost:9000/movies');
      setMovies(res.data);
    }
    fetchData(); 
  }, []);
    
  return ( <div>
    {movies.map(showMovies)}
    </div >
  )
}
export default MoviesList;