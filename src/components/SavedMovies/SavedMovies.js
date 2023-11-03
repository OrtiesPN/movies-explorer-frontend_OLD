import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {demoSavedMovies} from "../../utils/constants"
// import Button from "../Button/Button";

// В этой секции для демонстрации стилей иконки сохраненных фильмов они реализованы как кнопки лайка

export default function SavedMovies() {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList movies={demoSavedMovies} savedMoviesSection={true}/>  
            {/* <div className="movies__more">
                <Button buttonType="more" titleButton="Ещё" />
            </div> */}
        </section>
    )
}