import "./Button.css";
import userLogo from "../../images/icon__COLOR_icon-main.svg"

export default function Button ({type, isBurgerClicked, onClickBurger, titleButton, isValid}) {
    return {
        signinHeader: (
            <button
                className="button button_type_header-signin"
                type="button"
                aria-labelledby="Войти"
            >
                Войти
            </button>
        ),
        accountHeader: (
            <button
                className="button button_type_header-user"
                type="button"
                aria-labelledby="Аккаунт"
            >
                <img src={userLogo} alt="User" className="button__logo button__logo_user"/>
                Аккаунт
            </button>
        ),
        burger: (
            <button
                className={`button button_type_burger button_type_burger_${isBurgerClicked ? "close" : "menu"}`}
                onClick={onClickBurger}
                type="button"
                aria-labelledby="Меню"
            >
                <div className={`button__bar_burger ${isBurgerClicked ? "button__bar_burger_clicked" : ""}`}></div>
                <div className={`button__bar_burger ${isBurgerClicked ? "button__bar_burger_clicked" : ""}`}></div>
                <div className={`button__bar_burger ${isBurgerClicked ? "button__bar_burger_clicked" : ""}`}></div>
            </button>
        ),
        logreg: (
            <button
                className={`button button_type_login-register ${
                    !isValid && "button_type_login-register_disabled"}
                  `}
                type="submit"
                aria-labelledby={titleButton}
            >
                {titleButton}
            </button>
        ),
        editUser: (
            <button
                className="button button_type_edit"
                type="submit"
                aria-labelledby={titleButton}
            >
                {titleButton}
            </button>
        ),
        signout: (
            <button
                className="button button_type_signout"
                type="button"
                aria-labelledby={titleButton}
            >
                {titleButton}
            </button>
        )
    }[type];
}

// <img src={userLogo} alt="User" className="button__logo"/>
