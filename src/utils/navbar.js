import React, { lazy, Suspense } from "react";
import useID from "../hooks/useID";
const PropertiesPage = lazy(() => import("../pages/Properties"));
const HomePage = lazy(() => import("../pages/Home"));

export const navbar = [
  {
    id: useID,
    element: (
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <HomePage />
      </Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useID,
    element: (
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <PropertiesPage />,
      </Suspense>
    ),
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
