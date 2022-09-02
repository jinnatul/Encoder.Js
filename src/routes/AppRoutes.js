import React from "react";
import { Route, Routes } from "react-router-dom";
import MinifyJs from "../components/MinifyJs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/minify-js' element={<MinifyJs />} />
    </Routes>
  );
};

export default AppRoutes;
