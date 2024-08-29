import React from "react";

const DirectionModal = () => {
  return (
    <div
      id="directionsModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-lg">
        <div class="flex justify-between items-center border-b pb-3 mb-4">
          <h2 class="text-xl font-semibold">Directions</h2>
          <button
            id="closeBtn"
            class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <div class="space-y-2">
          <p class="border-b pb-2">1. Start from your current location.</p>
          <p class="border-b pb-2">2. Head north for 200 meters.</p>
          <p class="border-b pb-2">3. Turn right onto Main Street.</p>
          <p class="border-b pb-2">4. Continue straight for 1 kilometer.</p>
          <p class="border-b pb-2">5. Your destination will be on the left.</p>
        </div>
      </div>
    </div>
  );
};

export default DirectionModal;
