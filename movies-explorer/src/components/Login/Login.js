import { Link } from "react-router-dom";
import "./Login.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import logo from "../../images/logo.svg";

export default function Login () {
    function handleSubmit(evt) {
        evt.preventDefault();
    }
    return (
        <section className="login">
            <div className="login__wrapper">
                <Link to="/" className="login__home">
                    <img
                        src={logo}
                        alt="логотип Мovies"
                        className="login__logo"
                    />
                </Link>
                <Form
                    buttonType={"logreg"}
                    name={"login"}
                    title={"Рады видеть!"}
                    titleButton={"Войти"}
                    isValid={"true"}
                    onSubmit={handleSubmit}
                >
                    <fieldset className="register__fieldset">
                        <Input inputType={"logreg"} values={""} inputLabel={"email"} isInputValid={true}/>
                        <Input inputType={"logreg"} values={""} inputLabel={"password"} isInputValid={true}/>
                    </fieldset>
                </Form>
                <p className="login__caption">Ещё не зарегистрированы? <Link to="/signup" className="login__signup">Регистрация</Link></p>
            </div>
        </section>
    )
}