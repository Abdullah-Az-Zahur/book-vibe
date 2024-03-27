import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import MainLayout from "../layouts/MainLayout";
import PageToRead from "../pages/PageToRead";
import BookDetails from "../components/BookDetails";
import Readed from "../components/Readed";
import Wishlist from "../components/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
        children: [
          {
            path: `/ListedBooks/Readd`,
            element: <Readed></Readed>
          },
          {
            path: `/ListedBooks/wishlist`,
            element: <Wishlist></Wishlist>
          }
        ],
      },
      {
        path: '/PageToRead',
        element: <PageToRead></PageToRead>
      },
      {
        path: `/book/:id`,
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/books.json`)
      }
    ]
  },

]);