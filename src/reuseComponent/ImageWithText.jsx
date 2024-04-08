import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ImageWithText({ children, image, title, imageOnRight = false }) {
  let imageOrder;
  if (imageOnRight) {
    imageOrder = 3;
  }
  else {
    imageOrder = 1;
  }

  return (
    <Grid columnSpacing={8} container maxWidth='100%' display='flex'>
      <Grid item
        order={{ xs: 1, md: imageOrder }}
        xs={12} md={5}
      >
        <Box
          component='img'
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '60vh',
            objectFit: 'cover',
          }}
        />
      </Grid>
      <Grid item
        xs={12} md={7}
        order={2}
      >
        <Typography variant='h4'
          sx={{
            marginTop: { xs: '1rem', md: 0 },
            marginBottom: '1rem'
          }}
        >
          {title}
        </Typography>
        <Typography variant='body1' paragraph textAlign='justify'>
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ImageWithText;