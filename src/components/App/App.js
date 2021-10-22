import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <div className='app__bg'>

      </div>
    </div>
  );
}

export default App;
