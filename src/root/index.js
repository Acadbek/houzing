import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/index.tsx";
import navbar from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
