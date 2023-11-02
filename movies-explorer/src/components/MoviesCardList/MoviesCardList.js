import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({movies, savedMoviesSection}) {
    return (
        <ul className="elements">
                {movies.map(({id, isSaved, ...rest}) => (
                <MoviesCard key={id} savedMoviesSection={savedMoviesSection}
                {...rest}/>
                ))}
            </ul>
    )
}