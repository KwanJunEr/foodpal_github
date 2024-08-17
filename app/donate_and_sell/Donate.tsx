"use client";
import React, { useState } from "react";
import Complete from "./Complete";
import Pending from "./Pending";
const Donate = () => {
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [showCompletedModal, setShowCompletedModal] = useState(false);

  const handleDonateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPendingModal(true);
  };

  const handleClosePendingModal = () => {
    setShowPendingModal(false);
  };

  const handleCloseCompletedModal = () => {
    setShowCompletedModal(false);
  };

  const handlePendingComplete = () => {
    setShowPendingModal(false);
    setShowCompletedModal(true);
  };

  return (
    <div className="flex mt-8">
      <div>
        <form>
          <table className="w-full border-none">
            <tbody>
              <tr>
                <td className="w-2/5 p-2">
                  <label htmlFor="type">Type</label>
                </td>
                <td className="w-2/5 p-2">
                  <label htmlFor="weight">Weight</label>
                </td>
              </tr>
              <tr>
                <td className="w-2/5 p-2">
                  <select
                    id="type"
                    name="type"
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select Type</option>
                    {/* Add more options here */}
                  </select>
                </td>
                <td className="w-2/5 p-2">
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    placeholder="Enter weight"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-2/5 p-2">
                  <label htmlFor="pickupLocation">Pickup Location</label>
                </td>
                <td className="w-2/5 p-2">
                  <label htmlFor="preferredPickupDate">
                    Preferred Pickup Date/Time
                  </label>
                </td>
              </tr>
              <tr>
                <td className="w-2/5 p-2">
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    placeholder="Enter pickup location"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </td>
                <td className="w-2/5 p-2">
                  <input
                    type="text"
                    id="preferredPickupDate"
                    name="preferredPickupDate"
                    placeholder="Enter preferred pickup date/time"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-2/5 p-2">
                  <label htmlFor="contactInformation">
                    Contact Information
                  </label>
                </td>
                <td className="w-2/5 p-2">
                  <label htmlFor="photos">Photos of Goods</label>
                </td>
              </tr>
              <tr>
                <td className="w-2/5 p-2">
                  <input
                    type="text"
                    id="contactInformation"
                    name="contactInformation"
                    placeholder="Enter contact information"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </td>
                <td className="w-2/5 p-2">
                  <input
                    type="file"
                    id="photos"
                    name="photos"
                    multiple
                    className="w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-2/5 p-2">
                  <label htmlFor="notes">Notes</label>
                </td>
              </tr>
              <tr>
                <td className="w-full p-2" colSpan={2}>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={2}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter any additional notes"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mt-4 w-1/3"
            onClick={handleDonateClick}
          >
            Donate
          </button>
        </form>
      </div>
      <Pending show={showPendingModal} onComplete={handlePendingComplete} />
      <Complete show={showCompletedModal} onClose={handleCloseCompletedModal} people = {"Foodbank Malaysia (FBM)"}/>
    </div>
  );
};

export default Donate;
