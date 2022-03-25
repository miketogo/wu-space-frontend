import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator'

import './Footer.css'



function Footer(props) {
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  const [isSubmitted, setSubmitted] = React.useState(false);

  function handleEmailChange(e) {
    setSubmitted(false)
    setEmailValue(e.target.value);
    if (e.target.value.length <= 2) {
      setEmailValidity({
        errorMassage: '',
        validState: false
      })
    } else {
      if (validator.isEmail(e.target.value)) {
        setEmailValidity({
          errorMassage: '',
          validState: true
        })
      } else {
        setEmailValidity({
          errorMassage: (!e.target.validity.valid ? e.target.validationMessage : 'Введите валидный email'),
          validState: false
        })
      }
    }
  }

  function handleSubmit() {
    console.log(emailValue)
    setSubmitted(true)
  }
  return (
    <footer className="footer">
      <span className="footer__line"></span>
      <div className="footer__first-row">
        <nav className="footer__nav">
          <ul className="footer__nav-links">
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/">Главная</Link></li>
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/services">Практики</Link></li>
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/provodniki">Проводники</Link></li>
          </ul>
          <ul className="footer__nav-links">

            <li className="footer__nav-li"><Link className="footer__nav-link" to="/contacts">Контакты</Link></li>
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/account">Личный кабинет</Link></li>
          </ul>
          <ul className="footer__nav-links">

          </ul>
        </nav>
        <div className="footer__subscribe-container">
          <p className="footer__subscribe-text">Подпишитесь на наши новости</p>
          <p className="footer__input-title">ваш email</p>
          <div className="footer__input-container">
            <input placeholder="example@wuway.com" className="footer__input" name="name" type="text" required value={emailValue} onChange={handleEmailChange} minLength="2" maxLength="30"></input>
            {props.screenWidth > 588 ? <div className={`footer__submit-button ${emailValidity.validState && !isSubmitted ? 'footer__submit-button_ready' : ''} ${emailValidity.validState && isSubmitted ? 'footer__submit-button_submitted' : ''}`} onClick={() => {
              if (emailValidity.validState && !isSubmitted) handleSubmit()
              else return
            }}>
              <p className="footer__submit-button-text">{emailValidity.validState && isSubmitted ? 'Спасибо' : 'Отправить'}</p>
            </div> : <></>}
          </div>
          {props.screenWidth <= 588 ? <div className={`footer__submit-button ${emailValidity.validState && !isSubmitted ? 'footer__submit-button_ready' : ''} ${emailValidity.validState && isSubmitted ? 'footer__submit-button_submitted' : ''}`} onClick={() => {
            if (emailValidity.validState && !isSubmitted) handleSubmit()
            else return
          }}>
            <p className="footer__submit-button-text">{emailValidity.validState && isSubmitted ? 'Спасибо' : 'Отправить'}</p>
          </div> : <></>}
          <span className="footer__input-error">{emailValidity.errorMassage ? emailValidity.errorMassage : ' '}</span>
        </div>
      </div>
      <div className="footer__second-row">
        <div className="footer__docs">
          <a target="_blank" rel="noreferrer" href="/#" className="footer__doc-link">Пользовательское соглашение</a>
          <a target="_blank" rel="noreferrer" href="/#" className="footer__doc-link">Политика конфиденциальности</a>
          <p className="footer__copyright">2021 © Ву Вей | Все права защищены</p>

        </div>
        <a target="_blank" rel="noreferrer" href="https://t.me/joinchat/wSpe1aK5GRM0N2Ri">
          {/* <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4971 0C4.70857 0 0 4.71293 0 10.5029V25.5029C0 31.2914 4.71293 36 10.5029 36H25.5029C31.2914 36 36 31.2871 36 25.4971V10.4971C36 4.70857 31.2871 0 25.4971 0H10.4971ZM28.5 6C29.328 6 30 6.672 30 7.5C30 8.328 29.328 9 28.5 9C27.672 9 27 8.328 27 7.5C27 6.672 27.672 6 28.5 6ZM18 9C22.9635 9 27 13.0365 27 18C27 22.9635 22.9635 27 18 27C13.0365 27 9 22.9635 9 18C9 13.0365 13.0365 9 18 9ZM18 12C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18C12 19.5913 12.6321 21.1174 13.7574 22.2426C14.8826 23.3679 16.4087 24 18 24C19.5913 24 21.1174 23.3679 22.2426 22.2426C23.3679 21.1174 24 19.5913 24 18C24 16.4087 23.3679 14.8826 22.2426 13.7574C21.1174 12.6321 19.5913 12 18 12Z" fill="white" />
          </svg> */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM16.5734 11.8117C15.0172 12.459 11.9069 13.7988 7.24254 15.8309C6.48513 16.1321 6.08836 16.4268 6.05224 16.7149C5.9912 17.2018 6.60097 17.3936 7.43132 17.6547C7.54427 17.6902 7.66129 17.727 7.78127 17.766C8.5982 18.0315 9.69712 18.3422 10.2684 18.3545C10.7866 18.3657 11.365 18.1521 12.0035 17.7136C16.3616 14.7718 18.6112 13.2849 18.7524 13.2529C18.8521 13.2302 18.9902 13.2018 19.0837 13.285C19.1773 13.3681 19.1681 13.5256 19.1582 13.5678C19.0977 13.8254 16.7042 16.0506 15.4655 17.2022C15.0794 17.5612 14.8055 17.8159 14.7495 17.874C14.624 18.0043 14.4962 18.1275 14.3733 18.246C13.6144 18.9776 13.0452 19.5263 14.4048 20.4222C15.0582 20.8528 15.581 21.2088 16.1026 21.564C16.6722 21.9519 17.2404 22.3388 17.9755 22.8207C18.1628 22.9435 18.3417 23.071 18.5159 23.1952C19.1788 23.6678 19.7744 24.0924 20.5101 24.0247C20.9377 23.9853 21.3793 23.5833 21.6036 22.3843C22.1336 19.5507 23.1755 13.4111 23.4163 10.8811C23.4374 10.6595 23.4109 10.3758 23.3896 10.2513C23.3682 10.1267 23.3237 9.94931 23.1618 9.81797C22.9701 9.66242 22.6742 9.62962 22.5418 9.63195C21.9401 9.64255 21.0168 9.96359 16.5734 11.8117Z" fill="white" />
          </svg>
        </a>


      </div>
    </footer>
  );
}

export default Footer;
