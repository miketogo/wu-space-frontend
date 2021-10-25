import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main';
import Header from '../Header/Header';
import MenuPopup from '../MenuPopup/MenuPopup';

function App() {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
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
      <div className="app">
        <Header handleMenuOpenClick={handleMenuOpenClick} />
        <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} />
        <Switch>
          <Route exact path="/">
            <Main screenWidth={screenWidth}/>
          </Route>
        </Switch>
      </div>
      <div className='app__bg'>

      </div>
    </>
  );
}

export default App;
