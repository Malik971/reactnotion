import { createBrowserRouter, Outlet } from "react-router-dom";
import Users from "../pages/Users";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "users",
            element: <Users />,
          },
        ],
      },
    ],
  },
]);

export { routes, Outlet };
