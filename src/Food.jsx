import data from './data/foods.json';

import foodBackground from './images/foods/background.jpg';

import React from 'react';
import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const Image = (image) => {
  return (
    require(`${image}`)
  )
}

function ImageCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 'inherit',
        maxHeight: '200',
      }}
      >
      <CardMedia
        component="img"
        image={props.image}
        alt="Paella dish"
        />
      <CardActionArea
        onClick={handleExpandClick}>
        <CardContent>
          <Typography variant="h4" color="text.secondary">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <IconButton
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Typography variant="h6" color="text.secondary">
              Learn More
            </Typography>
            <ExpandMoreIcon
              sx={{
                // Control button to flip when expanded
                transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                transistion: "transform 0.3s",
                duration: 'transition.duration.shortest',
              }}
            />
          </IconButton>
        </CardActions>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" keepMounted>
        <CardContent>
          <Typography paragraph>
            {props.children.map((paragraph) => {
              return (
                <Typography variant='body1' paragraph='true' textAlign='justify'>
                  {paragraph}
                </Typography>
              )
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function ImageCardList(props) {
  return (
    <>
      <Typography variant='h3' textAlign='center'>
        {props.category} Foods
      </Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5}>
        {props.data
        .filter((food) => food.category === props.category)
        .map((food) => {
          return (
            <ImageCard title={food.title} image={Image(food.image)} key={food.title}>
              {food.description}
            </ImageCard>
          )
        }
        )}
      </Masonry>
    </>
  );
}

function Food() {

  return (
    <div>
      <TitleBoxWithBackground background={foodBackground}>
        <Typography variant='h2' textAlign='center'>
          Traditional Food in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      <Box padding={4}>
        <ImageCardList data={data} category='Chinese'/>
        <ImageCardList data={data} category='Indian'/>
        <ImageCardList data={data} category='Malay'/>
      </Box>
    </div>
  );
}

export default Food;