import React from "react";
import "./index.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen  max-h-[450px] w-full usual-design flex justify-center   max-y-1xl overflow-hidden">
      <div className="flex flex-row  justify-between w-full max-w-7xl px-5 mt-20">
        <div className="flex flex-col space-y-8 max-w-lg">
          <h1 className="text-4xl font-bold">Transform Food Waste Into Opportunities</h1>
          <h2 className="text-xl">Manage both edible and inedible food waste. Donate, sell, or buy surplus food and help make a positive impact on the community.</h2>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105">
            Join The Move
          </button>
        </div>
        <div className="flex-shrink-0 -m-4">
          <Image
            src={"/heroimagedesign.png"}
            width={500}
            height={400}
            alt="food"
            className="image-design"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;