import React from 'react'
import card1 from '../assets/img/icon1.png';
import card2 from '../assets/img/icon2.png';
import card3 from '../assets/img/icon3.png';
import card4 from '../assets/img/icon4.png';
const Card = () => {
  return (
    <div class="text-center py-12 px-4 lg:px-8">
    <h2 class="text-4xl font-bold mb-12 text-gray-900">Browse Our Menu</h2>
    
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-[330px]">
    
      <div class="bg-white shadow-lg p-10 flex flex-col items-center border border-gray-300 rounded-lg">
        <div class="rounded-full p-2 mb-2">
          <img src={card1} alt="Breakfast" class="h-20 w-20" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Breakfast</h3>
        <p class="text-gray-600 text-center mb-2">
          In the new era of technology we look in the future with certainty and pride for our life.
        </p>
        <a href="#" class="text-red-600 font-bold hover:underline">Explore Menu</a>
      </div>
      
    
      <div class="bg-white shadow-lg p-10 flex flex-col items-center border border-gray-300 rounded-lg">
        <div class="rounded-full p-2 mb-2">
          <img src={card2} alt="Main Dishes" class="h-20 w-20" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Main Dishes</h3>
        <p class="text-gray-600 text-center mb-2">
          In the new era of technology we look in the future with certainty and pride for our life.
        </p>
        <a href="#" class="text-red-600 font-bold hover:underline">Explore Menu</a>
      </div>
      
  
      <div class="bg-white shadow-lg p-10 flex flex-col items-center border border-gray-300 rounded-lg">
        <div class="rounded-full p-2 mb-2">
          <img src={card3} alt="Drinks" class="h-20 w-20" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Drinks</h3>
        <p class="text-gray-600 text-center mb-2">
          In the new era of technology we look in the future with certainty and pride for our life.
        </p>
        <a href="#" class="text-red-600 font-bold hover:underline">Explore Menu</a>
      </div>
      

      <div class="bg-white shadow-lg p-10 flex flex-col items-center border border-gray-300 rounded-lg">
        <div class="rounded-full p-2 mb-2">
          <img src={card4} alt="Desserts" class="h-20 w-20" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Desserts</h3>
        <p class="text-gray-600 text-center mb-2">
          In the new era of technology we look in the future with certainty and pride for our life.
        </p>
        <a href="#" class="text-red-600 font-bold hover:underline">Explore Menu</a>
      </div>
      
    </div>
  </div>
  
  

  )
}

export default Card