import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './Contacts.css'

import geomark from '../../assets/images/map/geomark.svg'



function Contacts(props) {
  return (
    <section className="contacts">
      <h2 className="contacts__title">контакты</h2>

      <YMaps>
        <div className="contacts__map-container">
          <Map className="contacts__map" defaultState={{ center: [55.763233, 37.593177], zoom: 17 }}>
            <Placemark geometry={[55.763233, 37.593177]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: geomark, //установили в качестве метки свою картинку
                iconImageSize: [18, 31], // размер нашей картинки
                hideIconOnBalloonOpen: false, //запрет на скрытие метки по клику на балун
                balloonOffset: [3, -40]

              }}

              modules={
                ['geoObject.addon.balloon', 'geoObject.addon.hint']
              }
              properties={{


                hintContent: [
                  `
                    <div class="hint-content">
                        <p class="hint-content__title">Мы находимся тут</p>

                    </div>
                    `,
                ].join(""),
                balloonContentBody: [
                  `
                    <div class="baloon-content">
                        <a href={link} class="baloon-content__title">WU-SPACE</a>
                        <div class="baloon-content__body">{description}</div>
                        <div class="baloon-content__link">
                            <a href={link} class="baloon__link">Подробнее</a>
                        </div>
                    </div>
                    `,
                ].join("")
              }}
            />
          </Map>
          {props.screenWidth > 1196 || props.screenWidth <= 588 ?
            <div className="contacts__links">
              <a target="_blank" rel="noreferrer" href="tel:+79268654770" className="contacts__link" >
                <svg className="contacts__link-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="contacts__link-icon-path" fillRule="evenodd" clipRule="evenodd" d="M11.724 13.7409C13.5498 16.0398 15.76 18.1547 18.2585 19.9938C19.2195 18.9823 20.2765 17.9708 21.3336 16.9593L22.2945 16.1317L23.1594 16.9593C25.1774 18.8903 27.1954 20.8214 29.2134 22.7524L30.0783 23.58L29.2134 24.4076C27.8681 25.6949 26.6189 26.9823 25.2735 28.1777C21.2375 32.0398 12.3966 24.5915 9.60985 22.0168C6.82306 19.3501 -0.960726 10.8903 3.07531 6.93632C4.42066 5.64897 5.66991 4.45357 7.01525 3.16621L7.88012 2.33862L8.74498 3.16621C10.763 5.1892 12.781 7.12023 14.8951 9.05127L15.76 9.87885L14.8951 10.7064C13.8381 11.7179 12.781 12.7294 11.724 13.7409ZM28.3486 23.58C26.3306 21.649 24.3125 19.7179 22.2945 17.7869C20.9492 18.9823 19.6038 20.2697 18.3546 21.557C15.2795 19.4421 12.4927 16.8674 10.0903 13.649C11.3396 12.3616 12.6849 11.0743 13.9342 9.87885C11.9162 7.94782 9.89813 6.01678 7.88012 4.08575C6.63087 5.28115 5.28552 6.56851 3.94018 7.76391C-1.05682 12.5455 19.5077 32.0398 24.4086 27.3501C25.754 26.0628 27.0032 24.8674 28.3486 23.58Z" fill="white" />
                </svg>

                <p className="contacts__link-text">+7 926 865 47 70</p>
              </a>
              <a target="_blank" rel="noreferrer" href="mailto:u@wu-space.ru" className="contacts__link" >
                <svg className="contacts__link-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="contacts__link-icon-path" d="M28.5 5.5H3.5C2.57207 5.50106 1.68244 5.87015 1.0263 6.5263C0.370148 7.18244 0.00105868 8.07207 0 9L0 24C0.00105868 24.9279 0.370148 25.8176 1.0263 26.4737C1.68244 27.1299 2.57207 27.4989 3.5 27.5H28.5C29.4279 27.4989 30.3176 27.1299 30.9737 26.4737C31.6299 25.8176 31.9989 24.9279 32 24V9C31.9989 8.07207 31.6299 7.18244 30.9737 6.5263C30.3176 5.87015 29.4279 5.50106 28.5 5.5ZM22.245 15.566L31 9.9175V22.9265L22.245 15.566ZM3.5 6.5H28.5C29.117 6.50185 29.7113 6.73232 30.1683 7.14687C30.6252 7.56142 30.9123 8.13063 30.974 8.7445L17.6265 17.3555C17.1415 17.6679 16.5769 17.834 16 17.834C15.4231 17.834 14.8585 17.6679 14.3735 17.3555L1.026 8.7445C1.08772 8.13063 1.37478 7.56142 1.83172 7.14687C2.28866 6.73232 2.88304 6.50185 3.5 6.5ZM1 9.9175L9.755 15.5675L1 22.9265V9.9175ZM28.5 26.5H3.5C2.87588 26.4981 2.27514 26.2623 1.81632 25.8392C1.35749 25.4161 1.0739 24.8364 1.0215 24.2145L10.634 16.1335L13.834 18.196C14.4807 18.6122 15.2335 18.8335 16.0025 18.8335C16.7715 18.8335 17.5243 18.6122 18.171 18.196L21.368 16.1335L30.9785 24.2145C30.9261 24.8364 30.6425 25.4161 30.1837 25.8392C29.7249 26.2623 29.1241 26.4981 28.5 26.5Z" fill="white" />
                </svg>


                <p className="contacts__link-text">u@wu-space.ru</p>
              </a>
              <div className="contacts__time-table" >
                <svg className="contacts__link-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="contacts__link-icon-circle" cx="16" cy="16" r="15.5" stroke="white" />
                  <path className="contacts__link-icon-path" d="M16.5 2H15.5V16H16.5V2Z" fill="white" />
                  <path className="contacts__link-icon-path" d="M30 17L30 16L15.5 16L15.5 17L30 17Z" fill="white" />
                </svg>

                <p className="contacts__time-table-text">пн - пт / 09:00 - 21:00<br />сб - вс / 11:00 - 22:00</p>
              </div>
              <a target="_blank" rel="noreferrer" href={`https://yandex.ru/maps/?pt=37.593177,55.763233&z=18&l=map`} className="contacts__link" >
                <svg className="contacts__link-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_351:2905)">
                    <path className="contacts__link-icon-path" d="M16.0001 0.5C9.87595 0.5 4.91797 5.65847 4.91797 11.9926C4.91797 14.2759 5.58429 16.0118 6.67518 17.7774L15.6538 32.3098C15.6908 32.3681 15.742 32.4161 15.8025 32.4493C15.8631 32.4826 15.931 32.5 16.0001 32.5C16.0692 32.5 16.1371 32.4826 16.1976 32.4493C16.2582 32.4161 16.3094 32.3681 16.3464 32.3098L25.325 17.7774C26.4159 16.0118 27.0822 14.2759 27.0822 11.9926C27.0822 5.65847 22.1242 0.5 16.0001 0.5ZM16.0001 1.3209C21.6636 1.3209 26.2613 6.08566 26.2613 11.9926C26.2613 14.121 25.676 15.6651 24.6323 17.3541L16.0001 31.3222L7.36786 17.3541C6.32417 15.6651 5.73887 14.1209 5.73887 11.9926C5.73887 6.08566 10.3366 1.3209 16.0001 1.3209ZM16.0001 6.24629C13.0581 6.24629 10.6643 8.64011 10.6643 11.5821C10.6643 14.5241 13.058 16.918 16.0001 16.918C18.9422 16.918 21.3359 14.5241 21.3359 11.5821C21.3359 8.64011 18.9421 6.24629 16.0001 6.24629ZM16.0001 7.06719C18.4985 7.06719 20.515 9.08372 20.515 11.5821C20.515 14.0805 18.4985 16.0971 16.0001 16.0971C13.5017 16.0971 11.4852 14.0805 11.4852 11.5821C11.4852 9.08372 13.5017 7.06719 16.0001 7.06719Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_351:2905">
                      <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>



                <p className="contacts__link-text">Большой Патриарший пер. 10</p>
              </a>
            </div>
            :
            <div className="contacts__links">
              <a target="_blank" rel="noreferrer" href="tel:+79999999999" className="contacts__link" >
                <svg className="contacts__link-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="contacts__link-icon-path" fillRule="evenodd" clipRule="evenodd" d="M11.724 13.7409C13.5498 16.0398 15.76 18.1547 18.2585 19.9938C19.2195 18.9823 20.2765 17.9708 21.3336 16.9593L22.2945 16.1317L23.1594 16.9593C25.1774 18.8903 27.1954 20.8214 29.2134 22.7524L30.0783 23.58L29.2134 24.4076C27.8681 25.6949 26.6189 26.9823 25.2735 28.1777C21.2375 32.0398 12.3966 24.5915 9.60985 22.0168C6.82306 19.3501 -0.960726 10.8903 3.07531 6.93632C4.42066 5.64897 5.66991 4.45357 7.01525 3.16621L7.88012 2.33862L8.74498 3.16621C10.763 5.1892 12.781 7.12023 14.8951 9.05127L15.76 9.87885L14.8951 10.7064C13.8381 11.7179 12.781 12.7294 11.724 13.7409ZM28.3486 23.58C26.3306 21.649 24.3125 19.7179 22.2945 17.7869C20.9492 18.9823 19.6038 20.2697 18.3546 21.557C15.2795 19.4421 12.4927 16.8674 10.0903 13.649C11.3396 12.3616 12.6849 11.0743 13.9342 9.87885C11.9162 7.94782 9.89813 6.01678 7.88012 4.08575C6.63087 5.28115 5.28552 6.56851 3.94018 7.76391C-1.05682 12.5455 19.5077 32.0398 24.4086 27.3501C25.754 26.0628 27.0032 24.8674 28.3486 23.58Z" fill="white" />
                </svg>

                <p className="contacts__link-text">+7 999 999 99 99</p>
              </a>

              <div className="contacts__time-table" >
                <svg className="contacts__link-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="contacts__link-icon-circle" cx="16" cy="16" r="15.5" stroke="white" />
                  <path className="contacts__link-icon-path" d="M16.5 2H15.5V16H16.5V2Z" fill="white" />
                  <path className="contacts__link-icon-path" d="M30 17L30 16L15.5 16L15.5 17L30 17Z" fill="white" />
                </svg>

                <p className="contacts__time-table-text">пн - пт / 10:00 - 21:00<br />сб - вс / 12:00 - 20:00</p>
              </div>
              <a target="_blank" rel="noreferrer" href="mailto:hello@wu-way.com" className="contacts__link" >
                <svg className="contacts__link-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="contacts__link-icon-path" d="M28.5 5.5H3.5C2.57207 5.50106 1.68244 5.87015 1.0263 6.5263C0.370148 7.18244 0.00105868 8.07207 0 9L0 24C0.00105868 24.9279 0.370148 25.8176 1.0263 26.4737C1.68244 27.1299 2.57207 27.4989 3.5 27.5H28.5C29.4279 27.4989 30.3176 27.1299 30.9737 26.4737C31.6299 25.8176 31.9989 24.9279 32 24V9C31.9989 8.07207 31.6299 7.18244 30.9737 6.5263C30.3176 5.87015 29.4279 5.50106 28.5 5.5ZM22.245 15.566L31 9.9175V22.9265L22.245 15.566ZM3.5 6.5H28.5C29.117 6.50185 29.7113 6.73232 30.1683 7.14687C30.6252 7.56142 30.9123 8.13063 30.974 8.7445L17.6265 17.3555C17.1415 17.6679 16.5769 17.834 16 17.834C15.4231 17.834 14.8585 17.6679 14.3735 17.3555L1.026 8.7445C1.08772 8.13063 1.37478 7.56142 1.83172 7.14687C2.28866 6.73232 2.88304 6.50185 3.5 6.5ZM1 9.9175L9.755 15.5675L1 22.9265V9.9175ZM28.5 26.5H3.5C2.87588 26.4981 2.27514 26.2623 1.81632 25.8392C1.35749 25.4161 1.0739 24.8364 1.0215 24.2145L10.634 16.1335L13.834 18.196C14.4807 18.6122 15.2335 18.8335 16.0025 18.8335C16.7715 18.8335 17.5243 18.6122 18.171 18.196L21.368 16.1335L30.9785 24.2145C30.9261 24.8364 30.6425 25.4161 30.1837 25.8392C29.7249 26.2623 29.1241 26.4981 28.5 26.5Z" fill="white" />
                </svg>


                <p className="contacts__link-text">hello@wu-way.com</p>
              </a>
              <a target="_blank" rel="noreferrer" href={`https://yandex.ru/maps/?pt=37.593075,55.764415&z=18&l=map`} className="contacts__link" >
                <svg className="contacts__link-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_351:2905)">
                    <path className="contacts__link-icon-path" d="M16.0001 0.5C9.87595 0.5 4.91797 5.65847 4.91797 11.9926C4.91797 14.2759 5.58429 16.0118 6.67518 17.7774L15.6538 32.3098C15.6908 32.3681 15.742 32.4161 15.8025 32.4493C15.8631 32.4826 15.931 32.5 16.0001 32.5C16.0692 32.5 16.1371 32.4826 16.1976 32.4493C16.2582 32.4161 16.3094 32.3681 16.3464 32.3098L25.325 17.7774C26.4159 16.0118 27.0822 14.2759 27.0822 11.9926C27.0822 5.65847 22.1242 0.5 16.0001 0.5ZM16.0001 1.3209C21.6636 1.3209 26.2613 6.08566 26.2613 11.9926C26.2613 14.121 25.676 15.6651 24.6323 17.3541L16.0001 31.3222L7.36786 17.3541C6.32417 15.6651 5.73887 14.1209 5.73887 11.9926C5.73887 6.08566 10.3366 1.3209 16.0001 1.3209ZM16.0001 6.24629C13.0581 6.24629 10.6643 8.64011 10.6643 11.5821C10.6643 14.5241 13.058 16.918 16.0001 16.918C18.9422 16.918 21.3359 14.5241 21.3359 11.5821C21.3359 8.64011 18.9421 6.24629 16.0001 6.24629ZM16.0001 7.06719C18.4985 7.06719 20.515 9.08372 20.515 11.5821C20.515 14.0805 18.4985 16.0971 16.0001 16.0971C13.5017 16.0971 11.4852 14.0805 11.4852 11.5821C11.4852 9.08372 13.5017 7.06719 16.0001 7.06719Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_351:2905">
                      <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>



                <p className="contacts__link-text">Малая бронная, 34</p>
              </a>
            </div>
          }

        </div>
      </YMaps>
    </section>
  );
}

export default Contacts;
