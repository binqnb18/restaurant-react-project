import React from 'react'
import banner from '../assets/img/banner.png';

const Banner = () => {
  return (
    <div class="relative bg-white overflow-hidden"> 
    <div class="relative">
      <img src={banner} alt="Banner Image" class="absolute inset-0 w-full h-full object-contain" />
      <div class="relative z-10 bg-opacity-75 h-full flex flex-col items-center justify-center py-32 px-4">
        <h1 class="text-6xl font-bold text-gray-900 text-center leading-tight">
          Best food for <br />your taste
        </h1>
        <p class="mt-6 text-lg text-gray-700 text-center max-w-2xl">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div class="mt-8 flex justify-center gap-4">
          <button class="border border-gray-900 text-gray-900 font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-red-900 hover:text-white">
            Book A Table
          </button>
          <button class="border border-gray-900 text-gray-900 font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-red-900 hover:text-white">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner