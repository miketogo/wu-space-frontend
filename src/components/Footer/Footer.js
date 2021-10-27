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
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/services">Услуги</Link></li>
          </ul>
          <ul className="footer__nav-links">
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/account">Личный кабинет</Link></li>
            <li className="footer__nav-li"><Link className="footer__nav-link" to="/contacts">Контакты</Link></li>
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
        <a target="_blank" rel="noreferrer" href="/#">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4971 0C4.70857 0 0 4.71293 0 10.5029V25.5029C0 31.2914 4.71293 36 10.5029 36H25.5029C31.2914 36 36 31.2871 36 25.4971V10.4971C36 4.70857 31.2871 0 25.4971 0H10.4971ZM28.5 6C29.328 6 30 6.672 30 7.5C30 8.328 29.328 9 28.5 9C27.672 9 27 8.328 27 7.5C27 6.672 27.672 6 28.5 6ZM18 9C22.9635 9 27 13.0365 27 18C27 22.9635 22.9635 27 18 27C13.0365 27 9 22.9635 9 18C9 13.0365 13.0365 9 18 9ZM18 12C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18C12 19.5913 12.6321 21.1174 13.7574 22.2426C14.8826 23.3679 16.4087 24 18 24C19.5913 24 21.1174 23.3679 22.2426 22.2426C23.3679 21.1174 24 19.5913 24 18C24 16.4087 23.3679 14.8826 22.2426 13.7574C21.1174 12.6321 19.5913 12 18 12Z" fill="white" />
          </svg>
        </a>


      </div>
    </footer>
  );
}

export default Footer;
