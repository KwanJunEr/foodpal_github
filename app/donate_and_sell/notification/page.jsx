import React from 'react';
import Link from 'next/link';

const Notification = () => {
  return (
    <div>
      <div className='mt-5 ml-5'>
        <Link href={"/donate_and_sell"}>
        
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Back</button>
          
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Notification</h1>
        <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6">
          <div className="flex flex-col space-y-4">
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">Address:</p>
              <p className="text-gray-600">0x5B4D6B0F4D86d1e4A1a4C7bD4E3a46b8c9e6A8C3</p>
            </div>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">Status:</p>
              <p className="text-gray-600">Successful Tag</p>
            </div>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">Message:</p>
              <p className="text-gray-600">Your Food Basket has been delivered to the Food Bank.</p>
              <p className="text-gray-600">You have earned 200 tokens and 20 EXP.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
