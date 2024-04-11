import React from 'react';
import { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import catDrift from './images/notFound/cat-drift.gif';
import catJudging from './images/notFound/cat-judging.gif';
import nyanCat from './images/notFound/nyan-cat.gif';
import blahBlahGoat from './images/notFound/blah-blah-goat.gif';
import meowCat from './images/notFound/meow-cat.gif';
import headacheCat from './images/notFound/headache-cat.gif';

export function useCountdown(seconds, onEnd) {
  let [remaining, setRemaining] = React.useState(seconds);

  React.useEffect(() => {
    function tick() {
      setRemaining(remaining - 1);
    }

    const countdown = setInterval(tick, 1000);

    if (remaining <= 0) {
      clearInterval(countdown);
      onEnd();
    }

    return () => clearInterval(countdown);
  }, [remaining]);

  return remaining;
}

function NotFoundContent(props) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const onCountdownEnd = () => {
    return navigate('/');
  }
  let message = "";
  if (count === 5) {
    message = "You try to resist the force pulling you back to the main menu, but it's too strong!";
  }
  else {
    message = "You are on your way back to the main menu !";
  }

  if (props.backToMain) {
    return (
      <CountDownView onCountdownEnd = {onCountdownEnd}>
          {message}
      </CountDownView>
    );
  }
  else {
    return (
      <GameView
        count={count}
        addCount={() => setCount(count+1)}
        handleBackToMain={props.handleBackToMain}
      />
    );
  }
}

function GameView(props) {

  const simpleGame = [
    {
      question: "Hey adventurer, you seem lost in this wild land. Need a hand getting back?",
      image: catDrift,
      answerYes: "Yes Please!",
      answerNo: "No, I'm good",
    },
    {
      question: "Are you sure? This place isn't meant for travelers like you.",
      image: catJudging,
      answerYes: "Alright, I'll take your help.",
      answerNo: "I can handle it myself.",
    },
    {
      question: "You find a portal that seems to lead back to the main menu. Should you enter it?",
      image: nyanCat,
      answerYes: "Yes, I want to go back to the main menu.",
      answerNo: "No, I want to continue exploring.",
    },
    {
      question: "A voice in your head tells you to return to the main menu. Do you listen to it?",
      image: blahBlahGoat,
      answerYes: "Yes, I trust this voice.",
      answerNo: "No, I want to make my own decisions.",
    },
    {
      question: "You see a sign pointing towards the main menu. Do you follow it?",
      image: meowCat,
      answerYes: "Yes, I want to see what's in the main menu.",
      answerNo: "No, I'm not done here yet.",
    },
    {
      question: "A mysterious force is pulling you back to the main menu. Will you go with it?",
      image: headacheCat,
      answerYes: "Yes, take me back to the main menu.",
      answerNo: "No, I want to stay here.",
    }
  ];

  const handleYesClick = () => {
    props.handleBackToMain();
  }

  const handleNoClick = () => {
    if (props.count < 5) {
      props.addCount();
    }
    else {
      props.handleBackToMain();
    }
  }

  return (
    <Stack
      minHeight='100vh'
      height='auto'
      width= {{xs: '100%', md: '50%'}}
      direction='column'
      alignItems='center'
      justifyContent='center'
      bgcolor='white'
      spacing={2}
      paddingY={4}
      paddingX={6}
    >
      <Box
        component={'img'}
        src={simpleGame[props.count].image}
        alt='404 Not Found'
        width='auto'
        maxWidth='50vw'
        height='50vh'
      />
      <Typography color='text.primary' variant='h2' align='center' display={props.count === 0 ? 'block' : 'none'}>
        404 Not Found
      </Typography>
      <Typography color='text.secondary' variant='body1' textAlign='center'>
        {simpleGame[props.count].question}
      </Typography>
      <Button onClick={handleYesClick} color='success' variant='outlined'>
        {simpleGame[props.count].answerYes}
      </Button>
      <Button onClick={handleNoClick} variant='outlined'>
        {simpleGame[props.count].answerNo}
      </Button>
    </Stack>
  )
}

function CountDownView(props) {
  const countdown = useCountdown(5, props.onCountdownEnd);

  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
        height='auto'
        width = {{xs: '100%', md: '50%'}}
        spacing = {4}
        padding={8}
        bgcolor='white'
      >
        <Typography variant='h4' color='black'>
          {props.children}
        </Typography>
        <Typography variant='h4' color='black'>
          You will be redirected to the main page in <strong>{countdown}</strong> seconds.
        </Typography>
      </Stack>
    </>
  );
}

function NotFound() {
  const [backToMain, setBackToMain] = useState(false);

  return (
    <Box
      minHeight='100vh'
      height='auto'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558158539-226f4a45f7b3')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NotFoundContent
        backToMain={backToMain}
        handleBackToMain={() => setBackToMain(!backToMain)}
      />
    </Box>
  );
}

export default NotFound;