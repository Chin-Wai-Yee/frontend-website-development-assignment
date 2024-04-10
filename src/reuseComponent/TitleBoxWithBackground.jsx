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
        overflow: 'clip',
        position: 'relative',
        '&::before': {
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          content: '" "',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          willChange: 'transform',
          zIndex: -1000,
        },
      }}
    >
      {props.children}
    </Box>
  );
}

export default TitleBoxWithBackground;