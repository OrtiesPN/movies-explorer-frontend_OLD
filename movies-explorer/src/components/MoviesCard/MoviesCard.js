import "./MoviesCard.css"
import { useState} from "react";

export default function MoviesCard( props ) {
  const [isLiked, setIsLiked] = useState();

  function handleLikeClick() {
    if (isLiked) {
        setIsLiked(false)
    } else {
        setIsLiked(true)
      }
    }
  
  return (
    <li className="card">
        <a href={props.trailerLink} className="card__link" target="_blank" rel="noreferrer">
            <img src={props.image} alt={props.nameEN} className="card__image" />
        </a>      
        <div className="card__caption">
            <div className="card__info">
                <h2 className="card__title">{props.nameRU}</h2>
                <span className="card__duration">{`${(props.duration - (props.duration % 60)) / 60}ч${props.duration % 60}м`}</span>
            </div>
            <button
                className={props.savedMoviesSection ? "card__button_delete" : `card__button card__button${isLiked ? "_active" : "_inactive"}`}
                type="button"
                aria-label="В коллекцию"
                onClick={handleLikeClick}
            />
        </div>
    </li>
  );
}