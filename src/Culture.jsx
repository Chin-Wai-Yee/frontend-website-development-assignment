// import './css/Culture.css';
import React from 'react';
import cultureBackground from './images/cultures/background.jpg';

import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import ImageWithText from './reuseComponent/ImageWithText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import cultureData from './data/cultures.json';


function Culture() {

  const races = ['Chinese', 'Indian', 'Malay']

  return (
    <>
      <TitleBoxWithBackground background={cultureBackground}>
        <Typography variant='h2' textAlign='center'>
          Culture in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      <Box bgcolor='background.paper' padding={4}>
        {
          races.map((race) => {
            return (
              <>
                <Typography variant='h3' marginBottom='1rem' padding={4} key={race + 'culture title'}>
                  {race}
                </Typography>
                <Stack spacing={6} marginBottom='0.5rem' key={race + 'culture stack'}>
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
                            key={culture.name + 'culture' + index}
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
      </Box>
    </>
  );
};

export default Culture;