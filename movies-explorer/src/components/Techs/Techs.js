import "./Techs.css";

export default function Techs() {
    return (
        <section className="techs">
            <div className="techs__wrapper">
                <h2 className="techs__title">Технологии</h2>
                <p className="techs__motto">7 технологий</p>
                <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__technologies">
                    <li className="techs__item">HTML</li>
                    <li className="techs__item">CSS</li>
                    <li className="techs__item">JS</li>
                    <li className="techs__item">React</li>
                    <li className="techs__item">Git</li>
                    <li className="techs__item">Express.js</li>
                    <li className="techs__item">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}