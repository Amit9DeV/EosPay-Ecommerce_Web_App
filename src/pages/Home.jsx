import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import ProductCard from "../components/ProductCard";
import { images } from "../data/Images";
export default function Home() {
  const slidingImg = [
    "/images/hideAndSeekBanner.jpg",
    "/images/tataSaltBanner.png",
    "/images/Maggi.jpg",
  ];
  const ProductID = (i)=>{
  let data = JSON.parse(localStorage.getItem("Cart")) || [];
  data.push(i);
  localStorage.setItem("Cart",JSON.stringify(data))
  }

  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {slidingImg.map((Element, index) => {
            return (
              <CarouselItem className="w-full">
                <img loading="lazy"
                  className="w-full h-[35vh] md:h-[80vh]"
                  key={index + 2}
                  src={Element}
                  alt=""
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="py-8 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <h1 className="text-4xl font-semibold pt-1 pb-2">New Launches</h1>
          <Carousel w-full max-w-sm >
            <CarouselContent className="gap-1 md:gap-3 py-2">
              {images.map((e, i) => {
                return (
                  <CarouselItem className="basis-1/10  ">
                    {<ProductCard Element={e} index={i} ProductId = {ProductID} />}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold  pt-6 pb-2">
            Popular Products
          </h1>
          <Carousel w-full max-w-sm>
            <CarouselContent className="gap-1 md:gap-3 py-2">
              {images.map((e, i) => {
                return (
                  <CarouselItem className="basis-1/10  ">
                    {<ProductCard Element={e} index={i}  ProductId = {ProductID}/>}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold  pt-6 pb-2">
            Recenty Added Products
          </h1>
          <Carousel w-full max-w-sm>
            <CarouselContent className="gap-1 md:gap-3 py-2">
              {images.map((e, i) => {
                return (
                  <CarouselItem className="basis-1/10 ">
                    {<ProductCard Element={e} index={i} ProductId = {ProductID}/>}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
