import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FormPage from "../pages/FormPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
]);

export default Route;
