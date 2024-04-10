import gameBackground from './images/games/background2.jpg';

import React from 'react';
import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import gameData from './data/games.json';

function GameContent(props) {
  return (
    <Box maxWidth='100%'>
      <Typography variant='h2' textAlign='center' marginBottom='1rem'>
        {props.title}
      </Typography>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        >
        <img
          src={require(`${props.image}`)}
          alt={props.title}
          style={{
            width: '60vw',
            height: 'auto',
            objectFit: 'contain',
            marginBottom: '1rem'
          }}
          />
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        paddingX={{sx: 4, md: 8}}
        paddingY={2}
        marginBottom='1rem'
      >
        <Typography maxWidth='sm' variant='body1' textAlign='justify'>
          {props.children}
        </Typography>
      </Box>
      <Divider
        variant='middle'
        sx={{
          borderWidth: '0.25rem',
          marginBottom: '1rem'
        }}
      />
    </Box>
  );
}

function Game() {
  return (
    <div>
      <TitleBoxWithBackground background={gameBackground}>
        <Typography variant='h2' textAlign='center'>
          Traditional Game in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      <Stack maxWidth='100%' padding={4} bgcolor='background.paper'>
        {
          gameData.map((game) => {
            return (
              <GameContent title={game.name} image={game.image}>
                {game.description}
              </GameContent>
            );
          })
        }
      </Stack>
    </div>
  );
}

export default Game;