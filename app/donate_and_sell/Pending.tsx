"use client";
import React, { useEffect } from "react";
import "./index.css";

interface PendingProps {
  show: boolean;
  onComplete: () => void;
}

const Pending: React.FC<PendingProps> = ({ show, onComplete }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-red-700 rounded-lg shadow-lg p-10  relative w-3/5">
        <div className="flex w-full">
          <div className="w-1/2">
            <p className="text-white text-2xl font-bold font-serif">
              Just a Sec While We
            </p>
            <p className="text-white text-2xl font-bold font-serif">
              Whip Up Some Magic...
            </p>
            <br />
            <br />
            <br />
            <p className="text-white text-m">
              Hold tight! We're rustling through our pantry to
            </p>
            <p className="text-white text-m">
              pair your generous donation with a food bank
            </p>
            <p className="text-white text-m">
              that's hungry for help. Get ready to make a
            </p>
            <p className="text-white text-m">
              difference -- one bite at a time!
            </p>
          </div>
          <div className="w-1/2">
            <img src="/people.png" alt="" />
          </div>
        </div>
        <br />
        <p className="text-white text-xs">auto matching...</p>
        <div className="mt-4">
          <div className="h-2 bg-white rounded-full">
            <div className="h-2 bg-green-500 rounded-full w-1/2 animate-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
