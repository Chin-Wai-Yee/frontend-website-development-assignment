import React from 'react';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import DrawerAppBar from "./reuseComponent/DrawerAppBar";
import ScrollTopButton from "./reuseComponent/ScrollTopButton";
import Footer from "./Footer";

const Layout = () => {
  let lightTheme = createTheme();
  let darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  const [darkMode, setDarkMode] = useState(false);

  function switchTheme() {
    setDarkMode(!darkMode);
  }

  lightTheme = responsiveFontSizes(lightTheme);
  darkTheme = responsiveFontSizes(darkTheme);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <DrawerAppBar toggleTheme={switchTheme} theme={darkMode ? 'light' : 'dark'}/>
        <ScrollTopButton />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
};

export default Layout;