import React from 'react';

import './Team.css'

import photo1 from '../../assets/images/team/1.png'
import photo2 from '../../assets/images/team/2.png'
import photo3 from '../../assets/images/team/3.png'
import photo4 from '../../assets/images/team/4.png'
import photo5 from '../../assets/images/team/5.png'
import { Link } from 'react-router-dom';

const team = [
    {
        name: 'Анастасия Тарасенко',
        photo: photo1,
        practics: [
            'Индивидуально',
            'Йога Нидра',
            'Energy shot',
            'Sleeping beauty',
            'Urban Zen',
            'Хатха-Йога'
        ],
        short_desc: 'Анастасия Тарасенко познакомилась с  йогой 16 лет назад, успев пройти за эти годы свой собственный путь становления...',
        desc: 'Анастасия Тарасенко познакомилась с  йогой 16 лет назад, успев пройти за эти годы свой собственный путь становления. Мастер прошла обучение в Open California Institute, а также в Школе йоги «Чатуранга» по направлениям «Построение последовательностей» и «Тичерс». Но именно личные трансформации помогли Анастасии стать очень чутким проводником, понимающим ваши сложности и ограничения. Важная часть в практиках Насти отводится физическому аспекту. Её авторская практика состоит из набора техник разных направлений для максимальной проработки вашего ментального, духовного и физического состояния.‌'
    },

    {
        name: 'Татьяна Трещалова',
        photo: photo2,
        practics: 'Индивидуальная звукотерапевтическая гонг-сессия, Шампанское путешествие, Ракета желаний, Гонг+Pane, Кундалини-Йога + Гонг + Йога-Нидра',
        short_desc: 'Татьяна Трещалова – Мастер кундалини-йоги школы Йоги Бхаджана и ученица Карта Сингха в Kundalini Research Institute...',
        desc: ''
    },

    {
        name: 'Александр Демидов',
        photo: photo3,
        practics: 'Звуковая медитация, Шаманское Дыхание, Мастер-класс по поющим чашам, Индивидуально',
        short_desc: 'Александр Демидов – Мастер звукотерапии и создатель Практики Духовных Колоколов. Познакомился с йогой совсем ребенком...',
        desc: ''
    },

    {
        name: 'Ульяна Сотникова',
        photo: photo4,
        practics: [
            'АкроЙога',
        ],
        short_desc: 'Ульяна Сотниковa –  сертифицированный преподаватель международной школы Акройоги...',
        desc: ''
    },

    {
        name: 'Александр Кириченко',
        photo: photo5,
        practics: [
            'Аромадиагностика',
            'Нео-тантра',
        ],
        short_desc: 'Александр Кириченко – аромапсихолог, специалист восточных практик, тантры и медитаций...',
        desc: ''
    },
]

function Team(props) {
    return (
        <div className="team">
            <h2 className="team__title">Наши проводники</h2>
            <div className="team__cards">
                {team.map((item, i) => (
                    <div className="team__card" key={`team-card-${i}`}>
                        <img className="team__card-img" src={item.photo} alt={item.name} />
                        <div className="team__card-texts">
                            <h3 className="team__card-name">{item.name}</h3>
                            <p className="team__card-teaches">Ведет практики:</p>
                            <p className="team__card-practics">
                                {Array.isArray(item.practics) ? item.practics.map((practic, practic_i) => (
                                    <>
                                        <span key={`practic-${practic_i}-for-team-card-${i}`} className="team__card-practics-nowarp">{`${practic}${item.practics.length - 1 === practic_i ? '': ','}`}</span>
                                        <span> </span>
                                    </>
                                )) : item.practics}
                            </p>
                            <p className="team__card-desc">{item.short_desc}</p>
                            <Link className="team__card-btn" to='/'>
                                <p className="team__card-btn-text">Подробнее</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
