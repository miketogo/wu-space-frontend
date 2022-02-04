import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import 'moment/locale/ru'
import test_img from '../../assets/images/practic-card/test.png'


// import ReactPlayer from 'react-player'

import './Service.css'
import mainApi from '../../assets/utils/MainApi';
import PracticCard from './PracticCard/PracticCard';
import Preloader from '../Preloader/Preloader';


moment.locale('ru')


function Service(props) {

  let { id } = useParams();



  const [service, setService] = React.useState({});
  const [isPreloaderVisible, setPreloaderVisible] = React.useState(true);
  const [timeTable, setTimeTable] = React.useState([]);

  React.useEffect(() => {
    setPreloaderVisible(true)
    mainApi.getServices()
      .then((res) => {

        let services = res.data
        let filtered = services.filter((item) => {
          if (`${item.id}` === `${id}`) return true
          else return false
        })
        if (filtered && filtered.length > 0) {
          console.log(filtered[0])
          mainApi.getStaff({ staff_id: `${filtered[0].staff[0].id}` })
            .then((res) => {

              let formatedTimeTable = []
              if (props.timeTable && Object.keys(filtered[0]).length !== 0) {
                // let filtered = props.timeTable.filter((item) => {
                //   if (`${item.service_id}` === `${service.id}`) return true
                //   else return false
                // })
                props.timeTable.forEach(item => {
                  // console.log(item)
                  if (`${item.service_id}` === `${filtered[0].id}` && formatedTimeTable.length > 0 && formatedTimeTable.filter((elem) => {
                    if (elem.date === item.date.split(' ')[0]) return true
                    else return false
                  }).length === 1) {
                    formatedTimeTable = formatedTimeTable.map((elem) => {
                      if (elem.date === item.date.split(' ')[0]) {
                        return {
                          date: elem.date,
                          items: [
                            ...elem.items,
                            item
                          ]
                        }
                      } return {
                        date: elem.date,
                        items: elem.items,
                      }
                    })
                  }

                  else if (`${item.service_id}` === `${filtered[0].id}` && (formatedTimeTable.length === 0 || formatedTimeTable.filter((elem) => {
                    if (elem.date === item.date.split(' ')[0]) return true
                    else return false
                  }).length === 0)) {
                    console.log('d')
                    formatedTimeTable = [...formatedTimeTable, {
                      date: item.date.split(' ')[0],
                      items: [
                        item
                      ]
                    }]
                  }

                });

                console.log(formatedTimeTable)
                filtered[0].staff = res.data
                setService(filtered[0])
                setTimeTable(formatedTimeTable)
                setPreloaderVisible(false)
              }
            })
            .catch((err) => {
              console.log(err)
            })




          // console.log(filtered[0])

        }
        else {
          setService('NotFound')
        }

      })
      .catch((err) => {
        console.log(err)
      })



  }, [id, props.timeTable]);





  return (
    <div className="service">
      {!isPreloaderVisible ?
        <>
          <Link to={'/services'} className="service__heading">
            <svg className="service__arrow" width="136" height="30" viewBox="0 0 136 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.585785 13.5858C-0.195267 14.3668 -0.195267 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM136 13L2 13V17L136 17V13Z" fill="white" />
            </svg>
            <h2 className="service__title">Ко всем практикам</h2>
          </Link>
          {Object.keys(service).length !== 0 ?
            <>
              <div className='service__info'>
                <div className='service__image'>

                  {service && service.image_group && service.image_group.images && service.image_group.images.basic.path ?
                    <img className='service__image-img' src={service.image_group.images.basic.path} alt={service.booking_title} /> : <img className='service__image-img' src={test_img} alt={service.booking_title} />
                  }

                </div>
                <div className='service__texts'>
                  <h3 className='service__name'>{service.booking_title}</h3>
                  <p className='service__desc'>{service.comment && service.comment.split('/').length > 0 ? service.comment.split('/')[1] : ''}</p>
                </div>
              </div>
              {Object.keys(service).length !== 0 && service.staff ?
                <>
                  <p className='service__teaches'>Ведет практику:</p>
                  <Link to={`/provodniki/${service.staff.name}`} className="service__practics">{service.staff.name}</Link>
                </>
                : <></>}

            </> :
            <></>}

          {Object.keys(service).length !== 0 && timeTable.length !== 0 ? timeTable.map((item_by_dates, i) => (
            <>
              <div className="team-member__date">
                <p className="team-member__date-day-name">{moment(item_by_dates.date).format('dd')}</p>
                <p className="team-member__date-day-number">{moment(item_by_dates.date).format('D')}</p>
              </div>
              <div className="team-member__practic-cards">
                {
                  item_by_dates.items ? item_by_dates.items.map((item, i) => (
                    <PracticCard service={{
                      name: item.service.title,
                      duration: Math.floor(item.length / 60),
                      price: item.service.price_min,
                      img_link: item.service.image_url,
                      short_desc: item.service.comment.trim().split('/')[0] ? item.service.comment.trim().split('/')[0] : 'Нет описания',
                      desc: item.service.comment.trim().split('/')[1] ? item.service.comment.trim().split('/')[1] : 'Нет описания',
                      link: item.link,
                      capacity: `${item.capacity - item.records_count} из ${item.capacity}`,
                    }} date={`${item.date.split(' ')[0].split('-')[2]}.${item.date.split(' ')[0].split('-')[1]}.${item.date.split(' ')[0].split('-')[0]} / ${item.date.split(' ')[1].split(':')[0]}:${item.date.split(' ')[1].split(':')[1]} `} name={item.staff.name} />

                  )) :
                    <></>
                }

              </div>
            </>
          )) : !timeTable ?  <><p className='team-member__no-practic-cards'>Нет сеансов доступных для записи</p></> : <></>}

        </>
        : <Preloader />}



    </div>
  );
}

export default Service;
