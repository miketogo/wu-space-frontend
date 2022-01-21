import React from 'react';

// import close from '../../images/close.svg'
// import Preloader from '../Preloader/Preloader';

import testImg from '../../../assets/images/popup/test.png'

// import edit from '../../images/edit-icon.svg'
// import arrow from '../../images/arrow-icon.svg'

import './ServicePopup.css';

function ServicePopup(props) {
  const [selectedService, setSelectedService] = React.useState(null);

  function handleClose() {

    props.setSelectedService(null)
    setTimeout(() => {
      setSelectedService(null)
    }, 310);
  }

  React.useEffect(() => {
    if(props.selectedService !== null){
      console.log(props.selectedService)
      setSelectedService(props.selectedService)
    }
   
  }, [props.selectedService]);


  return (
    <>
      <div className={`service-popup ${props.selectedService !== null ? 'service-popup_active' : ''}`}>
        <div className={`service-popup__container `} >
          <img className='service-popup__img' src={testImg} alt={selectedService !== null ? selectedService.name : ''} />
          <h2 className='service-popup__name'>{selectedService !== null ? selectedService.name : ''}</h2>
          <p className='service-popup__desc'>{selectedService !== null ? selectedService.desc : ''}</p>
          <div className='service-popup__btns'>
            <a href={selectedService !== null ? selectedService.link : ''} className='service-popup__btn-sign-up'>
              <p className='service-popup__btn-sign-up-text'>Записаться на занятие</p>
            </a>
            <div className='service-popup__btn-close'>
              <p className='service-popup__btn-close-text' onClick={handleClose}>Закрыть</p>
            </div>
          </div>
        </div>
        <div className={`service-popup_bg ${props.selectedService !== null ? 'service-popup_bg_active' : ''}`} onClick={handleClose}> </div>
      </div>

    </>
  )
}

export default ServicePopup;
