import React, { useState } from "react";

const PNRData = () => {
  const [showData, setShowData] = useState(true);
  return (
    <>
      {showData && (
        <div className="mt-4 w-[90%] flex flex-col mx-auto border-[1px] rounded-lg border-black h-2/3">
          <div class="bg-blue-100 p-4 rounded-lg mb-6">
            <p class=" text-xl font-bold">TRAIN NO: 12167</p>
            <div class="mt-4 flex justify-between">
              <p>
                <div class="font-bold">Train Name:</div> Banaras SF Express
              </p>
              <p>
                <div class="font-bold">Last Location:</div> Madan Mahal
              </p>
              <p>
                <div class="font-bold">Expected Arrival:</div> 8:30 PM
              </p>
              <p>
                <div class="font-bold">Delayed:</div> 20 minutes
              </p>
              <p>
                <div class="font-bold">Platform No.:</div> Pt. 2
              </p>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-center text-lg font-semibold mb-4">BOOKING STATUS</p>
            <table class="w-full text-left">
              <thead>
                <tr class="bg-blue-200">
                  <th class="py-2 px-4">Passenger</th>
                  <th class="py-2 px-4">Booking Status</th>
                  <th class="py-2 px-4">Current Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4">Passenger 1</td>
                  <td class="py-2 px-4">CNF/B2/31</td>
                  <td class="py-2 px-4">CNF/B2/31</td>
                </tr>
                <tr class="bg-blue-100">
                  <td class="py-2 px-4">Passenger 2</td>
                  <td class="py-2 px-4">WL</td>
                  <td class="py-2 px-4">CNF/C1/12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" flex justify-end">
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[10vw] mt-4  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => setShowData(false)}
            >
              CLEAR
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PNRData;
