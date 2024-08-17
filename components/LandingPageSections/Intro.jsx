import React from "react";
import { FaDonate, FaShoppingCart, FaAward, FaArrowRight } from "react-icons/fa";
import "./index.css"; // Ensure this path is correct


const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600">
          Follow these simple steps to make a difference with FoodPal:
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <FaDonate className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sell or Donate Food Surplus</h3>
          <p className="text-gray-700">
            Sell inedible food to waste processing companies or donate edible food to food banks.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <FaArrowRight className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Auto-Match</h3>
          <p className="text-gray-700">
            Automatically match with suitable donation and waste processing companies.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <FaAward className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Get Rewarded</h3>
          <p className="text-gray-700">
            Earn rewards for your contributions and involvement in the community.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <FaShoppingCart className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Invest in Initiatives</h3>
          <p className="text-gray-700">
            Use your rewards to invest in other food initiative projects and further support the cause.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

