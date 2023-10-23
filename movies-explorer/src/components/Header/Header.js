import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

export default function Header(isLoggedIn, type, isLaptop) {
  const location = useLocation();

    return(
        <header className={`header ${location.pathname === '/' ? "header_theme_gray" : ""}`}>
          <Link to="/">
            <img
              src={logo}
              alt="логотип Мovies"
              className="header__logo"
            />
          </Link>
          <Navigation isLoggedIn ={isLoggedIn}/>
        </header>
    )
}