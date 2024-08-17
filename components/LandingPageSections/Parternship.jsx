import React from 'react';
import { FaBuilding, FaLeaf, FaRecycle, FaHandHoldingHeart, FaTrash } from 'react-icons/fa';

const Partnership = () => {
  return (
    <section className='py-16 bg-white min-h-[400px]'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-extrabold'>Our Esteemed Partners</h1>
        <p className='text-lg mt-2 text-gray-600'>We collaborate with leading organizations to tackle food waste and enhance community support.</p>
      </div>

      <div className='flex flex-wrap justify-center gap-10'>
        <div className='bg-gray-100 rounded-md shadow-lg p-6 border border-gray-200 max-w-xs flex flex-col items-center'>
          <FaBuilding className='text-4xl mb-4 text-gray-700' />
          <p className='text-center font-semibold'>Johnson & Co.</p>
        </div>
        <div className='bg-gray-100 rounded-md shadow-lg p-6 border border-gray-200 max-w-xs flex flex-col items-center'>
          <FaLeaf className='text-4xl mb-4 text-green-600' />
          <p className='text-center font-semibold'>Green Earth</p>
        </div>
        <div className='bg-gray-100 rounded-md shadow-lg p-6 border border-gray-200 max-w-xs flex flex-col items-center'>
          <FaRecycle className='text-4xl mb-4 text-blue-600' />
          <p className='text-center font-semibold'>EcoWaste Solutions</p>
        </div>
        <div className='bg-gray-100 rounded-md shadow-lg p-6 border border-gray-200 max-w-xs flex flex-col items-center'>
          <FaHandHoldingHeart className='text-4xl mb-4 text-red-600' />
          <p className='text-center font-semibold'>Food Rescue Org</p>
        </div>
        <div className='bg-gray-100 rounded-md shadow-lg p-6 border border-gray-200 max-w-xs flex flex-col items-center'>
          <FaTrash className='text-4xl mb-4 text-gray-600' />
          <p className='text-center font-semibold'>WasteAway</p>
        </div>
      </div>
    </section>
  );
}

export default Partnership;

