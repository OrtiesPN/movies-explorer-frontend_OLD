import './Input.css';

export default function Input ({inputType, inputLabel, values, isInputValid, onEdit}) {
    return {
        logreg: (
            <label className='input__label_logreg'>
                {inputLabel === "name" ? "Имя" : inputLabel === "email" ? "E-mail" : "Пароль" }
                <input
                    className={`input input_type_logreg ${
                        isInputValid === undefined || isInputValid
                          ? ""
                          : "input_type_logreg_error"
                      }`}
                    name={`user_${inputLabel}`}
                    type={inputLabel === "name" ? "text" : inputLabel}
                    required
                    value={values}
                    readOnly  // dev markup option
                >
                </input>
                <span className={`input__error ${
                        isInputValid === undefined || isInputValid
                          ? ""
                          : "input__error_active"
                      }`}>
                    Что-то пошло не так...
                </span>
            </label>
        ),
        edit: (
            <label className='input__label_profile'>
                {inputLabel === "name" ? "Имя" : "E-mail"}
                <input 
                    className='input input_type_profile'
                    name={`edit_${inputLabel}`}
                    type={inputLabel === "name" ? "text" : inputLabel}
                    required
                    value={values}
                    disabled={!onEdit}
                >
                </input>
            </label>
        ),
    }[inputType] 
}