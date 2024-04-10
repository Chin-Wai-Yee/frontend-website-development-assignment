// Importing modules
import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Ethnicity from "./Ethnicity";
import Games from "./Games";
import Food from "./Food";
import Culture from "./Culture";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";
import SignInSide from "./SignInSide";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route = [
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/ethnicity", Component: Ethnicity },
      { path: "/games", Component: Games },
      { path: "/food", Component: Food },
      { path: "/culture", Component: Culture },
      { path: "/contact-us", Component: ContactUs },
      { path: "/login", Component: SignInSide },
      { path: "*", Component: NotFound },
    ],
  },
]

const router = createBrowserRouter(
  route,
  {
    basename: process.env.PUBLIC_URL,
  }
);

// function Root () {
//   return (
//     <Routes>
//         <Route path="about" element={<About />} />
//         <Route path="ethnicity" element={<Ethnicity />} />
//         <Route path="games" element={<Games />} />
//         <Route path="food" element={<Food />} />
//         <Route path="culture" element={<Culture />} />
//         <Route path="contact-us" element={<ContactUs />} />
//         <Route path="login" element={<SignInSide />}/>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   )
// }

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;