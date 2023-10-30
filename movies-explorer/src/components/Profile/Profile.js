import { Link } from "react-router-dom";
import "./Profile.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Profile ({user, isLoggedIn}) {
    function handleSubmit(evt) {
        evt.preventDefault();
    }
    return (
        <section className="profile">
            {/* <h2 className="profile__title">{`Привет ${user.name}!`}</h2> */}
            <Form
                type={"editUser"}
                name={"account"}
                title={`Привет, ${user.name}!`}
                titleButton={"Редактировать"}
                isValid={"true"}
                onSubmit={handleSubmit}
            >
                <Input type={"editUser"} values={user.name} inputLabel={"Имя"}/>
                <Input type={"editUser"} values={user.email} inputLabel={"E-mail"}/>
            </Form>
            <Button type={"signout"} titleButton={"Выйти из аккаунта"} />
        </section>
    )
}