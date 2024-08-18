'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Modal, Button } from 'antd';

const Exchange = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokennumber, setTokenNumber] = useState('5000');
  const [carbonCredit,setcarbonCredit] = useState('3')

  // Create refs for the input fields
  const tokenInputRef = useRef(null);
  const carbonCreditInputRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    // Clear the input fields when confirming
    if (tokenInputRef.current) tokenInputRef.current.value = '';
    if (carbonCreditInputRef.current) carbonCreditInputRef.current.value = '';
    setTokenNumber('4000');
    setcarbonCredit('4');


    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='bg-yellow-100 p-4 rounded-md mb-5'>
        <p className='font-bold text-black'>Important Announcement:</p>
        <p className='text-sm text-black'>
          Exchange Rate: 1 Carbon Credit = 1000 FoodPal Tokens
        </p>
      </div>

      <div className="flex flex-col justify-end  items-end p-4 bg-gray-800 text-white rounded-lg shadow-lg space-y-2 px-10">
  <p className="text-lg font-semibold">My Carbon Credits:</p>
  <p className="text-2xl font-bold">{carbonCredit}</p>
  <a href="/more-info" className="text-blue-400 hover:underline">
    View more
  </a>
</div>

      {/* Exchange Center */}
      <div className='mt-10 mx-10'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-3'>Exchange Center</h1>
        <p className='text-sm text-gray-600 mb-2'>
          Exchange your FoodPal tokens for Carbon Credits which you can sell to businesses.
        </p>
        <p className='text-lg font-bold text-green-600'>
          Your Available FoodPal Tokens: {tokennumber}
        </p>
      </div>

      <div className="flex flex-row mx-5">
        <div className="w-1/2 flex flex-col items-left justify-center p-4">
          <label htmlFor="token" className="block text-m font-medium text-black-700">
            Token
          </label>
          <input
            type="text"
            placeholder="enter value"
            id="token"
            ref={tokenInputRef} // Attach ref here
            className="mt-1 block w-full px-3 py-2 bg-white border border-black-300 rounded-md shadow-sm placeholder-gray-400
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <br />
          <p className="text-center text-m font-medium text-black-700">
            exchange to ...
          </p>
          <label htmlFor="carbonCredit" className="block mt-4 text-m font-medium text-black-700">
            Carbon Credit
          </label>
          <input
            type="text"
            id="carbonCredit"
            placeholder="value"
            ref={carbonCreditInputRef} // Attach ref here
            className="mt-1 block w-full px-3 py-2 bg-white border border-black-300 rounded-md shadow-sm placeholder-gray-400
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <br />
          <br />
          <div className="flex justify-between w-full">
            <button
              className="btn bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-1/3"
              onClick={showModal}
            >
              Exchange
            </button>
            <Modal
              title="Successful Transaction"
              open={isModalOpen}
              centered
              footer={null}
              closable={false}
            >
              <p>Successful Exchange for 1 Carbon Credit</p>
              <div className="flex flex-row justify-end space-x-5">
                <Button onClick={handleConfirm}>Ok</Button>
              </div>
            </Modal>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image src={"/exchange.jpg"} alt="Exchange" width={400} height={400} className="mt-4 w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
