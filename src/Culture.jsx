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
import ImageWithText from './reuseComponent/ImageWithText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import cultureData from './data/cultures.json';


function Culture() {

  const races = ['Chinese', 'Indian', 'Malay']

  return (
    <div>
      <TitleBoxWithBackground background={cultureBackground}>
        <Typography variant='h2' textAlign='center'>
          Culture in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      {
        races.map((race) => {
          return (
            <>
              <Typography variant='h3' marginBottom='1rem' padding={4}>
                {race}
              </Typography>
              <Stack spacing={6} marginBottom='0.5rem'>
                {
                  cultureData
                    .filter((culture) => {
                      return culture.category === race;
                    })
                    .map((culture, index) => {
                      return (
                        <ImageWithText
                          image={require(`${culture.image}`)}
                          title={culture.name}
                          imageOnRight={index % 2 === 1 ? true : false}
                        >
                          {culture.description}
                        </ImageWithText>
                      );
                    })
                }
              </Stack>
            </>
          )
        })
      }
    </div>
  );
};

export default Culture;