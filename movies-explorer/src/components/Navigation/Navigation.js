import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "./Navigation.css";
import Button from "../Button/Button";
import { useState } from 'react';

export default function Navigation({ isLoggedIn, isBurgerClicked, onClickBurger,}) {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const activeLink = `navigation__link_active_${isBurgerClicked ? "mobile" : "desktop"}`;

    

    return(
        <>
            {!isLoggedIn ? 
            (
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li><Link to="/signup" className="navigation__link navigation__link_guest">Регистрация</Link></li>
                        <li>
                            <Link to="/signin" className="navigation__link navigation__link_guest">
                                <Button type="signinHeader"/>
                            </Link>
                        </li>
                    </ul>
            </nav>
            ) : isMobile ? (
                <>
                    <Button type="burger" isBurgerClicked={isBurgerClicked} onClickBurger={onClickBurger}/>
                    <nav className={`navigation navigation_type_mobile navigation_type_mobile${isBurgerClicked? "_visible" : "" }`} onClick={onClickBurger}>
                        <ul className="navigation__list navigation__list_user_mobile" onClick={(evt=> evt.stopPropagation())}>
                        <li className="navigation__item_mobile">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? `navigation__link navigation__link_mobile ${activeLink}` : "navigation__link navigation__link_mobile"}
                                    onClick={onClickBurger}
                                    >
                                    Главная
                                </NavLink>
                            </li>
                            <li className="navigation__item_mobile">
                                <NavLink
                                    to="/movies"
                                    className={({ isActive }) => isActive ? `navigation__link navigation__link_mobile ${activeLink}` : "navigation__link navigation__link_mobile"}
                                    onClick={onClickBurger}
                                    >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__item_mobile">
                                <NavLink
                                to="/saved-movies"
                                className={({ isActive }) => isActive ? `navigation__link navigation__link_mobile ${activeLink}` : "navigation__link navigation__link_mobile"}
                                onClick={onClickBurger}
                                >
                                    Сохраненные фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__item_mobile">
                                <NavLink
                                to="/profile"
                                className="navigation__link"
                                onClick={onClickBurger}
                                >
                                    <Button type="accountHeader" /> 
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </>
                ) : (
                    <nav className="navigation">
                        <ul className="navigation__list navigation__list_user_desktop">
                            <li className="navigation__item">
                                <NavLink to="/movies" className={({ isActive }) => isActive ? `navigation__link navigation__link_logged ${activeLink}` : "navigation__link navigation__link_logged"}>
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to="/saved-movies" className={({ isActive }) => isActive ? `navigation__link navigation__link_logged ${activeLink}` : "navigation__link navigation__link_logged"}>
                                    Сохраненные фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to="/profile" className="navigation__link" >
                                    <Button type="accountHeader" /> 
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>
    )
}