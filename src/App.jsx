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
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { RouterProvider, createHashRouter } from "react-router-dom";

const route = [
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/ethnicity",
        element: <Ethnicity />
      },
      {
        path: "/games",
        element: <Games />
      },
      {
        path: "/food",
        element: <Food />
      },
      {
        path: "/culture",
        element: <Culture />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/user/",
        children: [
          {
            element: <SignInSide />,
            children: [
              {
                path: "signin",
                element: <SignIn />
              },
              {
                path: "signup",
                element: <SignUp />
              }
            ]
          },
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
    ],
  },
]

const router = createHashRouter(
  route
);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;