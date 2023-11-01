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
    <form className={`form form_type_${type}`} id={`${name}-form`} onSubmit={onSubmit}>
        <h2 className={`form__title form__title_${type}`}>{title}</h2>
        {children}
        <Button type={type} titleButton={titleButton} isValid={isValid} />
      </form>
  )
}
      