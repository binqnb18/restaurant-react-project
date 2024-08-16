import React from 'react'
import event1 from '../assets/img/catering.png';
import event2 from '../assets/img/Birthday.png';
import event3 from '../assets/img/wedding.png';
import event4 from '../assets/img/event.png';
const Event = () => {
  return (
    <div class="bg-white py-16 px-8 lg:px-72">
  <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">We also offer unique services for your events</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  
    <div class="flex flex-col items-center">
      <div class="w-64 h-64 md:w-70 md:h-80">
        <img src={event1} alt="Caterings" class="w-full h-full object-cover rounded-lg mb-4" />
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-gray-900">Caterings</h3>
      <p class="text-gray-600 text-center mt-2">
        In the new era of technology we look in the future with certainty for life.
      </p>
    </div>
    
    <div class="flex flex-col items-center">
      <div class="w-64 h-64 md:w-70 md:h-80">
        <img src={event2} alt="Birthdays" class="w-full h-full object-cover rounded-lg mb-4" />
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-gray-900">Birthdays</h3>
      <p class="text-gray-600 text-center mt-2">
        In the new era of technology we look in the future with certainty for life.
      </p>
    </div>

    <div class="flex flex-col items-center">
      <div class="w-64 h-64 md:w-70 md:h-80">
        <img src={event3} alt="Weddings" class="w-full h-full object-cover rounded-lg mb-4" />
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-gray-900">Weddings</h3>
      <p class="text-gray-600 text-center mt-2">
        In the new era of technology we look in the future with certainty for life.
      </p>
    </div>


    <div class="flex flex-col items-center">
      <div class="w-64 h-64 md:w-70 md:h-80">
        <img src={event4} alt="Events" class="w-full h-full object-cover rounded-lg mb-4" />
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-gray-900">Events</h3>
      <p class="text-gray-600 text-center mt-2">
        In the new era of technology we look in the future with certainty for life.
      </p>
    </div>

  </div>
</div>



  )
}

export default Event