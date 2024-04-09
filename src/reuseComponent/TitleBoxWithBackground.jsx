import React from 'react';
import Box from '@mui/material/Box';

function TitleBoxWithBackground(props) {
  return (
    <Box
    display='flex'
    minHeight='100vh'
    justifyContent='center'
    alignItems='center'
    color='grey.50'
    padding={5}
    sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {props.children}
    </Box>
  );
}

export default TitleBoxWithBackground;