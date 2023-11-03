import "./Form.css";
import Button from "../Button/Button";

export default function Form({
  buttonType,
  name,
  title,
  titleButton,
  isValid = true,
  onSubmit,
  children,
}) {
  return (
    <form
      className="form"
      id={`${name}-form`}
      onSubmit={onSubmit}
    >
        <h2 className="form__title">{title}</h2>
        {children}
        <div className="form__button-wrapper">
          <Button buttonType={buttonType} titleButton={titleButton} isValid={isValid} />
        </div>
      </form>
  )
}
      