import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

// The drawer app bar that will be displayed on the top of the screen on larger screens
// and on the left side of the screen on smaller screens
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false); // Control for the drawer

  // Control for the dropdown menu in the drawer
  const [drawerDropdownOpen, setDrawerDropdownOpen] = React.useState(true);

  const handleDrawerDropdownClick = (e) => {
    setDrawerDropdownOpen(!drawerDropdownOpen);
    e.stopPropagation(); // Prevent drawer from closing
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // The drawer that will be displayed on the left side of the screen when the screen is small
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Aku Malaysian
      </Typography>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/" key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about" key="About">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact-us" key="Contact Us">
          <ListItemIcon>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={handleDrawerDropdownClick}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Cultures" />
          {drawerDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={drawerDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/ethnicity" sx={{ pl: 4 }}>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Ethnicity" />
            </ListItemButton>
            <ListItemButton component={Link} to="/games" sx={{ pl: 4 }}>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItemButton>
            <ListItemButton component={Link} to="/food" sx={{ pl: 4 }}>
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Food" />
            </ListItemButton>
            <ListItemButton component={Link} to="/culture" sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Culture" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // Control for the dropdown menu in the app bar
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box display='flex'>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component={Link}
              to="/"
              color='inherit'
              variant="h6"
              style={{ textDecoration: 'none' }}
              sx={{
                flexGrow: 1
              }}
            >
              Aku Malaysian
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button component={Link} to="/" color='inherit'>
                Home
              </Button>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
              >
                Cultures
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/ethnicity">Ethnicity</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/games">Games</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/food">Food</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/culture">Culture</MenuItem>
              </Menu>

              <Button component={Link} to="/about" color='inherit'>
                About
              </Button>

              <Button component={Link} to="/contact-us" color='inherit'>
                Contact Us
              </Button>
            </Box>
            <Box>
              <IconButton
                color="inherit"
                aria-label="dark mode"
                onClick={props.toggleTheme}
              >
                {props.theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="account"
                component={Link}
                to="/user/profile"
              >
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Toolbar />
    </>
  );
}

export default DrawerAppBar;