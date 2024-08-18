import React, { useState } from 'react';

const LandingPageHeader = ({ handleLoggedIn, setAccount }) => {
  const [loading, setLoading] = useState(false);

  const handleLoggedInM = async () => {
    setLoading(true);
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
        console.log("Wallet connected:", accounts[0]);
        handleLoggedIn();
      }
    } catch (err) {
      console.error("Error during account request:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-center w-full bg-[#C0360B] h-16 px-6 shadow-md">
      <div className="text-white">
        <h1 className="text-2xl font-extrabold">FoodPal</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          className="p-2 bg-red-600 rounded-lg shadow-lg font-semibold text-white hover:bg-red-700 transition-transform transform hover:scale-105 duration-200"
          onClick={handleLoggedInM}
        >
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default LandingPageHeader;
