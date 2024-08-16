import React from 'react'
import user from '../assets/img/User.png';
import user1 from '../assets/img/User1.png';
import user2 from '../assets/img/User2.png';
const Feedback = () => {
  return (
    <div class="bg-white py-16 px-8 lg:px-24">
    <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      
      <div class="bg-white shadow-lg p-6 rounded-lg">
        <p class="text-xl font-semibold text-red-600 mb-4">“The best restaurant”</p>
        <p class="text-gray-700 mb-6">
          Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
        </p>
        <div class="flex items-center">
          <img src={user} alt="Sophire Robson" class="w-12 h-12 rounded-full mr-4" />
          <div>
            <p class="font-semibold text-gray-900">Sophire Robson</p>
            <p class="text-gray-500 text-sm">Los Angeles, CA</p>
          </div>
        </div>
      </div>
      
      
      <div class="bg-white shadow-lg p-6 rounded-lg">
        <p class="text-xl font-semibold text-red-600 mb-4">“Simply delicious”</p>
        <p class="text-gray-700 mb-6">
          Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
        </p>
        <div class="flex items-center">
          <img src={user1} alt="Matt Cannon" class="w-12 h-12 rounded-full mr-4" />
          <div>
            <p class="font-semibold text-gray-900">Matt Cannon</p>
            <p class="text-gray-500 text-sm">San Diego, CA</p>
          </div>
        </div>
      </div>
      
      
      <div class="bg-white shadow-lg p-6 rounded-lg">
        <p class="text-xl font-semibold text-red-600 mb-4">“One of a kind restaurant”</p>
        <p class="text-gray-700 mb-6">
          The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
        </p>
        <div class="flex items-center">
          <img src={user2} alt="Andy Smith" class="w-12 h-12 rounded-full mr-4" />
          <div>
            <p class="font-semibold text-gray-900">Andy Smith</p>
            <p class="text-gray-500 text-sm">San Francisco, CA</p>
          </div>
        </div>
      </div>
  
    </div>
  </div>
  
  )
}

export default Feedback