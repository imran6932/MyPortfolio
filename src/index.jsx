import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Leasing from "./component/projects/leasing/Leasing";
import Nhai from "./component/projects/nhai/Nhai";
import Triggify from "./component/projects/triggify/Triggify";
import Shotlocker from "./component/projects/shotlocker/Shotlocker";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leasing-scraper" element={<Leasing />} /> 
        <Route path="/nhai" element={<Nhai />} />
        <Route path="/shotlocker" element={<Shotlocker />} />
        <Route path="/triggify" element={<Triggify />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </>
);

export default Home;
