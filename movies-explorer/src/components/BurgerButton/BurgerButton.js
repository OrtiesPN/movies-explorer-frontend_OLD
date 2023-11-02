import "./BurgerButton.css";

export default function BurgerButton({isBurgerClicked, onClickBurger}) {
    return (
        <button
                className="burger__button"
                onClick={onClickBurger}
                type="button"
                aria-labelledby="Меню"
            >
                <div className={`burger__bar ${isBurgerClicked ? "burger__bar_clicked" : ""}`}></div>
                <div className={`burger__bar ${isBurgerClicked ? "burger__bar_clicked" : ""}`}></div>
                <div className={`burger__bar ${isBurgerClicked ? "burger__bar_clicked" : ""}`}></div>
        </button>
    )
    
};