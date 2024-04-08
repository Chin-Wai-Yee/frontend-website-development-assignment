import { Outlet } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import DrawerAppBar from "./reuseComponent/DrawerAppBar";
import ScrollTop from "./reuseComponent/ScrollTop";
import Footer from "./Footer";

const Layout = () => {
  let theme = createTheme();
  let darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <ScrollTop />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
};

export default Layout;