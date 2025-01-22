import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { images } from "../data/Images";

export default function Product() {

  const ProductID = (i) => {
    let data = JSON.parse(localStorage.getItem("Cart")) || [];
    data.push(i);
    localStorage.setItem("Cart", JSON.stringify(data));
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="flex flex-wrap gap-8 md:gap-7 py-9 items-center justify-center md:gap-y-8">
        {images.map((element, index) => {
          return (
            <ProductCard
              key={index+12}
              Element={element}
              index={index}
              ProductId={ProductID}
            />
          );
        })}
      </div>
    </div>
  );
}
