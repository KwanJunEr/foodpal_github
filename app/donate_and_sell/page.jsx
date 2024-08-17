"use client";
import React, { useState } from "react";
import Sell from "./Sell";
import Donate from "./Donate";
import Link from "next/link"

const DonateAndSell = () => {
  // Corrected TypeScript annotation for useState
  const [view, setView] = useState("donate")

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex justify-end">
         
         <Link href={"/donate_and_sell/notification"}>
         <button className="bg-red-200 p-3 rounded-lg shadow-md mr-2 hover:-translate-y-1 transition duration-200 hover:bg-red-700 hover:text-white hover:opacity-80">Notifications</button>
         </Link> 
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="flex container w-1/3 bg-gray-200 rounded-lg border border-black">
          <button
            className={`px-4 w-1/2 rounded-lg ${
              view === "donate"
                ? "bg-red-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setView("donate")}
          >
            Donate
          </button>
          <button
            className={`px-4 w-1/2 rounded-lg ${
              view === "sell" ? "bg-red-700 text-white" : "bg-white text-black"
            }`}
            onClick={() => setView("sell")}
          >
            Sell
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          {view === "donate" && <Donate />}
          {view === "sell" && <Sell />}
        </div>
        <div className="w-1/2 mb-0">
          <img src="/contribution.png" alt="Contribution" />
        </div>
      </div>
    </div>
  );
};

export default DonateAndSell;
