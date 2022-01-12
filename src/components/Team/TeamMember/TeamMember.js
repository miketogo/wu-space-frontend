import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './TeamMember.css'





function TeamMember(props) {
    let { name } = useParams();

    const [member, setMember] = React.useState(null);

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
                                        <span key={`practic-${practic_i}`} className="team-member__practics-nowarp">{`${practic}${member.practics.length - 1 === practic_i ? '': ','}`}</span>
                                        <span> </span>
                                    </>
                                )) : member.practics}
                            </p>
                </> :
                <></>}

        </div>
    );
}

export default TeamMember;
