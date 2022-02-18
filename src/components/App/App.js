import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main';
import Header from '../Header/Header';
import MenuPopup from '../MenuPopup/MenuPopup';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import Team from '../Team/Team';
import TeamMember from '../Team/TeamMember/TeamMember';


import anastasiya_tarasenko_img from '../../assets/images/team/anastasiya-tarasenko.png'
import tatiyana_treshchalova_img from '../../assets/images/team/tatiyana-treshchalova.png'
import aleksandr_demidov_img from '../../assets/images/team/aleksandr-demidov.png'
import ulyana_sotnikova_img from '../../assets/images/team/ulyana-sotnikova.jpg'
import aleksandr_kirichenko_img from '../../assets/images/team/aleksandr-kirichenko.png'
import alexander_ryshkov_img from '../../assets/images/team/alexander-ryshkov.png'
import ekaterina_petina_img from '../../assets/images/team/ekaterina-petina.png'
import timur_abdrakhmanov_img from '../../assets/images/team/timur-abdrakhmanov.jpg'
import plug from '../../assets/images/team/plug.png'



import anastasiya_tarasenko_video from '../../assets/videos/team/anastasiya-tarasenko.mp4'
import aleksandr_kirichenko_video from '../../assets/videos/team/aleksandr-kirichenko.mp4'
import alexander_ryshkov_video from '../../assets/videos/team/alexander-ryshkov.mp4'
import tatiyana_treshchalova_video from '../../assets/videos/team/tatiyana-treshchalova.mp4'
import ulyana_sotnikova_video from '../../assets/videos/team/ulyana-sotnikova.mp4'
import Services from '../Services/Services';
import mainApi from '../../assets/utils/MainApi';
import Service from '../Service/Service';

