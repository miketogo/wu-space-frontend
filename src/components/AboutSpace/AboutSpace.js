import React from 'react';


import './AboutSpace.css'






function AboutSpace(props) {
  const [pervSlideId, setPervSlideId] = React.useState(0);


  const [slideId, setSlideId] = React.useState(0);


  React.useEffect(() => {
    console.log(pervSlideId)

    if (slideId !== pervSlideId ) {

      setTimeout(() => {

        setPervSlideId(slideId)
      }, 500);

    }
  }, [pervSlideId, slideId]);




  return (
    <div className="about-space">
      <div className="hidden-images">
        {props.slides.map((item, i) => (
          <>
           <img src={item.mainImg} alt={item.firstText} />
           <img src={item.prevInactImg} alt={item.firstText} />
           <img src={item.prevActImg} alt={item.firstText} />
          </>

        ))}
      </div>
      <div className="about-space__images">
        <div className="about-space__image-fade">
          {props.screenWidth <= 588 ?
            <img className={`about-space__main-image `} src={props.slides[slideId].mainImg} alt={props.slides[slideId].firstText} />
            :
            <>
            {/* {isSlideIdLoaded ? <></> :
            <div className="loading"></div>
            } */}

              <img className={`about-space__main-image  ${slideId !== pervSlideId  ? 'anim-fadein' : ''}`} src={props.slides[slideId].mainImg} alt={props.slides[slideId].firstText} />
              <img className={`about-space__main-image-bg  ${slideId !== pervSlideId ? 'anim-fadeout' : ''}`} src={props.slides[pervSlideId].mainImg} alt={props.slides[pervSlideId].firstText} />
            </>
          }

        </div>



        {
          props.screenWidth > 1137 ?
            <div className="about-space__prevs">
              {props.slides.map((item, i) => (
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
        <p className="about-space__first-text">{props.slides[slideId].firstText}</p>
        <p className="about-space__second-text">{props.slides[slideId].secondText}</p>
      </div>
      {
        props.screenWidth <= 1137 ?
          <div className="about-space__prevs">
            {props.slides.map((item, i) => (
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
