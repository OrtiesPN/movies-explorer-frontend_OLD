import "./Footer.css";

export default function Footer() {
    return (
        <section className="footer">
            <h4 className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <nav className="footer__bar">
                <p className="footer__copyright">© {new Date().getFullYear()}</p>
                <ul className="footer__links">
                    <li className="footer__item">
                        <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}