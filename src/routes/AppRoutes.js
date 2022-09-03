import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MinifyJs from "../components/MinifyJs";
import MinifyCss from "../components/MinifyCss";
import MinifyHtml from "../components/MinifyHtml";
import BeautifyJson from "../components/BeautifyJson";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minify-js" element={<MinifyJs />} />
      <Route path="/minify-css" element={<MinifyCss />} />
      <Route path="/minify-html" element={<MinifyHtml />} />

      <Route path="/beautify-js" element={<MinifyJs />} />
      <Route path="/beautify-css" element={<MinifyCss />} />
      <Route path="/beautify-html" element={<MinifyHtml />} />
      <Route path="/beautify-json" element={<BeautifyJson />} />
    </Routes>
  );
};

export default AppRoutes;
