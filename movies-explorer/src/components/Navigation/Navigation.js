import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "./Navigation.css";
import Button from "../Button/Button";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Navigation(isLoggedIn) {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const navigationGuest = function() {
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li><Link to="/signup" className="navigation__link">Регистрация</Link></li>
                    <li>
                        <Link to="/signin" >
                            <Button type="signinHeader"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    };

    const navigationUser = function() {
        return (
            <nav className="navigation">
                <ul className="navigation__list navigation__list_user">
                    <li><Link to="/movies" className="navigation__link">Фильмы</Link></li>
                    <li><Link to="/saved-movies" className="navigation__link">Сохраненные фильмы</Link></li>
                    <li>
                        <Link to="/profile" >
                            {isMobile ? <BurgerMenu /> : <Button type="accountHeader" /> }
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }

    return(
        <>
            {!isLoggedIn ? navigationGuest : navigationUser}
        </>
    )
}