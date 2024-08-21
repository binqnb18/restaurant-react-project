import React from 'react';
import chef from '../assets/img/chef.png';
import curry from '../assets/img/curry.png';
import grill from '../assets/img/grill.png';

const Delivery = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row gap-16">
      {/* Left Side: Main Image */}
      <div className="flex-1">
        <img src={chef} alt="Chef cooking" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      {/* Left Side: Images */}
      <div className="flex flex-col gap-6">
        {/* Top Right Image - Curry */}
        <img src={curry} alt="Dish 1" className="w-[290px] h-[333px] rounded-[12px] shadow-lg mt-8" />

        {/* Bottom Right Image - Grill */}
        <img src={grill} alt="Dish 2" className="w-[290px] h-[240px] rounded-[12px] shadow-lg" />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1 mt-36">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Fastest Food Delivery in City</h2>
        <p className="text-gray-600 mb-6">
          Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.
        </p>
        <ul className="space-y-4">
        <li className="flex items-center">
                  <span className="w-10 h-10 bg-[#AD343E] text-white flex items-center justify-center rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2m-4-8a7 7 0 110 14 7 7 0 010-14z"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-800 font-semibold">Delivery within 30 minutes</p>
          </li>

          <li className="flex items-center">
  <span className="w-10 h-10 bg-[#AD343E] text-white flex items-center justify-center rounded-full mr-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18v4H3z"
      />
    </svg>
  </span>
  <p className="text-gray-800 font-semibold">Best Offer & Prices</p>
</li>

<li className="flex items-center">
  <span className="w-10 h-10 bg-[#AD343E] text-white flex items-center justify-center rounded-full mr-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V5h-2V3H7v2H5v6H3v4h2v6h14v-6h2v-4h-2zM7 7h10v4H7V7zm5 8.5c-.8 0-1.5-.7-1.5-1.5S11.2 12.5 12 12.5s1.5.7 1.5 1.5S12.8 15.5 12 15.5z"
      />
    </svg>
  </span>
  <p className="text-gray-800 font-semibold">Online Services Available</p>
</li>

        </ul>
      </div>
    </div>
  );
};

export default Delivery;
