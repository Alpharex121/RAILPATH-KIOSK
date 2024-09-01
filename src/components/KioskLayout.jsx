import React, { useState } from "react";
import sponsor_icon from "../assets/sponsor.png";
import pnr_enquiry from "../assets/pnr_enquiry.png";
import stationmap from "../assets/station_map.jpg";
import cafeteria from "../assets/cafeteria.png";
import disabled_person from "../assets/disabled-person.png";
import tickect_office from "../assets/ticket-office.png";
import luggage from "../assets/luggage.png";
import home from "../assets/home.png";
import waiting_room from "../assets/waiting-room.png";
import NavigationoSeaction from "./NavigationoSeaction";
import qrimage from "../assets/qrimage.png";
import SponsorSection from "./SponsorSection";
import sponsorImage from "../assets/hotel_promotion.jpg";
import TrainPNRSection from "./TrainPNRSection";
import homeqr from "../assets/qr/homepage_qr.jpg";
import ticketqr from "../assets/qr/ticket_counter_qr.jpg";
import luggageqr from "../assets/qr/luggage_room_qr.jpg";
import waitingqr from "../assets/qr/waiting_qr.jpg";
import wheelqr from "../assets/qr/wheelchair_qr.jpg";
import cafeteriaqr from "../assets/qr/cafeteria_qr.jpg";
import Carousel from "./Carousel";

function KioskLayout() {
  var showMap;
  const [menuName, setMenuName] = useState("JABALPUR STATION");
  const [currenSection, setCurrentSection] = useState("NavigationSection");

  const [mapName, setMapName] = useState("homemap");
  const [isSelected, setIsSelected] = useState("home");
  const [currentQR, setCurrentQR] = useState("homeqr");
  if (currenSection === "NavigationSection") {
    showMap = <NavigationoSeaction sectionName={menuName} mapname={mapName} />;
  } else if (currenSection === "SponsorSection") {
    showMap = <SponsorSection />;
  } else if (currenSection === "TrainandpnrSection") {
    showMap = <TrainPNRSection />;
  }

  if (currentQR === "homeqr") setCurrentQR(homeqr);
  else if (currentQR === "wheelqr") setCurrentQR(wheelqr);
  else if (currentQR === "ticketqr") setCurrentQR(ticketqr);
  else if (currentQR === "cafeteriaqr") setCurrentQR(cafeteriaqr);
  else if (currentQR === "waitingqr") setCurrentQR(waitingqr);
  else if (currentQR === "luggageqr") setCurrentQR(luggageqr);
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white h-[10vh] text-black text-center  my-auto ">
        <h1 className="text-[5vh] font-bold  text-[#0C0F47] font-ubuntu">
          Railपथ DIGITAL KIOSK
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="bg-[#0C0F47] w-1/5 flex flex-col  py-4  ">
          {/* Sponsor Block */}
          <div className="flex flex-col items-end space-y-4  h-[30%] ">
            <div
              className="w-2/3 h-full flex justify-center items-center bg-[#D1D2D4] cursor-pointer rounded-xl mr-10"
              onClick={() => {
                setCurrentSection("SponsorSection");
                setIsSelected("none");
              }}
            >
              <div className=" flex items-center justify-center rounded-md h-full w-full">
                <Carousel />
              </div>
            </div>
          </div>

          {/* PNR Search */}
          <div className="flex flex-col items-end mt-8  h-[30%]   ">
            <div
              className="w-2/3 h-full flex justify-center items-center bg-[#D1D2D4] cursor-pointer rounded-xl mr-10"
              onClick={() => {
                setCurrentSection("TrainandpnrSection");
                setIsSelected("none");
              }}
            >
              <div className=" w-2/3 flex items-center  h-2/3  p-2 justify-center ">
                <img src={pnr_enquiry} alt="PNR Search" className="w-[70%]" />
              </div>
            </div>
          </div>

          {/* QR Block */}
          <div className="flex flex-col items-end mt-8  h-[30%]">
            <div className="w-2/3 h-full flex justify-center items-center bg-[#D1D2D4] cursor-pointer rounded-xl mr-10">
              <div className="w-2/3 h-8 flex items-center justify-center rounded-md">
                {console.log(currentQR)}
                <img src={currentQR} alt="QR" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {showMap}

        {/* Right Sidebar Navigation */}
        <div className="bg-[#0C0F47] w-1/5 flex flex-col justify-between py-4">
          {/* NAV Icons */}
          <div className="flex flex-col  h-full space-y-4 items-center">
            <button className="bg-[#d8d8d8]  text-xl border-2 border-black w-2/3 h-16  flex items-center justify-center rounded-xl font-bold ">
              NAVIGATION MENU
            </button>
            <button
              className={`${
                isSelected === "home" ? "bg-orange-100" : "bg-blue-50"
              } w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <img
                src={home}
                alt="Nav"
                className="w-2/3"
                onClick={() => {
                  setMenuName("JABALPUR STATION");
                  setCurrentSection("NavigationSection");
                  setMapName("homemap");
                  setIsSelected("home");
                  setCurrentQR("homeqr");
                }}
              />
            </button>
            <button
              className={`${
                isSelected === "ticket" ? "bg-orange-100" : "bg-blue-50"
              } w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <img
                src={tickect_office}
                alt="Nav"
                className="w-2/3"
                onClick={() => {
                  setMenuName("TICKET COUNTER");
                  setCurrentSection("NavigationSection");
                  setMapName("ticketmap");
                  setCurrentQR("ticketqr");
                  setIsSelected("ticket");
                }}
              />
            </button>
            <button
              className={`${
                isSelected === "wheel" ? "bg-orange-100" : "bg-blue-50"
              } w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <img
                src={disabled_person}
                alt="Nav"
                className="w-2/3"
                onClick={() => {
                  setMenuName("WHEEL CHAIR COLLECTION ");
                  setCurrentSection("NavigationSection");
                  setMapName("wheelmap");
                  setIsSelected("wheel");
                  setCurrentQR("wheelqr");
                }}
              />
            </button>
            <button
              className={`${
                isSelected === "cafeteria" ? "bg-orange-100" : "bg-blue-50"
              } w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <img
                src={cafeteria}
                alt="Nav"
                className="w-2/3"
                onClick={() => {
                  setMenuName("CAFETERIA");
                  setCurrentSection("NavigationSection");
                  setMapName("cafeteriamap");
                  setCurrentQR("cafeteriaqr");
                  setIsSelected("cafeteria");
                }}
              />
            </button>
            <button
              className={`${
                isSelected === "waiting" ? "bg-orange-100" : "bg-blue-50"
              } w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <img
                src={waiting_room}
                alt="Nav"
                className="w-2/3"
                onClick={() => {
                  setMenuName("WAITING ROOM");
                  setCurrentSection("NavigationSection");
                  setMapName("waitmap");
                  setIsSelected("waiting");
                  setCurrentQR("waitingqr");
                }}
              />
            </button>

            <button
              className={`${
                isSelected === "luggage" ? "bg-orange-100" : "bg-blue-50"
              } w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <img
                src={luggage}
                alt="Nav"
                className="w-2/3"
                onClick={() => {
                  setMenuName("LUGGAGE ROOM");
                  setCurrentSection("NavigationSection");
                  setMapName("luggagemap");
                  setCurrentQR("luggageqr");
                  setIsSelected("luggage");
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KioskLayout;
