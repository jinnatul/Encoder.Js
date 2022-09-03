import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MinifyJs from "../components/MinifyJs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minify-js" element={<MinifyJs />} />
      <Route path="/beautify-js" element={<MinifyJs />} />
    </Routes>
  );
};

export default AppRoutes;
