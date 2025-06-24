import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import App from "../App";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          const res = await fetch("/project.json");
          const data = await res.json();
          return data.find((project) => project.id === Number(params.id));
        },
      },
    ],
  },
]);

export default router;
