import "./About.css"
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function About() {
  return (
    <Box padding={4}>
      <Typography variant="h2" marginBottom="1rem">
        About
      </Typography>
      <Divider sx={{border: 1, marginBottom: '1rem'}}/>
      <Typography variant="body1" marginBottom="2rem" textAlign='justify'>
        Aku Malaysian is a website that showcases the beauty of Malaysia. Malaysia is a country in Southeast Asia that is known for its diverse culture, rich history, and beautiful landscapes. On this website, you can learn more about
        Malaysia
        and its people, explore different aspects of Malaysian culture, and discover the unique traditions and customs of this vibrant country.
      </Typography>
      <Typography variant="h2" marginBottom='1rem'>
        We are from UTAR!
      </Typography>
      <Divider sx={{border: 1, marginBottom: '1rem'}}/>
      <Typography variant="body1" marginBottom="2rem" textAlign='justify'>
        This website is created by a group of students from Universiti Tunku Abdul Rahman (UTAR) as part of our Web Development project. Our goal is to promote awareness and appreciation of Malaysian culture and heritage, and to share
        the beauty of our country with the world.
      </Typography>
      <Typography variant="h3" marginBottom="2rem" textAlign='justify'>
        Do check out our shcool's video!
      </Typography>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/5l-EK-foMa8?si=tEbk9EKT5CLg1Y4R"
        title="YouTube video player"
        border={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
      </iframe>
    </Box>
  );
}

export default About;