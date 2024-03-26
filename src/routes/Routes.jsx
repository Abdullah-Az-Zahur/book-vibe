import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import MainLayout from "../layouts/MainLayout";
import PageToRead from "../pages/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('books.json')
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/PageToRead',
        element: <PageToRead></PageToRead>
      }
    ]
  },

]);