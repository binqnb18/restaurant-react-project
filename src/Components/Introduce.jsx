import React from 'react'
import poster from '../assets/img/image111.png';

const Introduce = () => {
  return (
    <div class="bg-gray-50 py-16 px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        <div class="relative bg-gray-50 p-8">
            <img src={poster} alt="Delicious food" class="w-full h-full object-cover rounded-lg shadow-lg" />

            <div class="absolute bottom-0 right-0 bg-slate-600 text-white p-6 rounded-lg shadow-lg m-4 z-10">
                <h3 class="text-xl font-semibold mb-4">Come and visit us</h3>
                <div class="flex items-center mb-4">
                <svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.003 5.884l1.664-3.327A1 1 0 014.607 2h10.787a1 1 0 01.938.637l1.664 3.327c.047.094.08.194.1.297.338 1.658.547 3.382.547 5.182 0 01-1.34.799h-7.09a1.5 1.5 0 01-1.34-.799C2.895 18.827 2.003 15.336 2.003 11.364c0-1.8.209-3.524.547-5.182.02-.103.053-.203.1-.297zM14 14a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>(414) 857 - 0107</span>
                </div>
                <div class="flex items-center mb-4">
                <svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v1l7 3 7-3V5a1 1 0 00-1-1H4zm0 4.083l5.803 2.482a1 1 0 00.794 0L18 8.083V15a1 1 0 01-1 1H4a1 1 0 01-1-1V8.083z" />
                </svg>
                <span>happytummy@restaurant.com</span>
                </div>
                <div class="flex items-center">
                <svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.45-9.284A2.997 2.997 0 007 9H5a5 5 0 01.805-2.06A7.97 7.97 0 0110 3v2c-1.306 0-2.418.835-2.836 2.004L9.55 8.716zM10 12a2 2 0 01-2-2H5.11a3.002 3.002 0 002.887 3H10zm1-1v3h2v-3h1a4 4 0 00-4-4v1a3 3 0 013 3h-2z" clip-rule="evenodd" />
                </svg>
                <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                </div>
            </div>
</div>

        <div class="w-full lg:w-1/2 lg:pl-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">We provide healthy food for your family.</h2>
        <p class="text-gray-700 font-bold mb-6">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>
        <p class="text-gray-700 mb-6">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        <button class="inline-block text-black border border-black hover:bg-red-900 hover:text-white font-semibold py-3 px-8 rounded-full">
            More About Us
        </button>
        </div>
  </div>
  )
}

export default Introduce