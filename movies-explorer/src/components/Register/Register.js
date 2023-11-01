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
                type={"logreg"}
                name={"register"}
                title={"Добро пожаловать!"}
                titleButton={"Зарегистрироваться"}
                isValid={false}
                onSubmit={handleSubmit}
            >
                <Input type={"logreg"} values={"Никита"} inputLabel={"name"} isInputValid={true} />
                <Input type={"logreg"} values={"example@email.com"} inputLabel={"email"} isInputValid={true}/>
                <Input type={"logreg"} values={"password"} inputLabel={"password"} isInputValid={false}/>
            </Form>
            <p className="register__caption">Уже зарегистрированы? <Link to="/signin" className="register__signin">Войти</Link></p>
            </div>
        </section>
    )
}