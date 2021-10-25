import React from 'react';

import './Main.css'

import MainHeadVideo from '../MainHeadVideo/MainHeadVideo';
import AboutSpace from '../AboutSpace/AboutSpace';
import WhyUs from '../WhyUs/WhyUs';
import Membership from '../Membership/Membership';

function Main(props) {
  return (
    <div className="main">
      <MainHeadVideo />
      <AboutSpace screenWidth={props.screenWidth}/>
      <WhyUs />
      <Membership />
    </div>
  );
}

export default Main;
