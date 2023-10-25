import "./NavTab.css";

export default function NavTab() {
    return (
        <section className="navtab">
            <nav>
                <ul className="navtab__list">
                    <li>
                        <a className="navtab__anchorlink" href="#">О проекте</a>  
                    </li>
                    <li>
                        <a className="navtab__anchorlink" href="#">Технологии</a>  
                    </li>
                    <li>
                        <a className="navtab__anchorlink" href="#">Студент</a>  
                    </li>
                </ul>
            </nav>
        </section>
    )
};
