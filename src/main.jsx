import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import PageToRead from "./Components/PageToRead/PageToRead";
import UpcomingBooks from "./Components/UpcomingBooks/UpcomingBooks";
import Review from "./Components/Review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pages to read",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/upcoming books",
        element: <UpcomingBooks></UpcomingBooks>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
