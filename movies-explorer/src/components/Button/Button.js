import "./Button.css";
import userLogo from "../../images/icon__COLOR_icon-main.svg"

export default function Button ({buttonType, isBurgerClicked, onClickBurger, titleButton, isValid, onClick}) {
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
        logreg: (
            <button
                className="button button_type_logreg"
                type="submit"
                disabled={!isValid && true}
                aria-labelledby={titleButton}
                onClick={onClick}
            >
                {titleButton}
            </button>
        ),
        profile: (
            <button
                className="button button_type_profile"
                type="button"
                aria-labelledby={titleButton}
                onClick={onClick}
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
        ),
        more: (
            <button
                className="button button_type_more"
                type="button"
                aria-labelledby={titleButton}
            >
                {titleButton}
            </button>
        )
    }[buttonType];
}
