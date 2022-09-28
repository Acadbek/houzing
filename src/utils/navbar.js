import useID from "../hooks/useID";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useID,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useID,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useID,
    element: <h1>Sing in</h1>,
    title: "Properties",
    path: "/signin",
    private: false,
    hidden: true,
  },
];

export default navbar;
