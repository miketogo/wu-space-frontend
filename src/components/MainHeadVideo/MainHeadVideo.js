import React from 'react';
import ReactPlayer from 'react-player'

import './MainHeadVideo.css'

import video from '../../assets/videos/nvgup.flv'
import videoPrev from '../../assets/images/main-video/main-head-video-prev.png'

function MainHeadVideo(props) {

  const [isButtonClicked, setButtonClicked] = React.useState(false);

  return (
    <section className="main-video">
      <div className='main-video__container'>

        <div className='main-video__texts'>
          <h2 className='main-video__title'>ПРОСТРАНСТВО ТВОИХ ИЗМЕНЕНИЙ</h2>
          <p className='main-video__subtitle'>Закрытый клуб в самом центре Москвы</p>
        </div>

        <div className='main-video__gradient'>
          {
            props.screenWidth <= 576 ? <></> :
              <button className='main-video__button' onClick={() => setButtonClicked(!isButtonClicked)}>
                {isButtonClicked ?
                  <>
                    <svg className='main-video__button-pause' width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect className='main-video__button-pause-rect' width="6" height="46" rx="3" />
                      <rect className='main-video__button-pause-rect' x="30" width="6" height="46" rx="3" />
                    </svg>
                  </> :
                  <>
                    <svg className='main-video__button-play' width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='main-video__button-play-path' d="M39.1405 25.3044L5.49072 44.4136C4.49076 44.9814 3.25 44.2592 3.25 43.1092L3.25 4.89076C3.25 3.74081 4.49076 3.01855 5.49073 3.58642L39.1405 22.6957C40.1529 23.2706 40.1529 24.7294 39.1405 25.3044Z" strokeWidth="5" />
                    </svg>
                    <p className='main-video__button-text'>Смотреть<br />Show real</p>
                  </>
                }
              </button>
          }



        </div>
        {
          props.screenWidth <= 576 ?
            <img className='main-video__prev-img' alt="video-prev" src={videoPrev} /> :
            <ReactPlayer className='main-video__video'

              volume={0.4}
              muted={true}
              config={{
                forceFLV: true,
                attributes: { poster: videoPrev, playsInline: true, disablePictureInPicture: true }
              }}

              url={video}
              playsInline={true}
              width="100%"
              height="100%"
              playing={isButtonClicked}
              onError={error => console.log(error)}
            />
        }

        {/* <img className='main-video__prev-img' alt="video-prev" src={videoPrev} /> */}
      </div>

    </section>
  );
}

export default MainHeadVideo;
