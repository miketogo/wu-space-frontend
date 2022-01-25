import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ru'

import './Services.css'
import ServiceCard from './ServiceCard/ServiceCard';
import ServicePopup from './ServicePopup/ServicePopup';
moment.locale('ru')

// const types = [
//   'Все',
//   'Тело',
//   'Опыт',
//   'Звук',
//   'Курсы'
// ]

// const trainers = [
//   'Любой',
//   'Анастасия Тарасенко',
//   'Александр Демидов',
//   'Ульяна Сотникова',
//   'Александр Рышков',
//   'Александр Кириченко',
//   'Александр Демидов',
// ]

function Services(props) {



  const [timeTable, setTimeTable] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [trainers, setTrainers] = React.useState([]);

  React.useEffect(() => {
    //  ele = [
    //    {
    //      date: dsd,
    //      items[]
    //    }
    //  ]
    let types = ['Все']
    let trainers = [{ name: 'Любой', types: ['Все'] }]
    let formatedTimeTable = []
    if (props.timeTable) {
      console.log(props.timeTable)
      props.timeTable.forEach(item => {
        // console.log(item)
        if (formatedTimeTable.length > 0 && formatedTimeTable.filter((elem) => {
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

        else if (formatedTimeTable.length === 0 || formatedTimeTable.filter((elem) => {
          if (elem.date === item.date.split(' ')[0]) return true
          else return false
        }).length === 0) {
          console.log('d')
          formatedTimeTable = [...formatedTimeTable, {
            date: item.date.split(' ')[0],
            items: [
              item
            ]
          }]
        }

      });
      props.timeTable.forEach(item => {
        // console.log(item)
        if (types.length === 0 || types.filter((elem) => {
          if (elem === item.service.category.title) return true
          else return false
        }).length === 0) {
          console.log('d')
          types = [...types, item.service.category.title]
        }

      });
      props.timeTable.forEach(item => {
        // console.log(item)
        if (trainers.length === 0 || trainers.filter((elem) => {
          if (elem.name === item.staff.name) return true
          else return false
        }).length === 0) {
          let typesByTrainer = ['Все']
          // props.timeTable.forEach(item => {
          //   // console.log(item)
          //   if (typesByTrainer.length === 0 || typesByTrainer.filter((elem) => {
          //     if (elem === item.service.category.title && item.staff.name) return true
          //     else return false
          //   }).length === 0) {
          //     console.log('d')
          //     typesByTrainer = [...typesByTrainer, item.service.category.title]
          //   }

          // });
          props.timeTable.forEach(newItem => {
            if (typesByTrainer.filter((elem) => {
              if (elem !== newItem.service.category.title && newItem.staff.name !== item.staff.name) return true
              else return false
            }).length === 0) {
              if (typesByTrainer.filter((tbt) => {
                if (tbt === newItem.service.category.title) return true
                else return false
              }).length === 0) {
                typesByTrainer = [...typesByTrainer, newItem.service.category.title]
              }

            }
          })
          console.log('d')
          trainers = [...trainers, { name: item.staff.name, types: typesByTrainer }]
        }

      });
      // var date = moment()
      // moment.locale('ru')
      setTypes(types)
      console.log(trainers)
      setTrainers(trainers)
      setTimeTable(formatedTimeTable.slice(0, 9))
    }

  }, [props.timeTable]);




  const [selectedType, setSelectedType] = React.useState('Все');
  const [selectedTypeOpened, setSelectedTypeOpened] = React.useState(false);

  const [selectedTrainer, setSelectedTrainer] = React.useState('Любой');
  const [selectedTrainerOpened, setSelectedTrainerOpened] = React.useState(false);

  const [selectedService, setSelectedService] = React.useState(null);


  const [filteredTimeTable, setFilteredTimeTable] = React.useState([]);

  React.useEffect(() => {
    console.log(selectedTrainer, selectedType)
    if (timeTable) {

      if (selectedType === 'Все' && selectedTrainer === 'Любой') {
        setFilteredTimeTable(timeTable)
      }

      else if (selectedType !== 'Все' && selectedTrainer === 'Любой') {
        let filtered = timeTable.map((item_by_dates) => {
          let filteredItems = item_by_dates.items.filter((item) => {
            if (item.service.category.title === selectedType) return true
            else return false
          })
          return { date: item_by_dates.date, items: filteredItems }
        })
        console.log(filtered)
        setFilteredTimeTable(filtered)
      }

      else if (selectedType === 'Все' && selectedTrainer !== 'Любой') {
        let filtered = timeTable.map((item_by_dates) => {
          let filteredItems = item_by_dates.items.filter((item) => {
            if (item.staff.name === selectedTrainer) return true
            else return false
          })
          return { date: item_by_dates.date, items: filteredItems }
        })
        console.log(filtered)
        setFilteredTimeTable(filtered)
      }

      else if (selectedType !== 'Все' && selectedTrainer !== 'Любой') {
        let filtered = timeTable.map((item_by_dates) => {
          let filteredItems = item_by_dates.items.filter((item) => {
            if (item.staff.name === selectedTrainer && item.service.category.title === selectedType) return true
            else return false
          })
          return { date: item_by_dates.date, items: filteredItems }
        })
        console.log(filtered)
        setFilteredTimeTable(filtered)
      }


    }
  }, [timeTable, selectedTrainer, selectedType]);

  return (
    <>
      <ServicePopup selectedService={selectedService} setSelectedService={setSelectedService} />
      <div className="services" id='services'>
        <h2 className="services__title">УСЛУГИ</h2>
        <div className="services__filters">
          <div className="services__filter-container services__filter-container_type">
            <p className="services__filter-title services__filter-title_type_type">Выберете тип практики</p>
            <div className={`services__filter-box services__filter-box_type_type ${selectedTypeOpened ? 'services__filter-box_active' : ''}`}>
              <div className="services__filter-row" onClick={() => {
                setSelectedTypeOpened(!selectedTypeOpened)
                setSelectedTrainerOpened(false)
              }}>
                <p className="services__filter-item">{selectedType}</p>
                <svg className={`services__filter-arrow ${selectedTypeOpened ? 'services__filter-arrow_active' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4L10 16L17 4" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div className={`services__filter-dropdown ${selectedTypeOpened ? 'services__filter-dropdown_active' : ''}`}>
                {types.map((item, i) => (
                  <>
                    {selectedType !== item ?
                      <p key={`selectedType-${i}-${item}`} className={`services__filter-dropdown-item
                      ${selectedTrainer !== 'Любой' && item !== 'Все' && trainers.filter((trainer) => {
                        if (trainer.name === selectedTrainer) return true
                        else return false
                      })[0].types.indexOf(item) === -1 ? 'services__filter-dropdown-item_inactive' : ''}
                      `} onClick={() => {
                          if (selectedTrainer !== 'Любой' && item !== 'Все' && trainers.filter((trainer) => {
                            if (trainer.name === selectedTrainer) return true
                            else return false
                          })[0].types.indexOf(item) === -1) {
                            return
                          } else {
                            setSelectedType(item)
                            setSelectedTypeOpened(!selectedTypeOpened)
                          }

                        }}>{item}</p>
                      : <></>}
                  </>
                ))}

              </div>


            </div>
          </div>

          <div className="services__filter-container">
            <p className="services__filter-title services__filter-title_type_type">Выберете проводника</p>
            <div className={`services__filter-box services__filter-box_type_trainer ${selectedTrainerOpened ? 'services__filter-box_active' : ''}`}>
              <div className="services__filter-row" onClick={() => {
                setSelectedTrainerOpened(!selectedTrainerOpened)
                setSelectedTypeOpened(false)
              }}>
                <p className="services__filter-item">{selectedTrainer}</p>
                <svg className={`services__filter-arrow ${selectedTrainerOpened ? 'services__filter-arrow_active' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4L10 16L17 4" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div className={`services__filter-dropdown ${selectedTrainerOpened ? 'services__filter-dropdown_active' : ''}`}>
                {trainers.map((item, i) => (
                  <>
                    {selectedTrainer !== item.name ?
                      <p key={`selectedType-${i}-${item.name}`} className={`services__filter-dropdown-item
                      ${selectedType !== 'Все' && item.name !== 'Любой' && item.types.indexOf(selectedType) === -1 ? 'services__filter-dropdown-item_inactive' : ''}
                      `} onClick={() => {
                          if (selectedType !== 'Все' && item.name !== 'Любой' && item.types.indexOf(selectedType) === -1) {
                            return
                          }
                          else {
                            setSelectedTrainer(item.name)
                            setSelectedTrainerOpened(!selectedTrainerOpened)
                          }

                        }}>{item.name}</p>
                      : <></>}
                  </>
                ))}
              </div>


            </div>
          </div>

        </div>
        {filteredTimeTable ? filteredTimeTable.map((item_by_dates, i) => (
          <>
            {item_by_dates.items.length !== 0 ?
              <div className="services__date-and-cards">
                <div className="services__date">
                  <p className="services__date-day-name">{moment(item_by_dates.date).format('dd')}</p>
                  <p className="services__date-day-number">{moment(item_by_dates.date).format('D')}</p>
                </div>
                <div className="services__services-cards">
                  {item_by_dates.items ? item_by_dates.items.map((item, iter) => (
                    <ServiceCard key={`ServiceCard${i + iter}`} service={{
                      name: item.service.title,
                      duration: Math.floor(item.length / 60),
                      price: item.service.price_min,
                      img_link: item.service.image_url,
                      short_desc: item.service.comment.trim().split('/')[0] ? item.service.comment.trim().split('/')[0] : 'Нет описания',
                      desc: item.service.comment.trim().split('/')[1] ? item.service.comment.trim().split('/')[1] : 'Нет описания',
                      link: item.link,
                      capacity: `${item.capacity - item.records_count} из ${item.capacity}`,
                    }} date={`${item.date.split(' ')[0].split('-')[2]}.${item.date.split(' ')[0].split('-')[1]}.${item.date.split(' ')[0].split('-')[0]} / ${item.date.split(' ')[1].split(':')[0]}:${item.date.split(' ')[1].split(':')[1]}`} name={item.staff.name} setSelectedService={setSelectedService} />
                  )) : <></>
                  }

                </div>
              </div>

              : <></>}

          </>

        )) : <></>}



      </div>
    </>

  );
}

export default Services;
