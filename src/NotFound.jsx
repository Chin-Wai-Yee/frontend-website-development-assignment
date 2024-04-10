import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import catDrift from './images/notFound/cat-drift.gif';

function NotFound() {
  const [count, setCount] = useState(0);

  return (
    <Box
      padY = {0}
      padX = {8}
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558158539-226f4a45f7b3')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Stack
        direction='column'
        spacing={2}
        padding={8}
        minHeight='100%'
        alignItems='center'
        justifyContent='center'
        height='100%'
        maxWidth='sm'
        bgcolor='background.paper'
        >
        <Box
          component={'img'}
          src={catDrift}
          alt='404 Not Found'
          width='auto'
          height='50vh'
          />
        <Typography color='text.primary' variant='h2' align='center'>
          404 Not Found
        </Typography>
        <Box>
          <Typography color='text.secondary' variant='body1' align='center'>
            Dear traveler, seems like you have lost you way in the realm of the unknown. Do you need me to guide you back?
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default NotFound;