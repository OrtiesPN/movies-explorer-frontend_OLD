import { Link } from "react-router-dom";
import "./Profile.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";

export default function Profile ({user, onSignout}) {
    const [isOnEdit, setIsOnEdit] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handleEdit(evt) {
        evt.preventDefault();
        setIsOnEdit(true);
    }

    function resetEdit(evt) {
        evt.preventDefault();
        setIsOnEdit(false);
    }

    return (
        <section className="profile">
            <form
                className="profile__form"
                name="account"
                id="account-form"
                onSubmit={handleSubmit}
                isValid={true}
            >
                <h2 className="profile__title">Привет, {user.name}!</h2>
                <fieldset className="profile__fieldset">
                    <Input inputType={"edit"} values={user.name} inputLabel={"name"} onEdit={isOnEdit}/>
                    <div className="profile__inputdivider"></div>
                    <Input inputType={"edit"} values={user.email} inputLabel={"email"} onEdit={isOnEdit}/>
                </fieldset>
                {!isOnEdit ? (
                    <div className="profile__buttons">
                        <Button buttonType={"profile"} titleButton={"Редактировать"} isValid={true} onClick={handleEdit} />
                        <Link to="/" className="profile__signout" onClick={onSignout}>Выйти из аккаунта</Link>
                    </div>
                    ) : (
                    <div className="profile__buttons">
                        <Button buttonType={"logreg"} titleButton={"Сохранить"} isValid={true} onClick={handleSubmit} />
                        <Button buttonType={"profile"} titleButton={"Отменить редактирование"} isValid={true} onClick={resetEdit} />
                    </div> 
                    )}
            </form>
        </section>
    )


}