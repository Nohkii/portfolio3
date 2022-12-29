import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Project from "./component/Project";
import Root from "./component/Root";
import Skills from "./component/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/project", element: <Project /> },
      { path: "/contact", element: <Contact /> },
      { path: "/skills", element: <Skills /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
