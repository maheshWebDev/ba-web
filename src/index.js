import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import App from "./App";
import FAQComponent from "./conponents/FAQComponent";
import About from "./conponents/About";
import ServiceSection from "./conponents/ServiceSection";
import Error from "./conponents/Error";
import Contact from "./conponents/Contact";
import Home from "./conponents/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Services",
        element: <ServiceSection />,
      },
      {
        path: "/Contact-us",
        element: <Contact />,
      },
      {
        path: "/faqs",
        element: <FAQComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