const team = [
  {
    name: 'Анастасия Тарасенко',
    link: 'anastasiya-tarasenko',
    photo: anastasiya_tarasenko_img,
    video: anastasiya_tarasenko_video,
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
    photo: tatiyana_treshchalova_img,
    video: tatiyana_treshchalova_video,
    practics: 'Индивидуальная гонг-сессия, Шаманское путешествие, Ракета желаний, Гонг+Pane, Кундалини-Йога + Гонг + Йога-Нидра',
    short_desc: 'Татьяна Трещалова – Мастер кундалини-йоги школы Йоги Бхаджана и ученица Карта Сингха в Kundalini Research Institute...',
    desc: 'Татьяна Трещалова – Мастер кундалини-йоги школы Йоги Бхаджана и ученица Карта Сингха в Kundalini Research Institute. В 2013 году Татьяна прошла курс обучения йоги для детей по программе Childplay yoga у Гурудас Каур, который позволяет ей глубоко чувствовать психологию и состояние детей, находить с ними наиважнейшие точки соприкосновения. Мастер закончила обучение в школе холистического звука Дона Конро и у лучших мастеров гонга, Тома Солтрона в Польше, Алиции и Ричардаса Эйлякас в Литве. За время многолетней практики и обучения Татьяна в совершенстве овладела техникой игры на гонге.'
  },

  {
    name: 'Александр Демидов',
    link: 'aleksandr-demidov',
    photo: aleksandr_demidov_img,
    practics: 'Звуковая медитация, Шаманское Дыхание, Мастер-класс по поющим чашам, Индивидуально',
    short_desc: 'Александр Демидов – Мастер звукотерапии и создатель Практики Духовных Колоколов. Познакомился с йогой совсем ребенком...',
    desc: 'Александр Демидов – Мастер звукотерапии и создатель Практики Духовных Колоколов. Познакомился с йогой совсем ребенком.  С тех пор – исцеление путём прикосновения ладонями, Школа дальнейшего энерго-информационного развития, встреча с тибетским учителем пути самоосвобождения, перечислять можно бесконечно. Практики с тибетскими чашами и другими музыкальными инструментами Александр проводит с 2012 года. Мастер разработал уникальную методику проведения сеанса. Она подразумевает интуитивное потоковое звучание и холистический подход к работе с телом и сознанием.'
  },

  {
    name: 'Ульяна Сотникова',
    link: 'ulyana-sotnikova',
    photo: ulyana_sotnikova_img,
    video: ulyana_sotnikova_video,
    practics: [
      'АкроЙога',
    ],
    short_desc: 'Ульяна Сотниковa –  сертифицированный преподаватель международной школы Акройоги...',
    desc: 'Ульяна Сотниковa –  сертифицированный преподаватель международной школы Акройоги. Ульяна – одна из первых ласточек Акройоги в России, активный популяризатор развития йоги на всей территории России от Мурманска до Камчатки, основательница "Школы полётов", участница крупнейших мировых фестивалей Burning man, где удачно презентовала свою технику полета с веерами. Путешественница по призванию и духовная искательница по жизни. Ульяна 12 лет практикует йогу, за  это время, как она сама говорит, многому научилась, а главное поняла: баланс тела и духа – это основа счастливой жизни.'
  },

  {
    name: 'Александр Кириченко',
    link: 'aleksandr-kirichenko',
    photo: aleksandr_kirichenko_img,
    video: aleksandr_kirichenko_video,
    practics: [
      'Аромадиагностика',
      'Нео-тантра',
    ],
    short_desc: 'Александр Кириченко – аромапсихолог, специалист восточных практик, тантры и медитаций...',
    desc: 'Александр Кириченко – аромапсихолог, специалист восточных практик, тантры и медитаций. С 2010 до 2018 года Александр глубоко погрузился в изучение и ведение даосских практик и цигун. Параллельно он начал осваивать массаж и целительство. Это позволило ему чувствовать и понимать физическое, эмоциональное и ментальное здоровье каждого человека индивидуально, что обозначило для Александра начало нового этапа частной работы с людьми, телесной терапии, остеопатических практик и целительства. Александр станет для вас проводником в мир масел, ароматов и дурманящих практик современной тантры.'
  },

  {
    name: 'Александр Рышков',
    link: 'alexander-ryshkov',
    photo: alexander_ryshkov_img,
    video: alexander_ryshkov_video,
    practics: [
      'Аштанга-йога',
    ],
    short_desc: 'Александр Рышков пришел в йогу в 2007. Его сразу зацепила концепция быть проводником...',
    desc: 'Александр Рышков пришел в йогу в 2007. Его сразу зацепила концепция быть проводником. Александр хотел быть тем, кто  знает что-то такое, что помогает быть в ладу с этой реальностью. Годы обучения у мастеров, тысячи часов личной практики, очарование, разочарования только прибавили энтузиазма заниматься и делиться этой невероятной магией аштанга-йоги. Аштангу он описывает тремя словами: иное качество жизни. Первично - это способ снять стресс, но со временем замечаешь, как после хорошей практики начинает меняться сам ум. Любые изменения - это труд. Спокойный, решительный, постоянный.'
  },

  {
    name: 'Тимур Абдрахманов',
    link: 'timur-abdrakhmanov',
    photo: timur_abdrakhmanov_img,
    practics: [
      'Японская йога Дарума-Тайсо',
    ],
    short_desc: 'Тимур Абдрахманов  – преподаватель хатха-йоги Дарума Тайсо, комьюнити-менеджер, организатор кэмпов движения Burning Man (Russian Burners), пармастер и организатор банных встреч...',
    desc: 'Тимур Абдрахманов  – преподаватель хатха-йоги Дарума Тайсо, комьюнити-менеджер, организатор кэмпов движения Burning Man (Russian Burners), пармастер и организатор банных встреч. Тимур практикует йогу 12 лет, более 10 000 часов, с апреля 2012 года по настоящее время – ученик Владислава Фадеева, от которого и получил право на передачу традиции. С помощью йоги дважды восстановил здоровье из полной дисфункции и гармонизировал сферы жизни. Придерживается синтеза традиционного и современного знания о человеке и опирается на научно-обоснованные методы физического и ментального восстановления.'
  },

  {
    name: 'Екатерина Петина',
    link: 'ekaterina-petina',
    photo: ekaterina_petina_img,
    practics: [
      'Кундалини Йога',
    ],
    short_desc: 'Петина Катрин – сертифицированный преподаватель Кундалини Йоги (KRI, США) и телесно-ориентированный психотерапевт...',
    desc: 'Петина Катрин – сертифицированный преподаватель Кундалини Йоги (KRI, США) и телесно-ориентированный психотерапевт. Практикует йогу с 14 лет, 6 лет назад углубилась именно в Кундалини-Йогу. Эта практика – отличный инструмент самопознания, который учит экологично проживать эмоции, расширять горизонты, чувствовать момент, освобождаться от ненужного и позволяет энергии спокойно течь по телу для радостной, здоровой и гармоничной жизни! Проводник рассматривает практики как с эзотерической, так и психологической точки зрения, сочетая в своих практиках древнюю мудрость и современную науку.'
  },

  {
    name: 'Максим Ачкасов',
    link: 'maxim-achkasov',
    photo: plug,
    practics: [
      'Курс Долголетие',
    ],
    short_desc: 'Максим Ачкасов – сертифицированный преподаватель Сатьянанда Йоги, Бихарской Школы...',
    desc: 'Максим Ачкасов – сертифицированный преподаватель Сатьянанда Йоги, Бихарской Школы. Основной специализацией Максима является раскрытие потенциала личности человека с помощью методик йоги и, как следствие, включение процессов саморегуляции организма, увеличение продолжительности жизни, запуск процессов омоложения и исцеления. До преподавания йоги Максим более 25 лет занимался боевыми искусствами и практиковал медитацию Окинавской Школы Дзен, а также публиковал материалы в международном Журнале Yoga Magazine. Помимо этого, проводник создал свой авторский курс «Долголетие».'
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


  // React.useEffect(() => {
   
  // }, []);





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

  const [timeTable, setTimeTable] = React.useState(undefined);

  // const [services, setServices] = React.useState([]);

  React.useEffect(() => {
   

    mainApi.getTimeTable()
      .then((res) => {
        res.data.forEach(item => {
          item.link = `https://n690156.yclients.com/company:${item.company_id}/activity-info:${item.id}:${item.staff.id}`
        });
        setTimeTable(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

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
            <Contacts screenWidth={screenWidth} />
          </Route>
          <Route exact path="/provodniki">
            <Team team={team} />
          </Route>
          <Route path="/services/:id">
            <Service timeTable={timeTable} />
          </Route>
          <Route path="/services">
            <Services timeTable={timeTable} />
          </Route>
          <Route path="/provodniki/:name">
            <TeamMember timeTable={timeTable} team={team} />
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
