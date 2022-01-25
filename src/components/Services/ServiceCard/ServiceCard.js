import React from 'react';

import './ServiceCard.css'

import test_img from '../../../assets/images/practic-card/test.png'

import { Link } from 'react-router-dom';

function PracticCard(props) {
  const [isLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if(props.service){
      setTimeout(() => {
        setLoaded(true)
      }, 10);

    }

  }, [props.service]);

  return (
    <div className={`service-card ${isLoaded? 'service-card_loaded': ''}`}>
      <img className="service-card__img" src={props.service.img_link !== ''? `${props.service.img_link}` :test_img} alt="Фото практики" />

      <div className="service-card__texts">
        <p className="service-card__date">{props.date && props.date}</p>
        <p className="service-card__capacity">Мест: {props.service.capacity}</p>
        <p className="service-card__name">{props.service.name}</p>
        <p className="service-card__desc">{props.service.short_desc}</p>
        <div className="service-card__info">
          <div className="service-card__info__tow-first">

            <div className="service-card__info-item">
              {/* <p className="service-card__info-item-name">длительность</p> */}
              <div className="service-card__info-data service-card__info-data_time">
                <svg className="service-card__info-data-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.9401 31L17.2301 16L27.9401 1H4.06006L14.7701 16L4.06006 31H27.9401ZM7.94006 3H24.0601L16.0001 14.28L7.94006 3ZM24.0601 29H7.94006L16.0001 17.72L24.0601 29Z" fill="#F9F9F9" />
                </svg>
                <p className="service-card__info-data-text">{props.service.duration} мин.</p>
              </div>
            </div>
            <div className="service-card__info-item">
              {/* <p className="service-card__info-item-name">стоимость</p> */}
              <div className="service-card__info-data service-card__info-data_price">
                <svg className="service-card__info-data-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_847_3631)">
                    <path d="M8.18742 0V16H5.33325V18.6667H8.18742V21.3333H5.33325V24H8.18742V32H10.8541V24H17.5208V21.3333H10.8541V18.6667H17.5234C22.5797 18.6533 26.6697 14.4499 26.6666 9.33594C26.6639 4.22407 22.5812 0 17.5208 0H8.18742ZM10.8541 2.66667H17.5208C21.1026 2.66667 23.9976 5.63121 23.9999 9.33854C24.0026 13.0439 21.1065 15.9943 17.5208 16H10.8541V2.66667Z" fill="#F9F9F9" />
                  </g>
                  <defs>
                    <clipPath id="clip0_847_3631">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="service-card__info-data-text">{props.service.price}</p>
              </div>
            </div>


          </div>


          <div className="service-card__info-item service-card__info-item_last">
            {/* <p className="service-card__info-item-name">кто ведет</p> */}
            <Link className="service-card__info-data" to={`/provodniki/${props.name}`}>
              <svg className="service-card__info-data-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7545 14.0061H16.2462C18.5549 14.0061 20.433 12.1021 20.433 9.76234V5.7158C20.433 3.37604 18.5549 1.47201 16.2462 1.47201H15.7545C13.4458 1.47201 11.567 3.37604 11.567 5.7158V9.76234C11.567 12.1021 13.4458 14.0061 15.7545 14.0061ZM25.3961 19.44H6.60384C6.24653 19.44 5.95385 19.5556 5.78173 19.7661C5.62922 19.9516 5.57839 20.2077 5.63358 20.5065C5.74034 21.085 6.57407 21.9204 6.97495 22.3222L14.4146 29.8604C14.8191 30.2696 15.3623 30.5051 15.9441 30.5228C15.9622 30.5235 15.9811 30.525 15.9992 30.5272C16.0174 30.525 16.0363 30.5235 16.0544 30.5228C16.6362 30.5051 17.1808 30.2688 17.5854 29.8596L25.0235 22.3222C25.4252 21.9204 26.2574 21.085 26.3656 20.5058C26.4208 20.2077 26.37 19.9523 26.2182 19.7668C26.0454 19.5556 25.7534 19.44 25.3961 19.44ZM10.1145 5.7158C10.1145 2.56423 12.644 0 15.7545 0H16.2462C19.3552 0 21.8854 2.5635 21.8854 5.7158V9.76234C21.8854 12.9139 19.3552 15.4781 16.2462 15.4781H15.7545C12.6447 15.4781 10.1145 12.9146 10.1145 9.76234V5.7158ZM27.7927 20.7774C27.6024 21.8078 26.6278 22.7852 26.0454 23.3688L18.613 30.9011C17.9659 31.5561 17.1082 31.941 16.1873 31.9904C16.151 31.9962 16.0995 32.0007 16.0624 31.9999C16.0515 31.9999 16.0109 31.9984 16 31.9977C15.9985 31.9962 15.9172 31.9984 15.8918 31.9984C15.8867 31.9984 15.883 31.9984 15.883 31.9984C15.8591 31.997 15.8358 31.994 15.8119 31.9904C14.8925 31.941 14.0348 31.5554 13.3877 30.9018L5.95385 23.3688C5.37141 22.7852 4.39679 21.8085 4.20651 20.7774C4.07071 20.0443 4.23411 19.351 4.6655 18.8255C5.11868 18.2727 5.80715 17.968 6.60457 17.968H25.3961C26.1935 17.968 26.8827 18.2727 27.3366 18.8269C27.7673 19.3532 27.9292 20.0458 27.7927 20.7774Z" fill="#F9F9F9" />
              </svg>

              <p className="service-card__info-data-text">{props.name && props.name}</p>
            </Link>
          </div>
        </div>
        <p className="service-card__more" onClick={() => {
          props.setSelectedService({ service: props.service, img: props.service.img_link !== ''? `${props.service.img_link}` :test_img})
        }}>Подробнее</p>
        <a className="service-card__btn" href={props.service.link}>
          <p className="service-card__btn-text">Записаться</p>
        </a>
      </div>
    </div>
  );
}

export default PracticCard;
