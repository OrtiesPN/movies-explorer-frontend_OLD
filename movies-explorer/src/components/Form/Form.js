import "./Form.css";
import Button from "../Button/Button";

export default function Form({
  type,
  name,
  title,
  titleButton,
  isValid = true,
  onSubmit,
  children,
}) {
  return (
    <form className={`form form__${type}`} id={`${name}-form`} onSubmit={onSubmit}>
        <h2 className="form__title">{title}</h2>
        {children}
        <Button type={type} titleButton={titleButton} isValid={isValid} />
      </form>
  )
}
      