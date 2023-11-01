import "./Burger.css";

export default function Burger({isBurgerClicked, onClickBurger}) {
    <button
                className="burger__button"  //{`burger__button burger__button_${isBurgerClicked ? "close" : "menu"}`}
                onClick={onClickBurger}
                type="button"
                aria-labelledby="Меню"
            >
                <div className={`burger__bar ${isBurgerClicked ? "burger__bar_clicked" : ""}`}></div>
                <div className={`burger__bar ${isBurgerClicked ? "burger__bar_clicked" : ""}`}></div>
                <div className={`burger__bar ${isBurgerClicked ? "burger__bar_clicked" : ""}`}></div>
            </button>
};