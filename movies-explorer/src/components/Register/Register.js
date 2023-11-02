import { Link } from "react-router-dom";
import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import logo from "../../images/logo.svg";

export default function Register () {
    function handleSubmit(evt) {
        evt.preventDefault();
    }
    return (
        <section className="register">
            <div className="register__wrapper">
                <Link to="/" className="register__home">
                    <img
                    src={logo}
                    alt="логотип Мovies"
                    className="register__logo"
                    />
                </Link>
                <Form
                    buttonType={"logreg"}
                    name={"register"}
                    title={"Добро пожаловать!"}
                    titleButton={"Зарегистрироваться"}
                    isValid={false}
                    onSubmit={handleSubmit}
                >
                    <fieldset className="register__fieldset">
                        <Input inputType={"logreg"} values={"Никита"} inputLabel={"name"} isInputValid={true} />
                        <Input inputType={"logreg"} values={"example@email.com"} inputLabel={"email"} isInputValid={true}/>
                        <Input inputType={"logreg"} values={"password"} inputLabel={"password"} isInputValid={false}/>
                    </fieldset>
                </Form>
                <p className="register__caption">Уже зарегистрированы? <Link to="/signin" className="register__signin">Войти</Link></p>
            </div>
        </section>
    )
}