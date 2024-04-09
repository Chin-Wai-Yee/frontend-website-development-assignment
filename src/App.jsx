// Importing modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Ethinicity from "./Ethinicity";
import Games from "./Games";
import Food from "./Food";
import Culture from "./Culture";
import ContactUs from "./ContactUs";
import SignInSide from "./SignInSide";
import ScrollToTop from "./reuseComponent/ScrollToTop";

function App() {
  
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ethnicity" element={<Ethinicity />} />
          <Route path="games" element={<Games />} />
          <Route path="food" element={<Food />} />
          <Route path="culture" element={<Culture />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<SignInSide />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;