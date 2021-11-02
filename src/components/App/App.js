import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main';
import Header from '../Header/Header';
import MenuPopup from '../MenuPopup/MenuPopup';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';

function App() {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // Отключение мсштабирования ctrl+wheel
  window.addEventListener(('wheel'), function (event) {
    if (event.ctrlKey === true) {
      event.preventDefault();
    }
  }, { passive: false })

  // Отключение мсштабирования ctrl+"+"/"-"
  window.addEventListener('keydown', function (event) {
    console.log(event)
    if (event.ctrlKey === true && (event.keyCode === 61 || event.keyCode === 107 || event.keyCode === 173 || event.keyCode === 109 || event.keyCode === 187 || event.keyCode === 189)) {
      event.preventDefault();
    }
  }, { passive: false })






  function handleMenuOpenClick() {
    setMenuPopupOpen(true)
  }
  function handleMenuCloseClick() {
    setMenuPopupOpen(false)
  }


  function handleResize() {
    setScreenWidth(window.innerWidth)
    window.removeEventListener('resize', handleResize);
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <div className="app" >
        <Header handleMenuOpenClick={handleMenuOpenClick} />
        <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} />
        <Switch>
          <Route exact path="/">
            <Main screenWidth={screenWidth} />
          </Route>
          <Route path="/contacts">
            <Contacts screenWidth={screenWidth}/>
          </Route>
        </Switch>
        <Footer screenWidth={screenWidth} />
      </div>
      <div className='app__bg'>

      </div>
    </>
  );
}

export default App;
