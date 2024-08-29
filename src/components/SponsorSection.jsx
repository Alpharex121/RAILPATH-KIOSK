import React from "react";
import stationmap from "../assets/station_map.jpg";
import sponsorImage from "../assets/hotel_promotion.jpg";

const SponsorSection = () => {
  return (
    <div className="w-3/5 bg-[#0C0F47]    flex justify-center  ">
      <div className="text-center flex flex-col justify-centre w-full rounded-xl bg-white m-4 ">
        <h2 className="text-4xl mt-[2vh] font-bold text-yellow-900  mb-4">
          GRAND HOTEL & SPA
        </h2>
        <div className="bg-gray-300 w-[90%] mx-auto h-[84%] border-2 border-black rounded-xl">
          {/* Map Placeholder */}
          <img
            src={sponsorImage}
            alt=""
            className=" object-fill rounded-xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
