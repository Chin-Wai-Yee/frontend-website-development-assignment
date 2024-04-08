// import './css/Culture.css';
import React from 'react';
import image1 from './images/cultures/dragon.png';
import image2 from './images/cultures/midAutumn.jpg';
import image3 from './images/cultures/dragonBoat.jpg';
import image4 from './images/cultures/deepavali.jpg';
import image5 from './images/cultures/thaipusam.jpg';
import image6 from './images/cultures/pongal.jpg';
import image7 from './images/cultures/hariRayaAildilfirti.jpg';
import image8 from './images/cultures/hariRayaHaji.jpg';
import image9 from './images/cultures/rasul.jpg';
import cultureBackground from './images/cultures/background.jpg';

import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import Typography from '@mui/material/Typography';

function Culture() {
  const targets = document.querySelectorAll('.target');
  window.addEventListener('scroll', () => {
    const bottom = window.innerHeight * 4 / 5;
    targets.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      const bottomPos = item.getBoundingClientRect().bottom;
    })
  });
  const options = {
    threshold: 0.5 // When 50% of the target is visible
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, options);
  targets.forEach(target => {
    observer.observe(target);
  });


  return (
    <div>
      <TitleBoxWithBackground background={cultureBackground}>
        <Typography variant='h2' textAlign='center'>
          Culture in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      <section className="contentBackground">
        <div className="container mt-4" id="chineseSection">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2><b>Chinese</b></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 target">
              <img src={image1} alt="dragon dragon roar" className="img-fluid custom-image right" />
            </div>
            <div className="col-md-6 target">
              <h3><b>Chinese New Year</b></h3>
              <p>
                The Chinese New Year, a significant celebration for the Chinese community in Malaysia, has its roots
                in ancient legend. According to one story, a monster named Nian would terrorize villagers at the start
                of each new year. To ward off the monster, people discovered that it was afraid of loud noises, bright
                lights, and the color red. As a result, traditions for the Chinese New Year often include fireworks,
                firecrackers, and wearing red clothing and decorations. Additionally, it is customary to give young
                people money in red envelopes to bring luck and prosperity for the upcoming year.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target order-md-last">
              <img src={image2} alt="lantern Image" className="img-fluid custom-image" />
            </div>
            <div className="col-md-6 target">
              <h3><b>Mid-Autumn Festival</b></h3>
              <p>
                The Mid-Autumn Festival, also known as the Moon Festival, is celebrated on the 15th day of the 8th
                month in the lunar calendar. This day is marked by a full moon, which the Chinese believe is at its
                brightest and fullest. The festival coincides with the harvest season in the middle of autumn. During
                this time, people adorn the streets with lanterns of various colors, sizes, and shapes, symbolizing
                hope and prosperity for the future. Mooncakes, a traditional pastry filled with bean paste, egg yolk,
                meat, or lotus seed paste, are a popular treat enjoyed during the festival. The origins of the Mid-Autumn
                Festival are rooted in the legend of Chang'e, the revered Moon goddess in Chinese mythology.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target">
              <img src={image3} alt="dragonboat Image" className="img-fluid custom-image" />
            </div>
            <div className="col-md-6 target">
              <h3><b>Dragon Boat Festival</b></h3>
              <p>
                The Mid-Autumn Festival, as per a widely known legend in modern China, commemorates Qu Yuan,
                a poet and minister from the Chu state during the Warring States period of the Zhou dynasty.
                Qu Yuan drowned himself in the Miluo River out of despair, prompting locals to rush out in
                boats to rescue him or retrieve his body. This event is said to have led to the tradition
                of dragon boat races. Unable to find his body, they threw sticky rice balls into the river,
                hoping that the fish would eat them instead of Qu Yuan's remains. This is believed to be the
                origin of zongzi, a traditional food associated with the festival.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4" id="indianSection">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2><b>Indian</b></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 target">
              <h3><b>Deepavali</b></h3>
              <p>
                Deepavali, also called Diwali, is a beloved festival observed by Hindus and the Indian diaspora.
                Known as the "Festival of Lights," it symbolizes the victory of light over darkness and good over
                evil. During this festival, homes, streets, and public areas are illuminated with oil lamps and
                colorful lights, creating a beautiful ambiance. Deepavali commemorates the return of Lord Rama,
                Sita, and Lakshmana to Ayodhya after defeating the demon king Ravana, as recounted in the epic
                Ramayana. It also honors Goddess Lakshmi, representing wealth and prosperity. Deepavali is a time
                for family gatherings, feasting, exchanging gifts, and spreading joy, fostering a sense of unity
                and rejuvenation within communities.
              </p>
            </div>
            <div className="col-md-6 target">
              <img src={image4} alt="deepavali Image" className="img-fluid custom-image" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target">
              <img src={image5} alt="thaipusam Image" className="img-fluid custom-image" />
            </div>
            <div className="col-md-6 target">
              <h3><b>Thaipusam</b></h3>
              <p>
                Thaipusam is a lively Hindu festival predominantly celebrated by the Tamil community. This
                annual event, usually held in January or February, honors Lord Murugan, the Hindu deity of
                war and victory. Devotees demonstrate their dedication and seek blessings through unique acts
                of penance, such as piercing their bodies with hooks and carrying elaborate kavadis (ornate structures).
                The festival is a vibrant and spiritual affair, attracting participants and spectators from both local
                and international communities. Thaipusam highlights the enduring faith, self-sacrifice, and communal
                unity, making it a captivating and spiritually fulfilling occasion.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target">
              <h3><b>Pongal</b></h3>
              <p>
                Pongal is a significant harvest festival celebrated with enthusiasm by Tamil Hindus in Southern India,
                usually in January. This four-day festival celebrates the abundant harvest season and offers thanks to
                the sun god, Surya, and the farm animals crucial to agriculture. A key aspect of Pongal is the
                preparation of a special dish called "Pongal," made with freshly harvested rice, jaggery, and other
                ingredients. Traditional music, dance, and colorful kolam (rangoli) decorations are integral parts of
                the festivities. Pongal symbolizes gratitude, unity, and the enduring agrarian traditions that have
                been central to Tamil culture for generations.
              </p>
            </div>
            <div className="col-md-6 target">
              <img src={image6} alt="Mandala Rangoli Image" className="img-fluid custom-image" />
            </div>
          </div>

        </div>

        <div className="container mt-4" id="malaySection">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2><b>Malay</b></h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target">
              <img src={image7} alt="hariRayaAildilfirtri" className="img-fluid custom-image" />
            </div>
            <div className="col-md-6 target">
              <h3><b>Hari Raya Aidilfitri</b></h3>
              <p>

                Hari Raya Aidilfitri, also known as Eid al-Fitr, is a joyful and sacred celebration in Malay
                culture. It signifies the end of Ramadan, the Islamic month of fasting and reflection. Families
                gather to break their fast, attend mosque prayers, and exchange warm greetings. Colorful decorations
                adorn homes, and the tradition of giving and receiving gifts is cherished. This festival reflects
                the values of forgiveness, gratitude, and unity among Muslims, symbolizing the triumph of spiritual
                devotion over worldly desires.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target">
              <h3><b>Hari Raya Aidiladha</b></h3>
              <p>

                Hari Raya Aidiladha, also known as Eid al-Adha or the Festival of Sacrifice, is a significant
                event in Malay culture. It honors the willingness of Prophet Ibrahim (Abraham) to sacrifice
                his son Isma'il (Ishmael) as an act of obedience to God. Muslims throughout Malaysia participate
                in the Qurban ritual by sacrificing animals and sharing the meat with those in need, highlighting
                the importance of charity and empathy. This occasion is a time for spiritual contemplation, prayer,
                and fostering community unity.
              </p>
            </div>
            <div className="col-md-6 target">
              <img src={image8} alt="hariRayaHaji" className="img-fluid custom-image" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 target">
              <img src={image9} alt="maulidurRasul" className="img-fluid custom-image" />
            </div>
            <div className="col-md-6 target">
              <h3><b>Maulidur Rasul</b></h3>
              <p>
                Maulidur Rasul, also known as Mawlid al-Nabi, is a significant celebration in Malay culture that
                honors the birth of Prophet Muhammad. This observance is marked with deep religious reverence and
                includes special lectures, processions, and gatherings where the life and teachings of the Prophet
                are remembered. Devotees recite poems and offer prayers, highlighting the importance of emulating
                the Prophet's values of compassion, kindness, and righteousness. The festival fosters a sense of
                spiritual rejuvenation and serves as a reminder of the profound impact of Prophet Muhammad's life
                on the Malay Muslim community.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Culture;