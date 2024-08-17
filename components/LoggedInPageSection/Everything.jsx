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
    <div className="m-5">
      <div className="flex flex-row justify-between space-x-10">
        <div className="mt-5">
          <TypewriterEffectSmooth words={words} />
          <TextGenerateEffect words={words1} />
        </div>
        <div>
          <div className="flex flex-row space-x-6">
            <div className="flex flex-row items-center space-x-6 m-5 bg-gray-10 rounded-md shadow-md py-4 px-8">
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

            <div className="flex flex-row items-center space-x-6 m-5 bg-gray-10 rounded-md shadow-md py-4 px-8">
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
      <div className="grid grid-cols-3 mt-10">
            <div className="col-span-2 bg-red-50">
                    <h1>asdasdsa</h1>
            </div>
            <div>

            </div>
      </div>
    </div>
  );
};

export default Everything;
