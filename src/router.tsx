import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import CreateBook from "./Pages/CreateBook/CreateBook";
import Header from "./Components/Header/Header";
import Books from "./Pages/Books/Books";
import Book from "./Pages/Book/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      { index: true, loader: () => redirect("/products") },
      {
        path: "products",
        element: <Books />,
      },
      {
        path: "products/:id",
        element: <Book />,
      },
      {
        path: "create-product",
        element: <CreateBook />,
      },
    ],
  },
]);
