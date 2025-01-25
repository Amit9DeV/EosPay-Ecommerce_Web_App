import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Product/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
      </Routes>

      <Footer></Footer>
    </>
  );
}
