import React from 'react';

import './Membership.css'

import logo from '../../assets/images/membership/logo.png'
import { Link } from 'react-router-dom';

const first_row = [
  {
    name: 'Basis',
    price: '12 000 ₽',
    ticket_class: 'membership__card-ticket_var_basis',
    visit_times: '10',
    validity_period: '3 месяца',
    practics: 'Хатха-йога, sleeping beauty, energy shot, йога-нидра, аштанга-йога, акро-йога, кундалини-йога',
    bonus: 'Одно бесплатное посещение любой базовой практики для друга',
    type: 1,
    link: 'https://o1411.yclients.com/loyalty/subscription/332383/form',
  },
  {
    name: 'Masters',
    price: '15 000 ₽',
    ticket_class: 'membership__card-ticket_var_masters',
    visit_times: '10',
    validity_period: '3 месяца',
    practics: 'UrbanZen, Кундалини-Нидра-Гонг, Нео-тантра, Дарума-Тайсо',
    bonus: 'Одно бесплатное посещение любой базовой практики для друга',
    type: 1,
    link: 'https://o1411.yclients.com/loyalty/subscription/332390/form',
  },
  {
    name: 'WU Star',
    price: '18 000 ₽',
    ticket_class: 'membership__card-ticket_var_star',
    visit_times: '10',
    validity_period: '3 месяца',
    practics: 'Абонемент действует для всех видов базовых и авторских практик всех мастеров WU-space',
    bonus: 'Одно бесплатное посещение любой практики WU-special',
    type: 1,
    link: 'https://o1411.yclients.com/loyalty/subscription/332627/form',
  },
]

const second_row = [
  {
    name: 'WU unique',
    price: '35 000 ₽',
    ticket_class: 'membership__card-ticket_var_unique',
    visit_times: '10',
    validity_period: '3 месяца',
    practics: 'Хатха-йога, sleeping beauty, energy shot, йога-нидра, аштанга-йога, акро-йога, кундалини-йога',
    bonus: 'Одно бесплатное посещение любой практики WU-special + одно бесплатное посещение любой базовой или авторской практики для друга',
    type: 1,
    link: 'https://o1411.yclients.com/loyalty/subscription/332632/form',
  },
  {
    name: 'WU premium',
    price: '50 000 ₽',
    ticket_class: 'membership__card-ticket_var_premium',
    visit_times: '10',
    validity_period: '3 месяца',
    practics: 'Абонемент действует для всех видов базовых, авторских и уникальных практик всех мастеров WU-space, за исключением индивидуальных практик, воркшопов и семинаров.',
    more_practics: 'Практики WU-special - Гвоздетерапия, Шаманское Дыхание, Звуковая медитация, Шаманское Путешествие, Ракета Желаний, Гонг+Рапе.',
    bonus: 'Одно бесплатное посещение любой практики WU-special + два бесплатных посещения любой базовой или авторской практики для друга',
    type: 2,
    link: 'https://o1411.yclients.com/loyalty/subscription/332634/form',
  },
  {
    name: 'Базовая практика',
    price: '1000 ₽',
    ticket_class: 'membership__card-ticket_var_onetime',
    visit_times: 'Единоразово',
    validity_period: '',
    practics: 'Любая базовая практика при первом посещении WU-space. Soft benefits - чай, полезные угощения, пространство для релаксации и общения после практики.',
    bonus: '',
    type: 4,
    link: 'https://o1411.yclients.com/loyalty/subscription/332842/form',
  },
]

function Membership(props) {

  const [moreIdOpened, setMoreIdOpened] = React.useState('');

  return (
    <section className="membership">
      <h2 className="membership__title">Членство клуба</h2>
      <div className="membership__cards">
        {first_row.map((card, i) => (
          <div className="membership__card" key={`first-row-card-member-id${i}`}>
            <div className="membership__card-head">
              <h3 className="membership__card-name">{card.name}</h3>
              <p className="membership__card-price">{card.price}</p>
            </div>
            <div className={`membership__card-ticket ${card.ticket_class}`}>
              <img className="membership__card-ticket-logo" src={logo} alt='Wu' />
            </div>
            <p className="membership__card-visit-times">Количество посещений: {card.visit_times}</p>
            <p className="membership__card-validity-period">Срок действия: {card.validity_period}</p>
            <p className="membership__card-distributed">Распространяется для практик:</p>
            <p className="membership__card-practics">{card.practics}</p>
            <p className="membership__card-bonus">{card.bonus}</p>
            <span className="membership__card-btn-plug"></span>
            <a href={card.link} className="membership__card-btn">
              <p className="membership__card-btn-text">Приобрести</p>
            </a>
          </div>
        ))}

      </div>
      <div className="membership__cards membership__cards_second_row">
        {second_row.map((card, i) => (
          <div className={`membership__card ${card.type === 3 ? 'membership__card_hidden' : ''} ${moreIdOpened === `second-row-card-member-id${i}` ? 'membership__card_more' : ''}`} key={`second-row-card-member-id${i}`}>
            <div className="membership__card-head">
              <h3 className="membership__card-name">{card.name}</h3>
              <p className="membership__card-price">{card.price}</p>
            </div>
            <div className={`membership__card-ticket ${card.ticket_class}`}>
              <img className="membership__card-ticket-logo" src={logo} alt='Wu' />
            </div>
            <p className="membership__card-visit-times">Количество посещений: {card.visit_times}</p>
            {card.type !== 4 ?
              <p className="membership__card-validity-period">Срок действия: {card.validity_period}</p>
              :
              <p className="membership__card-validity-period">&ensp;</p>
            }

            <p className="membership__card-distributed">Распространяется для практик:</p>
            <p className="membership__card-practics">{card.practics}{moreIdOpened === `second-row-card-member-id${i}` && card.more_practics ? ` ${card.more_practics}` : ''}</p>
            {moreIdOpened === `second-row-card-member-id${i}` ?
              <>
                {/* {card.more_practics ?
                  <p className="membership__card-practics">{card.more_practics}</p>
                  : <></>} */}
                <p className="membership__card-bonus">{card.bonus}</p>
                <p className="membership__card-more" onClick={() => { setMoreIdOpened('') }}>Скрыть</p>
              </>

              :
              card.type === 2 ?
                <p className="membership__card-more" onClick={() => { setMoreIdOpened(`second-row-card-member-id${i}`) }}>Подробнее</p> :
                card.type === 4 ? <></> : <p className="membership__card-bonus">{card.bonus}</p>
            }
            {/* {card.type === 4 ?
              <Link className="membership__card-link" to='/'>
                <p className="membership__card-link-text">Узнать про базовые практики </p>
              </Link>
              :
              <></>} */}
            <span className="membership__card-btn-plug"></span>
            <a href={card.link} className="membership__card-btn">
              <p className="membership__card-btn-text">Приобрести</p>
            </a>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Membership;
