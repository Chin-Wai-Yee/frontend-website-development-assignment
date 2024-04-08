import React from 'react';
import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import Typography from '@mui/material/Typography';
import ethnicityBackground from './images/ethnicity/background2.jpg';
import data from './data/ethnicity.json';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageWithText from './reuseComponent/ImageWithText';

const Image = (image) => {
  return (
    require(`${image}`)
  )
}

function Ethinicity() {
  return (
    <Box>
      <TitleBoxWithBackground background={ethnicityBackground}>
        <Typography variant='h2' textAlign='center'>
          Ethinicity in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      
      <Stack spacing={5} padding={4}>
        {data.map((ethnic) => {
          return (
            <ImageWithText image={Image(ethnic.image)} title={ethnic.ethnic}>
              {ethnic.description}
            </ImageWithText>
          )
          })}
      </Stack>
    </Box>
  );
};

export default Ethinicity;
