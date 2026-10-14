
import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Ifleet from "./component/projects/ifleet/Ifleet";
import PushApp from "./component/projects/push-app/PushApp";
import Nhai from "./component/projects/nhai/Nhai";
import Triggify from "./component/projects/triggify/Triggify";
import Shotlocker from "./component/projects/shotlocker/Shotlocker";
import Leasing from "./component/projects/leasing/Leasing";
import FreeTalk from "./component/projects/freetalk/FreeTalk";
import SmartDoc from "./component/projects/smartdoc/SmartDoc";
import FastMart from "./component/projects/fastmart/FastMart";
import Footer from "./component/layout/Footer";
import ScrollToTop from "./component/layout/ScrollToTop";
import Home from "./component/home/Home";
import NotFound from "./component/pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ifleet" element={<Ifleet />} /> 
        <Route path="/push-app" element={<PushApp />} />
        <Route path="/leasing-scraper" element={<Leasing />} />
        <Route path="/nhai" element={<Nhai />} />
        <Route path="/shotlocker" element={<Shotlocker />} />
        <Route path="/triggify" element={<Triggify />} />
        <Route path="/freetalk" element={<FreeTalk />} />
        <Route path="/smartdoc" element={<SmartDoc />} />
        <Route path="/fastmart" element={<FastMart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);
