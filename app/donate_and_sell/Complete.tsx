"use client";
import React from "react";

interface CompleteProps {
  show: boolean;
  onClose: () => void;
  people:string
  
}

const Complete: React.FC<CompleteProps> = ({ show, onClose, people }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-red-700 rounded-lg shadow-lg p-10  relative w-3/5">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          &times;
        </button>
        <div>
          <p className="text-white text-2xl font-bold font-serif">
            We found you a match!
          </p>
          <br />
          <br />
          <br />
          <p className="text-white text-m">
            We will pick your item up and deliver it to
          </p>
          <p className="text-white text-m">
            them during the requested time! Just lay back
          </p>
          <p className="text-white text-m">and we'll handle it for you!</p>
        </div>
        <br />
        <br />
        <p className="text-white text-xl">Your match:</p>
        <p className="text-white text-xl">{people}</p>
        {/* <div>
          <img src="/handshake.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Complete;
