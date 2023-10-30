import './Input.css';

export default function Input ({type, inputLabel, values}) {
    return {
        logreg: (
            <label>
                <input>
                </input>
                <span>
                    Ошибка
                </span>
            </label>
        ),
        editUser: (
            <label className='input__label_edit-user'>
                {inputLabel}
                <input 
                    className='input inpunt_type_edit-user'
                    name={inputLabel === "Имя" ? "user_name" : inputLabel === "E-mail" ? "user-email" : "user-password" }
                    type={inputLabel === "Имя" ? "text" : inputLabel === "E-mail" ? "email" : "password" }
                    placeholder={inputLabel === "Имя" ? "Имя" : inputLabel === "E-mail" ? "E-mail" : "Пароль" }
                    required
                    value={values}
                    readOnly
                >
                </input>
            </label>
        ),
        search: (
            <label>
                <input>
                </input>
            </label>
        ),}[type] 
}