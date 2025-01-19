import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Product/>} />
      </Routes>

      <Footer></Footer>
    </>
  );
}
