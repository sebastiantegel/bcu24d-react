import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { Movie } from "./pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movie/:id", element: <Movie /> },
    ],
  },
]);
