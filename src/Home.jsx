import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import { Typewriter } from 'react-simple-typewriter';
import homepageImage from './images/homepage/malaysia.jpg';
import image1 from './images/homepage/img-1.jpg';
import image2 from './images/homepage/img-2.jpg';
import image3 from './images/homepage/img-3.jpg';
import image4 from './images/homepage/img-4.jpg';

function StaticBackgroundBox(props) {

  return (
    <Grid
      container
      color={'text.primary'}
      alignItems='stretch'
    >
      <Grid xs={12} md={7} order={{ xs: 2, md: props.imagePosition === 'left'? 1 : 3}} minHeight={'100vh'}
        sx={{
          backgroundImage: `url(${props.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </Grid>
      <Grid xs={12} md padding={5} bgcolor={'background.paper'} order={{ xs: 1, md: 2}}>
        <Typography variant='h4'>
          {props.title}
        </Typography>
        <Divider
          sx={{
            my: 2,
            borderWidth: 2,
          }}
        />
        <Box>
          {props.children}
        </Box>
      </Grid>
    </Grid>
  );
}

function Home() {

  const [blink, setBlink] = React.useState(true);

  const handleDone = () => {
    console.log('done');
    setBlink(false);
    console.log(blink);
  }
  
  const styles = {
    bodyText: {
      textAlign: 'justify',
      marginBottom: '1rem'
    }
  }

  return (
    <>
      <TitleBoxWithBackground background={homepageImage}>
        <Box display='block'>
          <Typography variant="h1" align='center' marginBottom={1}>
            Aku Malaysian
          </Typography>
          <Typography variant="h4" align='center'>
            <Typewriter
              words={['Welcome to Aku Malaysian!', 'Discover the rich culture of Malaysia']}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </Typography>
        </Box>
      </TitleBoxWithBackground>
      <StaticBackgroundBox background={image1} title="Malaysia's Cultural Diversity" imagePosition='left'>
        <Typography variant='body1' sx={styles.bodyText} paragraph>
          Malaysia is a dynamic fusion of cultures, where Malay, Chinese, Indian, and indigenous traditions intertwine to
          create a vibrant tapestry of diversity. From bustling cities to rural villages, Malaysia's multiculturalism is
          evident in its cuisine, festivals, and customs. Each ethnic group contributes its unique flavors, languages, and
          customs, enriching the nation's cultural landscape. Despite their differences, Malaysians embrace multiculturalism with
          pride, fostering harmony and unity in this melting pot of traditions.
        </Typography>
        <Button component={Link} to="/ethnicity">
          Go to ethnicity
        </Button>
      </StaticBackgroundBox>
      <StaticBackgroundBox background={image2} title="Exploring Malaysia: Rich in Culture, Delicious Food, and Stunning Scenery">
        <Typography variant='body1' sx={styles.bodyText} paragraph>
          Malaysia's culture is a vibrant tapestry woven with diverse influences from its Malay, Chinese, Indian, and indigenous communities. This multicultural blend manifests in various aspects of daily life, from language and religion to art, architecture, and customs. Bahasa Malaysia serves as the official language, while English is widely spoken, alongside various Chinese dialects and Tamil. Religious diversity is embraced, with Islam being the predominant faith, followed by Buddhism, Hinduism, Christianity, and indigenous beliefs.

          Malaysia's natural beauty is equally captivating, boasting pristine beaches, lush rainforests, and breathtaking landscapes. The country is blessed with an abundance of biodiversity, home to diverse flora and fauna. Visitors can explore stunning islands like Langkawi and Penang, trek through ancient rainforests in Taman Negara, or marvel at the majestic peaks of Mount Kinabalu. Urban centers like Kuala Lumpur showcase modern marvels like the iconic Petronas Twin Towers, seamlessly blending with the country's natural wonders.
        </Typography>
        <Button component={Link} to="/games">
          Go to Games
        </Button>
      </StaticBackgroundBox>
      <StaticBackgroundBox background={image3} title="Diverse Faiths in Malaysia: A Harmonious Blend of Religions" imagePosition='left'>
        <Typography variant='body1' sx={styles.bodyText} paragraph>
          In Malaysia, religious diversity is vibrant and integral to society. Islam is the predominant faith among Malays, while Buddhism and Hinduism are embraced by the Chinese and Indian communities, respectively. Christianity is practiced by various groups, alongside indigenous beliefs. Despite differences, Malaysia promotes religious freedom and harmony, evident in its calendar filled with diverse religious festivals that unite the multicultural population.
        </Typography>
        <Button component={Link} to="/food">
          Go to Food
        </Button>
      </StaticBackgroundBox>
      <StaticBackgroundBox background={image4} title="Honoring Variance: Festivities Across Malaysia">
        <Typography variant='body1' sx={styles.bodyText} paragraph>
          Malaysia's festivals embody its cultural diversity, uniting people in celebration. From Eid al-Fitr's feasts to the colorful parades of Chinese New Year and the illuminated streets of Deepavali, each festival showcases cherished traditions and fosters community bonds. These vibrant celebrations offer a glimpse into Malaysia's multicultural essence, emphasizing the spirit of togetherness and mutual respect that defines the nation.
        </Typography>
        <Button component={Link} to="/culture">
          Go to Culture
        </Button>
      </StaticBackgroundBox>
    </>
  );
}


export default Home;