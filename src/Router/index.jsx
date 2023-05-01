import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Signup } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
