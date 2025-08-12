"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    // <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300 p-0">
      {currentProduct.images?.[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            // width={500}
            // height={500}
            fill //
            priority // ensures the image loads quickly
            // style={{ objectFit: "cover" }}  //
            // className="transition-opacity duration-500 ease-in-out" 
            className="transition-opacity duration-500 ease-in-out object-cover "
            // object-cover: Ensures the image covers the entire area with the same rate ratio

          />
        </div>
      )}
      {/* <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50"> */}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
        {/* <CardTitle className="text-3xl font-bold text-white mb-2"> */}
        <CardTitle className="text-3xl font-bold text-white mb-2 text-center">
          {currentProduct.name}
        </CardTitle>
        {/* {price && price.unit_amount && ( */}
        {price?.unit_amount && (
          <p className="text-xl text-white">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
