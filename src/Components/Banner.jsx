import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import banner from '../assets/img/banner.png';

const Banner = () => {
  return (
    <div className="relative bg-white overflow-hidden"> 
      <div className="relative w-full">
        <img src={banner} alt="Banner Image" className="absolute inset-0 w-full object-contain"/>
        <div className="relative z-10 bg-opacity-75 h-full flex flex-col items-center justify-center py-32 px-4">
          <h1 className="text-6xl font-bold text-gray-900 text-center leading-tight">
            Best food for <br />your taste
          </h1>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl">
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/book">
              <button className="border border-gray-900 text-gray-900 font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-red-900 hover:text-white">
                Book A Table
              </button>
            </Link>
            <Link to="/menu">
              <button className="border border-gray-900 text-gray-900 font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-red-900 hover:text-white">
                Explore Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
