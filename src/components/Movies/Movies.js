import "./Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {demoMovies} from "../../utils/constants"
import Button from "../Button/Button";

// В этой секции для демонстрации стилей иконки сохраненных фильмов они реализованы как кнопки лайка

export default function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList movies={demoMovies} savedMoviesSection={false}/>  
            <div className="movies__more">
                <Button buttonType="more" titleButton="Ещё" />
            </div>
        </section>
    )
}

