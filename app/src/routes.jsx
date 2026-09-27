import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Notfound from "./Pages/NotFound/Notfound";
import Layout from "./Components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogdetails/:slug",
        element: <BlogDetails />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default router;
