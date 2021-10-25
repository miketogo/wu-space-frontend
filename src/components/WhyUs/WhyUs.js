import React from 'react';

import './WhyUs.css'

import { whyUsSlides } from '../../assets/utils/utils'
import { Link } from 'react-router-dom';

function WhyUs(props) {
  const [slideId, setSlideId] = React.useState(0);
  const [pervSlideId, setPervSlideId] = React.useState(0);

  React.useEffect(() => {
    console.log(pervSlideId)
    if (slideId !== pervSlideId) {
      setTimeout(() => {
        setPervSlideId(slideId)
      }, 500);

    }
  }, [pervSlideId, slideId]);


  return (
    <section className="why-us">
      <h2 className="why-us__title">Почему мы?</h2>
      <div className="why-us__slide">
        <p className="why-us__slide-title">{whyUsSlides[slideId].title}</p>
        <div className="why-us__image-fade">
        <img className={`why-us__slide-img ${slideId !== pervSlideId ? 'anim-fadein' : ''}`} src={whyUsSlides[slideId].img} alt={whyUsSlides[slideId].title} />
        <img className={`why-us__slide-img-bg ${slideId !== pervSlideId ? 'anim-fadeout' : ''}`} src={whyUsSlides[pervSlideId].img} alt={whyUsSlides[pervSlideId].title} />
        </div>

        <div className="why-us__slide-text-container">
          <p className="why-us__slide-text">{whyUsSlides[slideId].text}</p>
          <Link className="why-us__slide-link" to={whyUsSlides[slideId].linkTo}>
            <p className="why-us__slide-link-text">{whyUsSlides[slideId].linkText}</p>
            <svg className="why-us__slide-link-svg" width="281" height="8" viewBox="0 0 281 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M280.354 4.35353C280.549 4.15827 280.549 3.84168 280.354 3.64642L277.172 0.464442C276.976 0.26918 276.66 0.26918 276.464 0.464442C276.269 0.659704 276.269 0.976287 276.464 1.17155L279.293 3.99998L276.464 6.8284C276.269 7.02367 276.269 7.34025 276.464 7.53551C276.66 7.73077 276.976 7.73077 277.172 7.53551L280.354 4.35353ZM4.37114e-08 4.5L280 4.49998L280 3.49998L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="white" />
            </svg>
          </Link>

        </div>
      </div>
      <div className="why-us__handlers">
        <button className="why-us__handler-button" onClick={() => {
          setPervSlideId(slideId)
          if (slideId === 0) setSlideId(whyUsSlides.length - 1)
          else setSlideId(slideId - 1)
        }}>
          <svg className="why-us__arrow why-us__arrow_left" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="why-us__arrow-path" d="M18.2701 6.8285L4.23509 6.95046L9.2839 1.81314L7.91149 0.46437L0.560044 7.94469L8.04037 15.2961L9.38913 13.9237L4.25181 8.87491L18.2869 8.75296L18.2701 6.8285Z" fill="#FCEFDA" />
          </svg>

        </button>
        <div className="why-us__handler-numbers">
          {
            whyUsSlides ?
              whyUsSlides.map((item, i) => (
                <p onClick={()=>{
                  if (slideId === i) return
                  setPervSlideId(slideId)
                  setSlideId(i)
                }} className={`why-us__numbers ${slideId === i ? 'why-us__numbers_active' : ''}`}>0{i + 1}</p>
              ))
              : <></>
          }
        </div>
        <button className="why-us__handler-button" onClick={() => {
          setPervSlideId(slideId)
          if (slideId === whyUsSlides.length - 1) setSlideId(0)
          else setSlideId(slideId + 1)
        }}>
          <svg className="why-us__arrow why-us__arrow_right" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="why-us__arrow-path" d="M18.2701 6.8285L4.23509 6.95046L9.2839 1.81314L7.91149 0.46437L0.560044 7.94469L8.04037 15.2961L9.38913 13.9237L4.25181 8.87491L18.2869 8.75296L18.2701 6.8285Z" fill="#FCEFDA" />
          </svg>

        </button>
      </div>
    </section>
  );
}

export default WhyUs;
