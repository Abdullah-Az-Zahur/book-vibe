import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import MainLayout from "../layouts/MainLayout";
import PageToRead from "../pages/PageToRead";
import BookDetails from "../components/BookDetails";
import Wishlist from "../components/Wishlist";
import Readd from "../components/Readed";
import Contact from "../pages/Contact";
import FrequentlyAskQuestion from "../pages/FrequentlyAskQuestion";

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
            element: <Readd></Readd>,
            loader: () => fetch(`/books.json`)
          },
          {
            path: `/ListedBooks/wishlist`,
            element: <Wishlist></Wishlist>,
            loader: () => fetch(`/books.json`)
          }
        ],
      },
      {
        path: '/PageToRead',
        element: <PageToRead></PageToRead>,
        loader: () => fetch(`/books.json`)
      },
      {
        path: `/book/:id`,
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/books.json`)
      },
      {
        path:`/contact`,
        element:<Contact></Contact>
      },
      {
        path:'/faq',
        element:<FrequentlyAskQuestion></FrequentlyAskQuestion>
      }
    ]
  },

]);