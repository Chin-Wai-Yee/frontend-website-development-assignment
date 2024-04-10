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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useWindowDimensions from './reuseComponent/useWindowDimensions';

function DescriptionModal(props) {

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      
      }}
    >
      <Grid
        container
        sx={{
          padding: 4,
          maxHeight: 'inherit',
          height: '80vh',
          width: '80vw',
          backgroundColor: 'background.paper',
        }}>
        <Grid xs={6} display='flex' justifyContent='center'>
          <img
            src={props.image} alt={props.title}
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              maxHeight: '60vh',
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid xs={6} alignContent='center' padding={4} maxHeight='70vh'>
          <Box maxHeight='100%' overflow='auto' paddingRight='1rem'>
            <Stack marginLeft={-1} direction='row' marginBottom='2rem'>
              <IconButton onClick={props.onClose}>
                <ArrowBackIcon/>
              </IconButton>
              <Typography variant='h4'>
                {props.title}
              </Typography>
            </Stack>
            {props.description.map((paragraph) => {
              return (
                <Typography variant='body1' textAlign='justify' marginBottom='1rem'>
                  {paragraph}
                </Typography>
              );
            })}

          </Box>
        </Grid>
      </Grid>
    </Modal>
  )
}
const Image = (image) => {
  return (
    require(`${image}`)
  )
}

function ImageCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  
  const theme = useTheme();
  const { height, width } = useWindowDimensions();

  return (
    <Card
      sx={{
        maxWidth: 'inherit',
      }}
      >
      <CardActionArea
        onClick={width < theme.breakpoints.values.md ? handleExpandClick : handleModalOpen}
      >
        {/* image here */}
        <CardMedia
          component="img"
          image={props.image}
          alt={props.title}
          sx={{
            maxHeight: '35vh',
          }}
        />
        {/* title here */}
        <CardContent>
          <Typography variant="h4" color="text.secondary">
            {props.title}
          </Typography>
        </CardContent>
        {/* button */}
        <CardActions disableSpacing sx={{
          display:{xs: 'flex', md: 'none'},
          justifyContent: 'flex-end',
        }}>
          <IconButton
            aria-expanded={expanded}
            aria-label={expanded ? 'show less' : 'show more'}
          >
            <Typography variant="h6" color="text.secondary">
              {expanded ? 'Show Less' : 'Show More'}
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
      <DescriptionModal open={modalOpen} onClose={handleModalClose} title={props.title} image={props.image} description={props.children}/>
      <Collapse in={expanded} timeout="auto" keepMounted>
        <CardContent onClick={handleExpandClick} >
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
      <Divider sx={{
        border: 1,
        marginTop: '1rem',
        marginBottom: '2rem',
      }}/>
      <Box>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 0, sm: 5}}>
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
      </Box>
    </>
  );
}

function Food() {

  const categories = ['Chinese', 'Indian', 'Malay'];

  return (
    <div>
      <TitleBoxWithBackground background={foodBackground}>
        <Typography variant='h2' textAlign='center'>
          Traditional Food in Malaysia
        </Typography>
      </TitleBoxWithBackground>
      <Box padding={4} bgcolor='background.paper'>
        {categories.map((category) => {
          return (
            <ImageCardList data={data} category={category}/>
          )
        })}
      </Box>
    </div>
  );
}

export default Food;