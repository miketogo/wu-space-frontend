import React from 'react';


import './AboutSpace.css'

import {slides} from '../../assets/utils/utils'

function AboutSpace(props) {
  const [pervSlideId, setPervSlideId] = React.useState(0);
  const [slideId, setSlideId] = React.useState(0);
  React.useEffect(() => {
    console.log(pervSlideId)
    if (slideId !== pervSlideId) {
      setTimeout(() => {
        setPervSlideId(slideId)
      }, 500);

    }
  }, [pervSlideId, slideId]);




  return (
    <div className="about-space">
      <div className="about-space__images">
        <div className="about-space__image-fade">
          <img className={`about-space__main-image ${slideId !== pervSlideId ? 'anim-fadein' : ''}`} src={slides[slideId].mainImg} alt="WU-SPACE — это место, где каждый находит путь к истинному себе" />
          <img className={`about-space__main-image-bg ${slideId !== pervSlideId ? 'anim-fadeout' : ''}`} src={slides[pervSlideId].mainImg} alt={slides[pervSlideId].firstText} />
        </div>



        {
          props.screenWidth > 1137 ?
            <div className="about-space__prevs">
              {slides.map((item, i) => (
                <img onClick={() => {
                  if (slideId !== i) {
                    setPervSlideId(slideId)
                    setSlideId(i)
                  }
                }} key={"about-space__prev" + i} className={`about-space__prev-image ${slideId === i ? 'about-space__prev-image_active' : ''}`} src={slideId === i ? item.prevActImg : item.prevInactImg} alt={item.firstText} />
              ))}

            </div>
            : <></>
        }


      </div>

      <div className="about-space__text-container" >
        <p className="about-space__first-text">{slides[slideId].firstText}</p>
        <p className="about-space__second-text">{slides[slideId].secondText}</p>
      </div>
      {
          props.screenWidth <= 1137 ?
            <div className="about-space__prevs">
              {slides.map((item, i) => (
                <img onClick={() => {
                  if (slideId !== i) {
                    setPervSlideId(slideId)
                    setSlideId(i)
                  }
                }} key={"about-space__prev" + i} className={`about-space__prev-image ${slideId === i ? 'about-space__prev-image_active' : ''}`} src={slideId === i ? item.prevActImg : item.prevInactImg} alt={item.firstText} />
              ))}

            </div>
            : <></>
        }
    </div>
  );
}

export default AboutSpace;
