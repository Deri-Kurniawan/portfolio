import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PageNotFound from "../pages/errors/PageNotFound";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
