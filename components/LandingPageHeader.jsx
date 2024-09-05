"use client";
import React, { useState, useEffect } from "react";
import CreateWalletModal from "./Create-wallet/CreateWalletModal";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPageHeader = ({ handleLoggedIn, loggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWalletAddress = window.sessionStorage.getItem("walletAddress");
      if (storedWalletAddress) {
        setWalletAddress(storedWalletAddress);
      }
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      const newWalletAddress = result.result.wallet.wallet_address;
   
      sessionStorage.setItem("walletAddress", newWalletAddress);
      setWalletAddress(newWalletAddress);
      handleLoggedIn(newWalletAddress);

      toast.success(
        `🦄 User created successfully! Wallet address: ${newWalletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      closeModal();
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("🦄 Error creating user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <header className="w-full py-6 lg:py-4 relative border-b">
      <div className="flex flex-row justify-between items-center w-full bg-[#C0360B] h-16 px-6 shadow-md">
        <div className="text-white">
          <h1 className="text-2xl font-extrabold">FoodPal</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Create Wallet Button */}
          <button
            onClick={openModal}
            
            className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Create Wallet
          </button>

          {/* Connect Wallet Button */}
          <button
            onClick={openModal}
            className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            {walletAddress && loggedIn ? (
              <span className="text-sm">
                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
              </span>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CreateWalletModal onSubmit={handleSubmit} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  );
};

export default LandingPageHeader;
