import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import background from "./images/about/background1.jpg";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const styles = {
  centerItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    AspectRatio: 16/9,
    minWidth: '50vw',
    width: '100%',
  }
}

function AboutSection({ title, children }) {

  return (
    <Box
      sx={styles.centerItems}
      height='100vh'
    >
      <Stack
        paddingY={4}
        paddingX={6}
        bgcolor='background.paper'
        width={{ xs: '100%', md: '80%' }}
        sx={styles.centerItems}
      >
        <Typography variant="h2" marginBottom="1rem" textAlign='center'>
          {title}
        </Typography>
        <Divider sx={{ border: 1, marginBottom: '1rem' }} />
        <Box>
          {children}
        </Box>
      </Stack>
    </Box>
  );
}

function About() {
  return (
    <Stack
      direction='column'
      spacing={5}
      paddingX={{ xs: 4, md: 12 }}
      justifyContent='center'
      alignItems='center'
      width='100%'
      sx={{
        '&::before': {
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
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
      <AboutSection title="About This Page">
        <Typography
          variant="body1"
          marginBottom="2rem"
          textAlign='justify'
        >
          Aku Malaysian is a website that showcases the beauty of Malaysia. Malaysia is a country in
          Southeast Asia that is known for its diverse culture, rich history, and beautiful landscapes. On this website, you can learn more about Malaysia
          and its people, explore different aspects of Malaysian culture, and discover the unique traditions and customs of this vibrant country.
        </Typography>
      </AboutSection>
      <AboutSection title="We are from UTAR!">
        <Typography
          variant="body1"
          marginBottom="2rem"
          textAlign='justify'
        >
          This website is created by a group of students from Universiti Tunku Abdul Rahman (UTAR) as part of our Web Development project. Our goal is to promote awareness and appreciation of Malaysian culture and heritage, and to share
          the beauty of our country with the world.
        </Typography>
      </AboutSection>
      <AboutSection title="Do check out our school's video!">
        <LazyLoadComponent>
          <iframe
            src="https://www.youtube.com/embed/5l-EK-foMa8?si=tEbk9EKT5CLg1Y4R"
            title="YouTube video player"
            border={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            sx={styles.video}
          >
          </iframe>
        </LazyLoadComponent>
      </AboutSection>
    </Stack>
  );
}

export default About;