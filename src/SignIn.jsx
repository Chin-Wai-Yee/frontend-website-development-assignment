import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

function SignIn() {

  const navigate = useNavigate();

  if (localStorage.getItem('user')) {
    navigate('/user/profile');
  }

  function handleSubmit(event, navigate) {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then((response) => {
      if (response.ok) {
        sessionStorage.setItem('user', username);
        navigate('/user/profile');
      }
      else {
        throw new Error('Invalid username or password');
      }
    })
    .catch((error) => {
      alert(error.message);
      console.error('Error:', error);
    });
  }

  const handleFormSubmit = (event) => {
    handleSubmit(event, navigate);
  }

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Typography component={Link} to="/user/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignIn;