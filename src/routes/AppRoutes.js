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
      <Route path="/" element={<Home />} key={1}/>
      <Route path="/minify-js" element={<MinifyJs type="minify" />} key={2}/>
      <Route path="/minify-css" element={<MinifyCss type="minify" />} key={3}/>
      <Route path="/minify-html" element={<MinifyHtml type="minify" />} key={4}/>

      <Route path="/beautify-js" element={<MinifyJs type="beautify" />} key={5}/>
      <Route path="/beautify-css" element={<MinifyCss type="beautify" />} key={6}/>
      <Route path="/beautify-html" element={<MinifyHtml type="beautify" />} key={7}/>
      <Route path="/beautify-json" element={<BeautifyJson />} key={8}/>
    </Routes>
  );
};

export default AppRoutes;
