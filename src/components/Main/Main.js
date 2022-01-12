import React from 'react';

import './Main.css'

// import MainHeadVideo from '../MainHeadVideo/MainHeadVideo';
import AboutSpace from '../AboutSpace/AboutSpace';
import WhyUs from '../WhyUs/WhyUs';
import Membership from '../Membership/Membership';
// import OneTimeVisit from '../OneTimeVisit/OneTimeVisit';

import firstSlide from '../../assets/images/about-space/first.png'
import firstPrevInactive from '../../assets/images/about-space/first-prew-inactive.png'
import firstPrevActive from '../../assets/images/about-space/first-prew-active.png'

import secondSlide from '../../assets/images/about-space/second.png'
import secondPrevInactive from '../../assets/images/about-space/second-prew-inactive.png'
import secondPrevActive from '../../assets/images/about-space/second-prew-active.png'

import thirdSlide from '../../assets/images/about-space/third.png'
import thirdPrevInactive from '../../assets/images/about-space/third-prew-inactive.png'
import thirdPrevActive from '../../assets/images/about-space/third-prew-active.png'

import fourthSlide from '../../assets/images/about-space/fourth.png'
import fourthPrevInactive from '../../assets/images/about-space/fourth-prew-inactive.png'
import fourthPrevActive from '../../assets/images/about-space/fourth-prew-active.png'

import whySlide1 from '../../assets/images/why-us/slide1.png'
import whySlide2 from '../../assets/images/why-us/slide2.png'
import whySlide3 from '../../assets/images/why-us/slide3.png'
import whySlide4 from '../../assets/images/why-us/slide4.png'


const slides = [
  {
    mainImg: firstSlide,
    prevInactImg: firstPrevInactive,
    prevActImg: firstPrevActive,
    firstText: 'WU-SPACE – здесь вы найдете путь к истинному себе',
    secondText: 'Мы не стремимся к идеальному состоянию. Его не существует. Мы за практику и процесс поиска своего уникального  самоощущения без рамок и ограничений.'
  },
  {
    mainImg: secondSlide,
    prevInactImg: secondPrevInactive,
    prevActImg: secondPrevActive,
    firstText: 'WU-SPACE — это уникальное пространство для практик в самом центре Москвы',
    secondText: '100 кв. метров покоя и тишины. Изысканный дизайн. Домашняя атмосфера. Продуманный до малейших деталей интерьер для практик в небольших группах и индивидуальных практик.'
  },
  {
    mainImg: thirdSlide,
    prevInactImg: thirdPrevInactive,
    prevActImg: thirdPrevActive,
    firstText: 'WU-SPACE — системный подход к созданию лучшего себя и своей собственной жизни',
    secondText: 'Уникальный комплекс практик для управления своим здоровьем, эмоциональным состоянием и благополучием. Реализация в профессии и творчестве, улучшение своих отношений с детьми, с партнером и друзьями.'
  },
  {
    mainImg: fourthSlide,
    prevInactImg: fourthPrevInactive,
    prevActImg: fourthPrevActive,
    firstText: 'WU-SPACE — экосистема, которая позволяет экономить свои личные ресурсы и ресурсы планеты',
    secondText: 'Концепция “Ничего Лишнего” - nothing superfluous. Движение от эго целей к построению гармоничной экосистемы'
  },
]

 const whyUsSlides = [
  {
    img: whySlide1,
    title: 'Лучшие МАСТЕРА',
    ul:[{
      text: 'Многолетний опыт практик',
    },
    {
      text: 'Разработали и готовы поделиться собственными методиками',
    },
    {
      text: 'Учились у лучших мировых мастеров',
    },],
    text: 'Лучшая команда тренеров составит конкуренцию вашему расписанию, и сделат ваши тренировки желанными и регулярными',
    linkText: 'г. Москва, Большой Патриарший пер. 10',
    linkTo: '/contacts',
  },
  {
    img: whySlide2,
    title: 'ПРОСТРАНСТВО ДОВЕРИЯ',
    ul:[{
      text: 'Закрытый клуб – все, что здесь происходит, остается внутри',
    },
    {
      text: 'Индивидуальный подход к каждому клиенту',
    },
    {
      text: 'Безопасное пространство, продуманное до мельчайших деталей',
    },
    {
      text: 'Живое интеллектуальное и духовное общение',
    },],
    text: 'Уникальное пространство в центре Москвы для изучения новых практик и познания самого себя',
    linkText: 'г. Москва, Большой Патриарший пер. 10',
    linkTo: '/contacts',
  },
  {
    img: whySlide3,
    title: 'Максимально широкий диапазон практик',
    ul:[{
      text: 'Комплексный подход к практикам, где каждая сфера представлена лучшими учителями',
    },
    {
      text: 'Воркшопы и ретриты, разработанные специально для нашего клуба',
    },
    {
      text: 'Инструменты для вашего роста и самопознания',
    },],
    text: 'Получайте удовольствие от большого выбора практики от с помощью специалистов международного уровня. Буддиская медитация, и тайский массаж помогут вам обрести гармонию и дзен вашему телу и разуму',
    linkText: 'Список услуг',
    linkTo: '/services',
  },
  {
    img: whySlide4,
    title: 'Только в WU – ДЕТСКИЕ И СЕМЕЙНЫЕ ПРОГРАММЫ',
    ul:[{
      text: 'Парные практики',
    },
    {
      text: 'Практики с детьми',
    },
    {
      text: 'Семейные практики',
    },
    {
      text: 'Восстановление / создание более глубокого общения с близкими в поле доверия и взаимопонимания',
    },],
    text: 'Получайте удовольствие от большого выбора практики от с помощью специалистов международного уровня. Буддиская медитация, и тайский массаж помогут вам обрести гармонию и дзен вашему телу и разуму. ',
    linkText: 'Список услуг',
    linkTo: '/services',
  },
]



function Main(props) {
  return (
    <div className="main">
      {/* <MainHeadVideo screenWidth={props.screenWidth}/> */}
      <AboutSpace screenWidth={props.screenWidth} slides={slides}/>
      <WhyUs screenWidth={props.screenWidth} slides={whyUsSlides}/>
      <Membership />
      {/* <OneTimeVisit /> */}
    </div>
  );
}

export default Main;
