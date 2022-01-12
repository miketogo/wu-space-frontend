import React from 'react';

import './Team.css'


import { Link } from 'react-router-dom';



function Team(props) {
    return (
        <div className="team">
            <h2 className="team__title">Наши проводники</h2>
            <div className="team__cards">
                {props.team.map((item, i) => (
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
                            <Link className="team__card-btn" to={`/provodniki/${item.link}`}>
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
