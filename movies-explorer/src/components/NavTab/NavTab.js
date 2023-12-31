import "./NavTab.css";

export default function NavTab() {
    return (
        <section className="navtab">
            <nav>
                <ul className="navtab__list">
                    <li className="navtab__item">
                        <a className="navtab__anchorlink" href="#about">О проекте</a>  
                    </li>
                    <li className="navtab__item">
                        <a className="navtab__anchorlink" href="#techs">Технологии</a>  
                    </li>
                    <li className="navtab__item">
                        <a className="navtab__anchorlink" href="#student">Студент</a>  
                    </li>
                </ul>
            </nav>
        </section>
    )
};
