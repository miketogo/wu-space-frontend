import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ru'

import './Services.css'
import ServiceCard from './ServiceCard/ServiceCard';
import ServicePopup from './ServicePopup/ServicePopup';

const types = [
  'Все',
  'Тело',
  'Опыт',
  'Звук',
  'Курсы'
]

const trainers = [
  'Любой',
  'Анастасия Тарасенко',
  'Александр Демидов',
  'Ульяна Сотникова',
  'Александр Рышков',
  'Александр Кириченко',
  'Александр Демидов',
]

function Services(props) {

  const [dateOne, setDateOne] = React.useState({
    date: '',
    dayName: '',
    dayNumber: ''
  });
  const [dateTwo, setDateTwo] = React.useState({
    date: '',
    dayName: '',
    dayNumber: ''
  });


  const [pageNumber, setPageNumber] = React.useState(0);


  React.useEffect(() => {
    var date = moment()
    moment.locale('ru')
    date.add((pageNumber * 2), 'days')
    setDateOne(
      {
        date: date.tz("Europe/Moscow").format('D.MM.YYYY'),
        dayName: date.tz("Europe/Moscow").format('dd'),
        dayNumber: date.tz("Europe/Moscow").format('D')
      }
    )
    date.add(1, 'days')
    setDateTwo(
      {
        date: date.tz("Europe/Moscow").format('D.MM.YYYY'),
        dayName: date.tz("Europe/Moscow").format('dd'),
        dayNumber: date.tz("Europe/Moscow").format('D')
      }
    )
  }, [pageNumber]);



  const [selectedType, setSelectedType] = React.useState(types[0]);
  const [selectedTypeOpened, setSelectedTypeOpened] = React.useState(false);

  const [selectedTrainer, setSelectedTrainer] = React.useState(trainers[0]);
  const [selectedTrainerOpened, setSelectedTrainerOpened] = React.useState(false);

  const [selectedService, setSelectedService] = React.useState(null);

  return (
    <>
      <ServicePopup selectedService={selectedService} setSelectedService={setSelectedService}/>
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
                      <p key={`selectedType-${i}-${item}`} className="services__filter-dropdown-item" onClick={() => {
                        setSelectedType(item)
                        setSelectedTypeOpened(!selectedTypeOpened)
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
                    {selectedTrainer !== item ?
                      <p key={`selectedType-${i}-${item}`} className="services__filter-dropdown-item" onClick={() => {
                        setSelectedTrainer(item)
                        setSelectedTrainerOpened(!selectedTrainerOpened)
                      }}>{item}</p>
                      : <></>}
                  </>
                ))}
              </div>


            </div>
          </div>

        </div>
        <p>{`${dateOne.date}-${dateTwo.date}`}</p>
        <div className="services__date-and-cards">
          <div className="services__date">
            <p className="services__date-day-name">{dateOne.dayName}</p>
            <p className="services__date-day-number">{dateOne.dayNumber}</p>
          </div>
          <div className="services__services-cards">
            <ServiceCard service={{
              name:'Йога Нидра',
              duration: '90 мин.',
              price: '1500',
              short_desc: 'Техника глубокого расслабления тела и сознания, созданная на основе древних тантрических практик.',
              desc: 'Йогу очень часто воспринимают исключительно как систему упражнений на растяжку. Но это однобокий взгляд. Йога — целая система практик, помогающая развиваться как на физическом уровне, так и на духовном.',
            }} dateNow={dateOne.date} name={'Анастасия Тарасенко'} setSelectedService={setSelectedService}/>
            <ServiceCard service={{
              name:'Йога Нидра2',
              duration: '90 мин.',
              price: '15500',
              short_desc: 'Техника глубокого расслабления тела и сознания, созданная на основе древних тантрических практик.',
              desc: 'Йогу очень часто воспринимают исключительно как систему упражнений на растяжку. Но это однобокий взгляд. Йога — целая система практик, помогающая развиваться как на физическом уровне, так и на духовном.',
            }} dateNow={dateOne.date} name={'Анастасия Тарасенко'} setSelectedService={setSelectedService}/>
          </div>
        </div>
        <div className="services__date-and-cards">
          <div className="services__date">
            <p className="services__date-day-name">{dateTwo.dayName}</p>
            <p className="services__date-day-number">{dateTwo.dayNumber}</p>
          </div>
          <div className="services__services-cards">
            <ServiceCard service={{
              name:'Йога Нидра3',
              duration: '120 мин.',
              price: '2500',
              short_desc: 'Техника глубокого расслабления тела и сознания, созданная на основе древних тантрических практик.',
              desc: 'Йогу очень часто воспринимают исключительно как систему упражнений на растяжку. Но это однобокий взгляд. Йога — целая система практик, помогающая развиваться как на физическом уровне, так и на духовном.',
            }} dateNow={dateTwo.date} name={'Анастасия Тарасенко'} setSelectedService={setSelectedService}/>
            <ServiceCard service={{
              name:'Йога Нидра',
              duration: '90 мин.',
              price: '1500',
              short_desc: 'Техника глубокого расслабления тела и сознания, созданная на основе древних тантрических практик.',
              desc: 'Йогу очень часто воспринимают исключительно как систему упражнений на растяжку. Но это однобокий взгляд. Йога — целая система практик, помогающая развиваться как на физическом уровне, так и на духовном.',
            }} dateNow={dateTwo.date} name={'Анастасия Тарасенко'} setSelectedService={setSelectedService}/>
          </div>
        </div>
        <p onClick={() => {
          if (pageNumber !== 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setPageNumber(pageNumber - 1)
          }
        }}>пред. страница</p>
        <p onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setPageNumber(pageNumber + 1)

        }}>след. страница</p>
      </div>
    </>

  );
}

export default Services;
