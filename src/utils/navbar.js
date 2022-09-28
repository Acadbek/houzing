// import useUniqueID from "../hooks/useID";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
];

export default navbar;
