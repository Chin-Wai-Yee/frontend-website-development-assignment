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
  let theme = createTheme();
  let darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  theme = responsiveFontSizes(theme);
  darkTheme = responsiveFontSizes(darkTheme);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <DrawerAppBar />
        <ScrollTopButton />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
};

export default Layout;