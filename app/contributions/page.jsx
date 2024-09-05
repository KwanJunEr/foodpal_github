import React from "react";
import Image from "next/image";

const Contributions = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 ml-5 mt-5">
          <h1 className="text-4xl font-extrabold text-left text-[#C0360B] my-6 ml-5">
            Welcome To Our Community of Change Makers
          </h1>
          <div className="flex flex-row space-x-5 bg-gray-100 rounded-lg shadow-md p-10 mt-5 ml-5">
            <div className="flex flex-col items-center text-center  pr-4">
              <p className="text-lg font-semibold mb-1">
                Total Community Donations
              </p>
              <p className="text-2xl font-bold text-[#C0360B]">900,000 kg</p>
            </div>

            <div className="border-r border-gray-300 h-24"></div>

            <div className="flex flex-col items-center text-center  px-4">
              <p className="text-lg font-semibold mb-1">
                Total Estimated Carbon Dioxide Reduced
              </p>
              <p className="text-2xl font-bold text-[#C0360B]">100 Tons</p>
            </div>

            <div className="border-r border-gray-300 h-24"></div>

            <div className="flex flex-col items-center text-center pl-4">
              <p className="text-lg font-semibold mb-2">
                You Are The Changer Of A Better World!
              </p>
              <button className="bg-[#C0360B] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#A03209] transition-colors">
                Share Your Achievement
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 bg-gray-100 rounded-lg shadow-lg p-4 space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/Wavy Buddies Avatar.png"
                alt="Avatar"
                height={40}
                width={40}
                className="rounded-full border border-gray-300"
              />
              <p className="text-lg font-semibold">Benjamin Tan</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700">
                I am happy to share that our business has made significant
                contributions to society:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>
                  <strong>Address:</strong>{" "}
                  0x1dE6C02EccF7f5C46E1A0cD9E6D0e0bF5b9C71F4
                </li>
                <li>
                  <strong>Edible Food Donated:</strong> 120kg
                </li>
                <li>
                  <strong>Non-edible Food Sold:</strong> 50kg
                </li>
                <li>
                  <strong>Total Estimated CO2 Reduction:</strong> 2 Tons
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col ml-5 bg-gray-100 rounded-lg shadow-lg p-4 space-y-4 mt-5">
            <div className="flex items-center space-x-3">
              <Image
                src="/Wavy Buddies Avatar.png"
                alt="Avatar"
                height={40}
                width={40}
                className="rounded-full border border-gray-300"
              />
              <p className="text-lg font-semibold">Emma Liu</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700">
                We're thrilled to announce our recent contributions to the
                community:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>
                  <strong>Address:</strong>{" "}
                  0x2F4E2C6eD5B3a6c8CaaC14C3E8A1e2D09D63C19F
                </li>
                <li>
                  <strong>Edible Food Donated:</strong> 80kg
                </li>
                <li>
                  <strong>Non-edible Food Sold:</strong> 30kg
                </li>
                <li>
                  <strong>Total Estimated CO2 Reduction:</strong> 1.5 Tons
                </li>
              </ul>
            </div>
          </div>
          {/*Item2*/}
          <div className="flex flex-col ml-5 bg-gray-100 rounded-lg shadow-lg p-4 space-y-4 mt-5">
            <div className="flex items-center space-x-3">
              <Image
                src="/Wavy Buddies Avatar.png"
                alt="Avatar"
                height={40}
                width={40}
                className="rounded-full border border-gray-300"
              />
              <p className="text-lg font-semibold">Aiden Smith</p>
            </div>
            {/*Item3*/}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700">
                Our recent efforts have led to the following impactful
                contributions:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>
                  <strong>Address:</strong>{" "}
                  0x5FfC014343F4adB1dC1dB89A8C4b8e0b9eF6D0C3
                </li>
                <li>
                  <strong>Edible Food Donated:</strong> 150kg
                </li>
                <li>
                  <strong>Non-edible Food Sold:</strong> 60kg
                </li>
                <li>
                  <strong>Total Estimated CO2 Reduction:</strong> 2.5 Tons
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#C0360B] p-6 rounded-lg ml-4 mt-28 mr-5">
            <h3 className="text-white text-2xl font-bold mb-4">LeaderBoard</h3>
            <div className="space-y-4">
              <div className="flex items-center border-b border-red-400 pb-4">
                <div className="w-12 h-12 bg-white text-[#C0360B] flex items-center justify-center rounded-full text-xl font-bold mr-4">
                  1
                </div>
                <div className="w-8 h-8 mr-4">
                  <Image
                    src="/Wavy Buddies Avatar.png"
                    alt="Avatar"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </div>
                <div className="text-white">
                  <h6 className="text-lg font-semibold">Johnson</h6>
                  <p className="text-sm">Rank: FoodEco God</p>
                </div>
              </div>

              <div className="flex items-center border-b border-red-400 pb-4">
                <div className="w-12 h-12 bg-white text-[#C0360B] flex items-center justify-center rounded-full text-xl font-bold mr-4">
                  2
                </div>
                <div className="w-8 h-8 mr-4">
                  <Image
                    src="/Wavy Buddies Avatar.png"
                    alt="Avatar"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </div>
                <div className="text-white">
                  <h6 className="text-lg font-semibold">Emily</h6>
                  <p className="text-sm">Rank: FoodEco Champion</p>
                </div>
              </div>
              <div className="flex items-center border-b border-red-400 pb-4">
                <div className="w-12 h-12 bg-white text-[#C0360B] flex items-center justify-center rounded-full text-xl font-bold mr-4">
                  3
                </div>
                <div className="w-8 h-8 mr-4">
                  <Image
                    src="/Wavy Buddies Avatar.png"
                    alt="Avatar"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </div>
                <div className="text-white">
                  <h6 className="text-lg font-semibold">Alex</h6>
                  <p className="text-sm">Rank: FoodEco Star</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
