import React, { useState } from "react";
import qrimage from "../assets/qrimage.png";
import stationmap from "../assets/station_map.jpg";
import homemap from "../assets/default_map.jpg";
import cafeteriamap from "../assets/cafeteria_map.jpg";
import wheelmap from "../assets/wheel_map.jpg";
import luggagemap from "../assets/luggage_map.jpg";
import waitmap from "../assets/waiting_map.jpg";
import ticketmap from "../assets/ticket_map.jpg";
import DirectionModal from "./DirectionModal";

const NavigationoSeaction = ({ sectionName, mapname }) => {
  var currMapName;
  const [showDirection, setShowDirection] = useState(false);
  if (mapname === "homemap") mapname = homemap;
  else if (mapname === "cafeteriamap") mapname = cafeteriamap;
  else if (mapname === "ticketmap") mapname = ticketmap;
  else if (mapname === "wheelmap") mapname = wheelmap;
  else if (mapname === "waitmap") mapname = waitmap;
  else if (mapname === "luggagemap") mapname = luggagemap;

  return (
    <div className="w-3/5 bg-[#0C0F47]    flex justify-center  ">
      <div className="text-center flex flex-col h-[87vh] justify-centre w-full rounded-xl bg-white m-4 ">
        {showDirection && (
          <div
            id="directionsModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
          >
            <div class="bg-white rounded-lg p-6 w-full max-w-lg">
              <div class="flex justify-between items-center  border-b pb-3 mb-4">
                <h2 class="text-xl font-semibold">Directions</h2>
                <button
                  id="closeBtn"
                  class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  onClick={() => {
                    setShowDirection(false);
                  }}
                >
                  &times;
                </button>
              </div>

              <div class="space-y-2 ">
                <p class="border-b pb-2  relative flex ">
                  1. Start from your current location.
                </p>
                <p class="border-b pb-2 relative flex">
                  2. Head north for 200 meters.
                </p>
                <p class="border-b pb-2 relative flex">
                  3. Turn right onto Main Street.
                </p>
                <p class="border-b pb-2 relative flex">
                  4. Continue straight for 1 kilometer.
                </p>
                <p class="border-b pb-2 relative flex">
                  5. Your destination will be on the left.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center   ">
          <h2 className="text-4xl mt-[2vh] font-bold text-[#2f5487] relative mb-4">
            {sectionName}
          </h2>
          <button
            type="button"
            className="focus:outline-none text-white bg-[#2f5487] hover:bg-[#1d395b] border border-transparent font-medium rounded-full text-sm px-6 py-2 transition duration-300 ease-in-out shadow-md mt-4 absolute right-[22.25rem]"
            onClick={() => setShowDirection(true)}
          >
            Show Directions
          </button>
        </div>

        <div className="bg-gray-300 w-[90%] mx-auto h-[84%] border-2 border-black rounded-xl ">
          {/* Map Placeholder */}
          <img
            src={mapname}
            alt=""
            className=" object-fill rounded-xl h-full w-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationoSeaction;
