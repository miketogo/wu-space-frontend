import React from 'react';
import { NavLink } from 'react-router-dom';

import './MenuPopup.css'



function MenuPopup(props) {
  return (
    <div className={`menu-popup ${props.isMenuPopupOpen ? 'menu-popup_active' : ''}`}>
      <div className={`menu-popup__container ${props.isMenuPopupOpen ? 'menu-popup__container_active' : ''}`}>
        <div className="menu-popup__close" onClick={props.handleMenuCloseClick}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36.5518" height="3.04599" transform="matrix(0.707109 0.707105 -0.707109 0.707105 2.1543 0)" fill="white" />
            <rect width="36.5518" height="3.04599" transform="matrix(0.70711 -0.707104 0.70711 0.707104 0 25.8462)" fill="white" />
          </svg>
        </div>
        <nav className="menu-popup__link-container">
          <NavLink exact to="/" className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>
            Главная
          </NavLink>
          <NavLink to="/services" className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>
            Практики
          </NavLink>
          <NavLink to="/provodniki" className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>
            проводники
          </NavLink>
          <NavLink to="/contacts" className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>
            контакты
          </NavLink>
          <NavLink to="/" className="menu-popup__link menu-popup__link_disabled" onClick={props.handleMenuCloseClick}>
            Личный кабинет
          </NavLink>
        </nav>
      </div>
      <div className={`menu-popup__background ${props.isMenuPopupOpen ? 'menu-popup__background_active' : ''}`} onClick={props.handleMenuCloseClick}>

      </div>
    </div>
  );
}

export default MenuPopup;
