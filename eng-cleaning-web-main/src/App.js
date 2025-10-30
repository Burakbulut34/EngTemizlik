import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OfficeCleaning from "./pages/OfficeCleaning";
import HomeCleaning from "./pages/HomeCleaning";
import WindowCleaning from "./pages/WindowCleaning";
import SofaCleaning from "./pages/SofaCleaning";

function App() {
  return (
    <>
      <Header />
        <Routes>

          <Route path="/" element={<Home withHelmet={true}/>} />
          <Route path="/services.html" element={<Services withHelmet={true}/>} />
          <Route path="/about.html" element={<About withHelmet={true}/>} />
          <Route path="/contact.html" element={<Contact withHelmet={true}/>} />
          <Route path="/OfficeCleaning.html" element={<OfficeCleaning withHelmet={true}/>} />
          <Route path="/HomeCleaning.html" element={<HomeCleaning withHelmet={true}/>} />
          <Route path="/WindowCleaning.html" element={<WindowCleaning withHelmet={true}/>} />
          <Route path="/SofaCleaning.html" element={<SofaCleaning withHelmet={true}/>} />



          {/* 404 sayfası */}
        </Routes>
        <Footer />

    </>
  );
}

export default App;
