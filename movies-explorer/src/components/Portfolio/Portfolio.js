import "./Portfolio.css";
import photo from '../../images/Niki.jpg';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                <h2 className="portfolio__title" id="student">Студент</h2>
                <article className="portfolio__article">
                    <div className="portfolio__textblock">
                        <h3 className="portfolio__name">Никита</h3>
                        <p className="portfolio__summary">Фронтенд-разработчик, 32 года</p>
                        <p className="portfolio__about">Здесь обязательно будет крайне вдохновляющий рассказ о себе, любимой бабушке и кошках. 
                        О том как я жил и работал непонятно где и кем, а теперь хочу стать большим сеньором - ̶п̶о̶м̶и̶д̶о̶р̶о̶м̶. 
                        Без сомнения, добавится параграф о моем светлом будущем через 5 лет и об опыте духовного просвещения в горах Тибета.</p>
                        <a className="portfolio__link portfolio__link_git"  href="https://github.com/OrtiesPN"  target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <img className="portfolio__photo" src={photo} alt="Портрет студента"/>
                </article>
                <h3 className="portfolio__projects">Портфолио</h3>
                <ul className="portfolio__links">
                    <li className="portfolio__item">
                        <a className="portfolio__link portfolio__link_project" href="https://github.com/OrtiesPN/how-to-learn"  target="_blank" rel="noreferrer">Статичный сайт</a>
                    </li>
                    <li className="portfolio__item">
                        <a className="portfolio__link portfolio__link_project" href="https://github.com/OrtiesPN/russian-travel"  target="_blank" rel="noreferrer">Адаптивный сайт</a>
                    </li>
                    <li className="portfolio__item">
                        <a className="portfolio__link portfolio__link_project" href="https://github.com/OrtiesPN/react-mesto-api-full-gha"  target="_blank" rel="noreferrer">Одностраничное приложение</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}