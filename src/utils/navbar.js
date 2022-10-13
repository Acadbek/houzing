import React, { lazy, Suspense } from "react";
import useID from "../hooks/useID";
import SigninPage from "../pages/Signin";

const PropertiesPage = lazy(() => import("../pages/Properties"));
const HomePage = lazy(() => import("../pages/Home"));
const HouseItemPage = lazy(() => import("../pages/HouseItem"));

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
    element: <SigninPage />,
    title: "SigninPage",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useID,
    element: (
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <HouseItemPage />
      </Suspense>
    ),
    title: "Properties's single page",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
];

export default navbar;
