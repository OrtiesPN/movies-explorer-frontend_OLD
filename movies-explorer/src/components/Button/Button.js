import "./Button.css";
import userLogo from "../../images/icon__COLOR_icon-main.svg"

export default function Button (type) {
    return {
        signinHeader: (
            <button
                className="button button_type_header-login"
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
                <img src={userLogo} alt="User" className="button__logo"/>
                Аккаунт
            </button>
        )
    }[type];
}