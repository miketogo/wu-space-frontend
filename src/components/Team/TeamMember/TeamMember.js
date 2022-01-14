import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import 'moment/locale/ru'

import ReactPlayer from 'react-player'

import './TeamMember.css'
import PracticCard from './PracticCard/PracticCard';





function TeamMember(props) {
  let { name } = useParams();

  const [member, setMember] = React.useState(null);


  const [isButtonClicked, setButtonClicked] = React.useState(false);

  const [dateNow, setDateNow] = React.useState('');
  const [dayNow, setDayNow] = React.useState('');
  const [dayNumberNow, setDayNumbeNow] = React.useState('');



  React.useEffect(() => {
    var date = moment()
    moment.locale('ru')
    setDayNow(date.tz("Europe/Moscow").format('dd'))
    setDayNumbeNow(date.tz("Europe/Moscow").format('D'))
    setDateNow(date.tz("Europe/Moscow").format('D.MM.YYYY'))
  }, []);

  React.useEffect(() => {
    console.log(dayNow, dateNow, dayNumberNow)
  }, [dateNow, dayNow, dayNumberNow]);

  React.useEffect(() => {

    let member = props.team.filter((item) => {
      if (item.link === name) return true
      else return false
    })
    if (member.length === 1) setMember(member[0])
    else setMember(null)
  }, [props.team, name])

  return (
    <div className="team-member">
      <Link className="team-member__heading" to='/provodniki'>
        <svg className="team-member__arrow" width="136" height="30" viewBox="0 0 136 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.585785 13.5858C-0.195267 14.3668 -0.195267 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM136 13L2 13V17L136 17V13Z" fill="white" />
        </svg>
        <h2 className="team-member__title">Вернутся к проводникам</h2>
      </Link>
      {member ?
        <>
          <div className='team-member__info'>
            <div className='team-member__video'>
              {member.video ?
                <button className={`team-member__button ${isButtonClicked ? 'team-member__button_playing' : ''}`} onClick={() => setButtonClicked(!isButtonClicked)}>
                  {isButtonClicked ?
                    <>
                      <svg className='team-member__button-pause' width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className='team-member__button-pause-rect' width="6" height="46" rx="3" />
                        <rect className='team-member__button-pause-rect' x="30" width="6" height="46" rx="3" />
                      </svg>
                    </> :
                    <>
                      <svg className='team-member__button-play' width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='team-member__button-play-path' d="M39.1405 25.3044L5.49072 44.4136C4.49076 44.9814 3.25 44.2592 3.25 43.1092L3.25 4.89076C3.25 3.74081 4.49076 3.01855 5.49073 3.58642L39.1405 22.6957C40.1529 23.2706 40.1529 24.7294 39.1405 25.3044Z" strokeWidth="5" />
                      </svg>
                      <p className='team-member__button-text'>Смотреть<br />Show real</p>
                    </>
                  }
                </button> : <></>}
              {member.video ?
                <ReactPlayer className='team-member__video-player'

                  volume={0.4}

                  url={member.video}
                  playsInline={true}
                  width="100%"
                  height="100%"
                  playing={isButtonClicked}
                  onError={error => console.log(error)}
                />
                :
                <img className='team-member__no-video' src={member.photo} alt={member.name} />
              }

            </div>
            <div className='team-member__texts'>
              <h3 className='team-member__name'>{member.name}</h3>
              <p className='team-member__desc'>{member.desc}</p>
            </div>
          </div>
          <p className='team-member__teaches'>Ведет практики:</p>
          <p className="team-member__practics">
            {Array.isArray(member.practics) ? member.practics.map((practic, practic_i) => (
              <>
                <span key={`practic-${practic_i}`} className="team-member__practics-nowarp">{`${practic}${member.practics.length - 1 === practic_i ? '' : ','}`}</span>
                <span> </span>
              </>
            )) : member.practics}
          </p>
        </> :
        <></>}
      <div className="team-member__date">
        <p className="team-member__date-day-name">{dayNow}</p>
        <p className="team-member__date-day-number">{dayNumberNow}</p>
      </div>
      <div className="team-member__practic-cards">
        <PracticCard dateNow={dateNow} name={member ? member.name : undefined}/>
        <PracticCard dateNow={dateNow} name={member ? member.name : undefined}/>
        <PracticCard dateNow={dateNow} name={member ? member.name : undefined}/>
      </div>

    </div>
  );
}

export default TeamMember;
