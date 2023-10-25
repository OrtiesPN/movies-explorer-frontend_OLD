import { Link, useLocation } from "react-router-dom";
import "./Header.css"
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

export default function Header({isLoggedIn, isBurgerClicked, onClickBurger,}) {
  const location = useLocation();
    return(
        <header className={`header ${location.pathname === '/' ? "header_theme_gray" : ""} ${isLoggedIn? "header_type_user" : ""}`}> 
          <Link to="/" className="header__link">
            <img
              src={logo}
              alt="логотип Мovies"
              className="header__logo"
            />
          </Link>
          <Navigation isLoggedIn ={isLoggedIn} isBurgerClicked = {isBurgerClicked} onClickBurger={onClickBurger} />
        </header>
    )
}