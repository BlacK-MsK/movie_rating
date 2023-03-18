import "./Movie.css"

const Movie = ({movie})=> {
  return(
    <div className="card"> 
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title}/>
      <p style= {{color: "gold"}}>Rating: {movie.rating}</p>
    </div>    
)}

export default Movie;