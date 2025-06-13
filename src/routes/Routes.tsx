import { createBrowserRouter, Outlet } from "react-router-dom";
import Users from "../pages/users/Users";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import Demandes from "../pages/demandes/Demandes";
import UsersDetail from "../pages/usersDetail/UsersDetail";
import DemandesDetail from "../pages/demandesDetail/DemandesDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "me",
        element: <Dashboard />,
        children: [
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "users/:userId",
            element: <UsersDetail />,
          },
          {
            path: "demandes",
            element: <Demandes />,
          },
          {
            path: "demandes/:demandeId",
            element: <DemandesDetail />,
          },
        ],
      },
    ],
  },
]);

export { routes, Outlet };
