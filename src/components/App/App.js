import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main';
import Header from '../Header/Header';
import MenuPopup from '../MenuPopup/MenuPopup';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import Team from '../Team/Team';

import photo1 from '../../assets/images/team/1.png'
import photo2 from '../../assets/images/team/2.png'
import photo3 from '../../assets/images/team/3.png'
import photo4 from '../../assets/images/team/4.png'
import photo5 from '../../assets/images/team/5.png'
import TeamMember from '../Team/TeamMember/TeamMember';
const team = [
  {
      name: 'Анастасия Тарасенко',
      link: 'anastasiya-tarasenko',
      photo: photo1,
      practics: [
          'Индивидуально',
          'Йога Нидра',
          'Energy shot',
          'Sleeping beauty',
          'Urban Zen',
          'Хатха-Йога'
      ],
      short_desc: 'Анастасия Тарасенко познакомилась с  йогой 16 лет назад, успев пройти за эти годы свой собственный путь становления...',
      desc: 'Анастасия Тарасенко познакомилась с  йогой 16 лет назад, успев пройти за эти годы свой собственный путь становления. Мастер прошла обучение в Open California Institute, а также в Школе йоги «Чатуранга» по направлениям «Построение последовательностей» и «Тичерс». Но именно личные трансформации помогли Анастасии стать очень чутким проводником, понимающим ваши сложности и ограничения. Важная часть в практиках Насти отводится физическому аспекту. Её авторская практика состоит из набора техник разных направлений для максимальной проработки вашего ментального, духовного и физического состояния.'
  },

  {
      name: 'Татьяна Трещалова',
      link: 'tatiyana-treshchalova',
      photo: photo2,
      practics: 'Индивидуальная гонг-сессия, Шампанское путешествие, Ракета желаний, Гонг+Pane, Кундалини-Йога + Гонг + Йога-Нидра',
      short_desc: 'Татьяна Трещалова – Мастер кундалини-йоги школы Йоги Бхаджана и ученица Карта Сингха в Kundalini Research Institute...',
      desc: 'Татьяна Трещалова – Мастер кундалини-йоги школы Йоги Бхаджана и ученица Карта Сингха в Kundalini Research Institute. В 2013 году Татьяна прошла курс обучения йоги для детей по программе Childplay yoga у Гурудас Каур, который позволяет ей глубоко чувствовать психологию и состояние детей, находить с ними наиважнейшие точки соприкосновения. Мастер закончила обучение в школе холистического звука Дона Конро и у лучших мастеров гонга, Тома Солтрона в Польше, Алиции и Ричардаса Эйлякас в Литве. За время многолетней практики и обучения Татьяна в совершенстве овладела техникой игры на гонге.'
  },

  {
      name: 'Александр Демидов',
      link: 'aleksandr-demidov',
      photo: photo3,
      practics: 'Звуковая медитация, Шаманское Дыхание, Мастер-класс по поющим чашам, Индивидуально',
      short_desc: 'Александр Демидов – Мастер звукотерапии и создатель Практики Духовных Колоколов. Познакомился с йогой совсем ребенком...',
      desc: 'Александр Демидов – Мастер звукотерапии и создатель Практики Духовных Колоколов. Познакомился с йогой совсем ребенком.  С тех пор – исцеление путём прикосновения ладонями, Школа дальнейшего энерго-информационного развития, встреча с тибетским учителем пути самоосвобождения, перечислять можно бесконечно. Практики с тибетскими чашами и другими музыкальными инструментами Александр проводит с 2012 года. Мастер разработал уникальную методику проведения сеанса. Она подразумевает интуитивное потоковое звучание и холистический подход к работе с телом и сознанием.'
  },

  {
      name: 'Ульяна Сотникова',
      link: 'ulyana-sotnikova',
      photo: photo4,
      practics: [
          'АкроЙога',
      ],
      short_desc: 'Ульяна Сотниковa –  сертифицированный преподаватель международной школы Акройоги...',
      desc: 'Ульяна Сотниковa –  сертифицированный преподаватель международной школы Акройоги. Ульяна – одна из первых ласточек Акройоги в России, активный популяризатор развития йоги на всей территории России от Мурманска до Камчатки, основательница "Школы полётов", участница крупнейших мировых фестивалей Burning man, где удачно презентовала свою технику полета с веерами. Путешественница по призванию и духовная искательница по жизни. Ульяна 12 лет практикует йогу, за  это время, как она сама говорит, многому научилась, а главное поняла: баланс тела и духа – это основа счастливой жизни.'
  },

  {
      name: 'Александр Кириченко',
      link: 'aleksandr-kirichenko',
      photo: photo5,
      practics: [
          'Аромадиагностика',
          'Нео-тантра',
      ],
      short_desc: 'Александр Кириченко – аромапсихолог, специалист восточных практик, тантры и медитаций...',
      desc: 'Александр Кириченко – аромапсихолог, специалист восточных практик, тантры и медитаций. С 2010 до 2018 года Александр глубоко погрузился в изучение и ведение даосских практик и цигун. Параллельно он начал осваивать массаж и целительство. Это позволило ему чувствовать и понимать физическое, эмоциональное и ментальное здоровье каждого человека индивидуально, что обозначило для Александра начало нового этапа частной работы с людьми, телесной терапии, остеопатических практик и целительства. Александр станет для вас проводником в мир масел, ароматов и дурманящих практик современной тантры.'
  },
]

function App() {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // Отключение мсштабирования ctrl+wheel
  window.addEventListener(('wheel'), function (event) {
    if (event.ctrlKey === true) {
      event.preventDefault();
    }
  }, { passive: false })

  // Отключение мсштабирования ctrl+"+"/"-"
  window.addEventListener('keydown', function (event) {
    console.log(event)
    if (event.ctrlKey === true && (event.keyCode === 61 || event.keyCode === 107 || event.keyCode === 173 || event.keyCode === 109 || event.keyCode === 187 || event.keyCode === 189)) {
      event.preventDefault();
    }
  }, { passive: false })






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
      <div className="app" >
        <Header handleMenuOpenClick={handleMenuOpenClick} />
        <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} />
        <Switch>
          <Route exact path="/">
            <Main screenWidth={screenWidth} />
          </Route>
          <Route path="/contacts">
            <Contacts screenWidth={screenWidth}/>
          </Route>
          <Route exact path="/provodniki">
            <Team team={team}/>
          </Route>
          <Route path="/provodniki/:name">
            <TeamMember team={team} />
          </Route>
        </Switch>
        <Footer screenWidth={screenWidth} />
      </div>
      <div className='app__bg'>

      </div>
    </>
  );
}

export default App;
