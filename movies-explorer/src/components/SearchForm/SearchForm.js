import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
    const [searchShort, setSearchShort] = useState(true);

    function handleShort(evt) {
        evt.preventDefault();
        setSearchShort(!searchShort);
    }

    function handleSearch(evt) {
        evt.preventDefault();
    }

    return (
        <form className="search">
            <div className="search__form-container">
                <label className="search__label">
                    <div className="search__input-icon">
                        <input
                            className="search__input"
                            type="search"
                            name="all-movie"
                            placeholder="Фильм"
                        >
                        </input>
                    </div>
                </label>
                <div className="search__button-block">
                    <button
                        className="search__go"
                        type="submit"
                        onClick={handleSearch}
                    >
                    </button>
                    
                </div>
                <div className="search__options">
                        <button
                            className={`search__thumb search__thumb${searchShort? "_active" : "_inactive"}`}
                            type="button"
                            onClick={handleShort}
                        >
                        </button>
                        <span className="search__option">Короткометражки</span>
                    </div>
            </div> 
        </form>
    )
}