import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Feed from "./pages/Feed";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import MaintenancePopup from "./components/MaintenancePopup"; // 👈 import

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <MaintenancePopup /> {/* 👈 Show popup here */}

        <section className="my-container mb-[25px!important] md:mt-16 ">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
