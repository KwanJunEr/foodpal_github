import { WobbleCard } from "@/components/ui/wobble-card";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="m-5">
      {/* Container for the search box */}
      <div className="flex flex-col items-center mt-10">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white max-w-[800px] w-full rounded-xl shadow-lg p-6 text-center">
          <p className="text-2xl font-bold mb-4">Food Waste Projects</p>
          <p className="text-base mb-6">
            Invest in Projects to Make a Further Impact with Your Token
          </p>
          <div className="relative w-full max-w-md mx-auto">
            <label htmlFor="projectsearch" className="sr-only">
              Search Projects
            </label>
            <input
              id="projectsearch"
              type="text"
              placeholder="Search Projects"
              className="w-full p-3 rounded-lg border-none outline-none bg-white text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Project Listings */}
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
            <p className="text-2xl font-semibold mb-10 ml-2">
              List of Projects You Can Be Part Of:
            </p>
            <div className="flex flex-row justify-between items-center p-6 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 rounded-lg shadow-md">
      <div className="space-y-4 max-w-md">
        <p className="text-2xl font-bold text-gray-800">Food Waste Project 1</p>
        <p className="text-base text-gray-700">This is about Food Waste Project</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
          Invest Now
        </button>
      </div>
      <div>
        <Image
          src="/lego.png"
          width={400}
          height={400}
          className="rounded-lg"
          alt="Project Image"
        />
      </div>
    </div>

    <div className="flex flex-row justify-between items-center p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-md mt-10">
      <div className="space-y-4 max-w-md">
        <p className="text-2xl font-bold text-gray-800">Food Waste Project 1</p>
        <p className="text-base text-gray-700">This is about Food Waste Project</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
          Invest Now
        </button>
      </div>
      <div>
        <Image
          src="/div.png"
          width={400}
          height={200}
          className="rounded-lg"
          alt="Project Image"
        />
      </div>
    </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-bold">Project I have Invested In</p>
            <WobbleCard
              containerClassName="bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 h-[240px] mt-10 "
              className=""
            >
              <div className="flex flex-row items-center ">
  <div className="ml-10 flex flex-col space-y-3 mt-5">
    <p className="text-xl font-semibold text-gray-800">
      Food Waste Project 1
    </p>
    <p className="text-base text-gray-600">
      Aiming to reduce food waste through bins.
    </p>
    <p>Date Started: 17 August 2024</p>
    <p>Expected Completion Date: 31 December 2024</p>

 
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2.5">

      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      100,000 of 500,000 FoodPal tokens invested
    </p>
  </div>
</div>

            </WobbleCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
