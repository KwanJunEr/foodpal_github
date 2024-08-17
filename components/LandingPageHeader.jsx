import React from "react";
import Image from "next/image";

const LandingPageHeader = ({handleLoggedIn}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-[#C0360B] h-16 px-6 shadow-md">
      <div className="text-white">
        <h1 className="text-2xl font-extrabold">FoodPal</h1>
      </div>
     
      <div>
        <button className="p-2 bg-red-600 rounded-lg shadow-lg font-semibold text-white hover:bg-red-700 transition-transform transform hover:scale-105 duration-200" onClick={handleLoggedIn}>
          Connect Wallet
        </button>
      </div>
      
    </div>
  );
};

export default LandingPageHeader;


