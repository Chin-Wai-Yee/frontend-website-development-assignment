import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  const theme = useTheme();
  let bgColor, textColor;
  if (theme.palette.mode === 'light') {
    bgColor = 'primary.main';
    textColor = 'primary.contrastText';
  }
  else {
    bgColor = 'background.paper';
    textColor = 'text.primary';
  }

  return (
    <footer>
      <Box bgcolor={bgColor} color={textColor} height='100px' width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='inherit' display='block' variant="body1" align="center">
          © {new Date().getFullYear()} All rights reserved | Aku Malaysian
        </Typography>
        <Stack color='inherit' direction='row' spacing={2} alignItems='center' justifyContent='center'>
          <IconButton color='inherit' component={Link} href="https://www.facebook.com" target='_blank' rel='noopener'>
            <FacebookIcon/>
          </IconButton>
          <IconButton color='inherit' component={Link} href="https://www.youtube.com" target='_blank' rel='noopener'>
            <YouTubeIcon/>
          </IconButton>
          <IconButton color='inherit' component={Link} href="https://www.instagram.com" target='_blank' rel='noopener'>
            <InstagramIcon/>
          </IconButton>
          <IconButton color='inherit' component={Link} href="mailto:noreply.gmail.com" target='_blank' rel='noopener'>
            <EmailIcon/>
          </IconButton>
        </Stack>
      </Box>
    </footer>
  );
}

export default Footer;