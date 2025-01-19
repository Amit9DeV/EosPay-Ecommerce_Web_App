import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Product/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

      <Footer></Footer>
    </>
  );
}
