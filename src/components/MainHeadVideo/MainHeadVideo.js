import React from 'react';

import './MainHeadVideo.css'

import videoPrev from '../../images/main-video/main-head-video-prev.png'

function MainHeadVideo() {

  return (
    <section className="main-video">
      <div className='main-video__container'>
        <div className='main-video__gradient'></div>
        <img className='main-video__prev-img' alt="video-prev" src={videoPrev} />
      </div>

    </section>
  );
}

export default MainHeadVideo;
