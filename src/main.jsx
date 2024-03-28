import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import PageToRead from "./Components/PageToRead/PageToRead";
import UpcomingBooks from "./Components/UpcomingBooks/UpcomingBooks";
import Review from "./Components/Review/Review";
import BookDetails from "./Components/BookDetails/BookDetails";
import ListedBooks from "./Components/ListedBooks/ListedBooks";

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
        path: "/pages-to-read",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/upcoming-books",
        element: <UpcomingBooks></UpcomingBooks>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
