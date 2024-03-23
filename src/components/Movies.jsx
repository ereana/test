
import { Movie } from "./Movie";
function Movies(props){
    const{movies=[]}=props;
    return (
    <div className="movies">
        {movies.length ?(
        movies.map((movie)=>
            <Movie key={movie.imdbID}{...movie}/>)
        ):(
            <h4>Not found. Can you repeat?</h4>
        )}
    </div>
    );
}
export{Movies};
