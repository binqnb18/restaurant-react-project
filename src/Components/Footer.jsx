import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/egg.png'; 
import img2 from '../assets/img/fried.png';
import img3 from '../assets/img/fried2.png';
import img4 from '../assets/img/pancake.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div class="p-4 bg-gray-800 rounded-lg">
  <div class="flex items-center mb-4">  
    <img
      class="h-10 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=500"
      alt="Bistro Bliss"
    />
    <span class="text-xl font-semibold text-white ml-2">Bistro Bliss</span>
  </div>
  <p class="text-sm text-gray-300 mb-4">
    In the new era of technology, we look to the future with certainty and pride for our company.
  </p>

  
  <div class="flex items-center space-x-4">
    <a href="#" class="hover:text-white">
      <div class="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 320 512">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </div>
    </a>
    <a href="#" class="hover:text-white">
      <div class="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </div>
    </a>
    <a href="#" class="hover:text-white">
      <div class="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 488 512">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </div>
    </a>
    <a href="#" class="hover:text-white">
      <div class="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 576 512">
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
      </div>
    </a>
  </div>
  
</div>


        {/* Pages Links */}
      
        <div>
          <h3 className="text-white font-semibold">Pages</h3>
          <ul className="mt-6 space-y-4">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Delivery</a></li>
          </ul>
        </div>
        {/* Utility Pages Links */}
        <div>
          <h3 className="text-white font-semibold">Utility Pages</h3>
          <ul className="mt-6 space-y-4">
            <li><a href="#" className="hover:text-white">Start Here</a></li>
            <li><a href="#" className="hover:text-white">Styleguide</a></li>
            <li><a href="#" className="hover:text-white">Password Protected</a></li>
            <li><a href="#" className="hover:text-white">404 Not Found</a></li>
            <li><a href="#" className="hover:text-white">Licenses</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
            <li><a href="#" className="hover:text-white">View More</a></li>
          </ul>
        </div>
  

        {/* Instagram Feed */}
        <div>
          <h3 className="text-white font-semibold">Follow Us On Instagram</h3>
          <div className="mt-4 grid grid-cols-2 gap-9">
            <img src={img1} alt="Food 1" className="rounded-md"/>
            <img src={img2} alt="Food 2" className="rounded-md"/>
            <img src={img3} alt="Food 3" className="rounded-md"/>
            <img src={img4} alt="Food 4" className="rounded-md"/>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2023 Hashtag Developer. All Rights Reserved
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
