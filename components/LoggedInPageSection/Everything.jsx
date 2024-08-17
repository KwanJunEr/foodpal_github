"use client";
import React from "react";
import CountUp from "react-countup";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words1 = `Welcome Back To Home Dashboard
`;
const words = [
  {
    text: "Hello",
  },
  {
    text: "Gojo",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Satoru",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Everything = () => {
  return (
    <div className="my-5 mx-7">
      <div className="flex flex-row justify-between space-x-10">
        <div className="mt-5">
          <TypewriterEffectSmooth words={words} />
          <TextGenerateEffect words={words1} />
        </div>
        <div>
          <div className="flex flex-row space-x-6">
            <div className="flex flex-row items-center space-x-6 m-5 bg-gray-10 rounded-md shadow-md py-4 px-10">
              <div className="w-24 h-24 rounded-full bg-[#C14018] flex items-center justify-center space-x-6">
                <div className="text-center text-white text-xs">
                  <p>FoodPal</p>
                  <p>Token</p>
                </div>
              </div>
              <div>
                <p className="text-gray-800 text-sm font-medium">
                  Tokens Earned:
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  <CountUp end={5000} duration={2} />
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-6 m-5 bg-gray-10 rounded-md shadow-md py-4 px-10">
              <div className="w-24 h-24 rounded-full bg-[#C14018] flex items-center justify-center space-x-6">
                <div className="text-center text-white text-xs">
                  <p>Food</p>
                  <p>Point</p>
                </div>
              </div>
              <div>
                <p className="text-gray-800 text-sm font-medium">EXP Earned</p>
                <p className="text-lg font-semibold text-gray-900">
                  <CountUp end={3000} duration={2} />
                </p>
                <p className="text-sm font-medium text-gray-800">
                  Rank:{" "}
                  <span className="text-base font-bold text-green-600">
                    EcoFood Warrior
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-20 gap-16">
        <div className="col-span-2 bg-white shadow-sm">
          <div className="flex flex-row space-x-6  ">
            <div className="shadow-md rounded-md border-b-4 border-green-400 flex-1 py-4 mt-4 p-4 bg-white">
              <p className="text-left text-lg font-medium text-gray-700">
                Impact Stats
              </p>
              <div className="flex flex-row justify-between items-center mt-3">
                <h5 className="text-4xl font-bold text-green-600">250</h5>
                <p className="text-left text-gray-600 text-lg">kg Saved</p>
              </div>
            </div>

            <div className="shadow-md rounded-md border-b-4 border-blue-400 flex-1 py-4 mt-4 p-4 bg-white">
              <p className="text-left text-lg font-medium text-gray-700">
                Surplus Food Contributed
              </p>
              <div className="flex flex-row justify-between items-center mt-3">
                <h5 className="text-4xl font-bold text-blue-600">2348</h5>
                <p className="text-left text-gray-600 text-lg">
                  kg Contributed
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-md border-b-4 border-yellow-400 flex-1 py-4 mt-4 p-4 bg-white">
              <p className="text-left text-lg font-medium text-gray-700">
                Food Banks Donated
              </p>
              <div className="flex flex-row justify-between items-center mt-3">
                <h5 className="text-4xl font-bold text-yellow-600">5</h5>
                <p className="text-left text-gray-600 text-lg">org</p>
              </div>
            </div>
          </div>
          {/*Activity*/}
          <div>
          <h1 className="text-2xl font-bold mb-6 mt-16 ml-2">Activity Tracking</h1>

          

<div className="space-y-4">
  <div className="bg-gray-100 p-4 rounded-md shadow-md">
    <p className="text-sm font-semibold text-gray-600">Address: 0xAbC123456789...</p>
    <p className="text-sm text-gray-600">Date: 15th August 2024</p>
    <p className="text-sm text-gray-600">Edible Food Donated: 20kg</p>
    <p className="text-sm text-gray-600">Receiver: Food Bank 1</p>
    <p className="text-sm text-gray-600">FoodPal Token Earned: 20</p>
    <p className="text-sm text-gray-600">EXP Point Earned: 200XP</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-md shadow-md">
    <p className="text-sm font-semibold text-gray-600">Address: 0xDeF234567890...</p>
    <p className="text-sm text-gray-600">Date: 15th August 2024</p>
    <p className="text-sm text-gray-600">Edible Food Donated: 20kg</p>
    <p className="text-sm text-gray-600">Receiver: Food Bank 2</p>
    <p className="text-sm text-gray-600">FoodPal Token Earned: 20</p>
    <p className="text-sm text-gray-600">EXP Point Earned: 200XP</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-md shadow-md">
    <p className="text-sm font-semibold text-gray-600">Address: 0xGhI345678901...</p>
    <p className="text-sm text-gray-600">Date: 14th August 2024</p>
    <p className="text-sm text-gray-600">Unedible Food Sold: 20kg</p>
    <p className="text-sm text-gray-600">Receiver: Waste Processing Company 1</p>
    <p className="text-sm text-gray-600">FoodPal Token Earned: 15</p>
    <p className="text-sm text-gray-600">EXP Point Earned: 150XP</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-md shadow-md">
    <p className="text-sm font-semibold text-gray-600">Address: 0xJkL456789012...</p>
    <p className="text-sm text-gray-600">Date: 13th August 2024</p>
    <p className="text-sm text-gray-600">Unedible Food Sold: 20kg</p>
    <p className="text-sm text-gray-600">Receiver: Waste Processing Company 1</p>
    <p className="text-sm text-gray-600">FoodPal Token Earned: 15</p>
    <p className="text-sm text-gray-600">EXP Point Earned: 150XP</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-md shadow-md">
    <p className="text-sm font-semibold text-gray-600">Address: 0xMnO567890123...</p>
    <p className="text-sm text-gray-600">Date: 12th August 2024</p>
    <p className="text-sm text-gray-600">Unedible Food Sold: 20kg</p>
    <p className="text-sm text-gray-600">Receiver: Waste Processing Company 1</p>
    <p className="text-sm text-gray-600">FoodPal Token Earned: 15</p>
    <p className="text-sm text-gray-600">EXP Point Earned: 150XP</p>
  </div>
</div>
          </div>


        </div>

        <div className="bg-red gap-3 shadow-sm">
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">Carbon Credits Exchanged</h1>
  
  <div className="mb-6">
    <p className="text-lg font-medium text-gray-700">Current Exchange Rate</p>
    <p className="text-lg text-gray-600">
      Current Possessed Carbon Credits: 
      <span className="font-semibold text-green-600"> 3</span>
      <span className="ml-6 text-blue-600 underline cursor-pointer text-xs">View</span>
    </p>
  </div>
  
  {/* Progress Bar - Placeholder */}
  <div className="mb-6">
    <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-green-500"></div>
    </div>
  </div>
  
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-3">History</h2>
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="border-l-4 border-green-500 pl-4 mb-4">
        <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Address:</span> 0x1234...abcd</p>
        <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Date Exchanged:</span> 18 August 2024</p>
        <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">FoodPal Token Used For Exchange:</span> 1000</p>
        <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Exchanged Carbon Credit(s):</span> 1</p>
      </div>
      {/* Add more history entries if needed */}
      <div className="border-l-4 border-green-500 pl-4 mb-4">
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Address:</span> 0xdef0...mnop
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Date Exchanged:</span> 10 August 2024
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">FoodPal Token Used For Exchange:</span> 500
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Exchanged Carbon Credit(s):</span> 0.5
      </p>
    </div>

    <div className="border-l-4 border-green-500 pl-4 mb-4">
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Address:</span> 0x9abc...ijkl
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Date Exchanged:</span> 12 August 2024
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">FoodPal Token Used For Exchange:</span> 1500
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Exchanged Carbon Credit(s):</span> 1.5
      </p>
    </div>


    <div className="border-l-4 border-green-500 pl-4 mb-4">
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Address:</span> 0x5678...efgh
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Date Exchanged:</span> 15 August 2024
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">FoodPal Token Used For Exchange:</span> 2000
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-800">Exchanged Carbon Credit(s):</span> 2
      </p>
    </div>
      
    </div>

    
  </div>

  
</div>

         
        </div>
      </div>
    </div>
  );
};

export default Everything;
