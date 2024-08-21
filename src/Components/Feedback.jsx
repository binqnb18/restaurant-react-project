import React from 'react'
import user from '../assets/img/User.png';
import user1 from '../assets/img/user1.png';
import user2 from '../assets/img/user2.png';
const Feedback = () => {
  return (
<div class="max-w-6xl mx-auto py-16">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-24">
      
        <div class="max-w-md mx-auto bg-[#F9F9F7] border rounded-lg p-6 shadow-lg">
            <p class="text-xl font-semibold text-red-600 mb-4">“The best restaurant”</p>
            <p class="text-gray-600 mb-6">
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
            </p>
            <hr class="border-gray-300 mb-6" />
            <div class="flex items-center">
                <img src={user} alt="Sophire Robson" class="w-20 h-20 rounded-full mr-8" />
                <div>
                    <p class="font-semibold text-gray-800">Sophire Robson</p>
                    <p class="text-gray-500">Los Angeles, CA</p>
                </div>
            </div>
        </div>

        
        <div class="max-w-md mx-auto bg-[#F9F9F7] border rounded-lg p-6 shadow-lg">
            <p class="text-xl font-semibold text-red-600 mb-4">“Simply delicious”</p>
            <p class="text-gray-600 mb-6">
                Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
            </p>
            <hr class="border-gray-300 mb-6" />
            <div class="flex items-center">
                <img src={user1} alt="Matt Cannon" class="w-20 h-20 rounded-full mr-8" />
                <div>
                    <p class="font-semibold text-gray-800">Matt Cannon</p>
                    <p class="text-gray-500">San Diego, CA</p>
                </div>
            </div>
        </div>

        
        <div class="max-w-md mx-auto bg-[#F9F9F7] border rounded-lg p-6 shadow-lg">
            <p class="text-xl font-semibold text-red-600 mb-4">“One of a kind restaurant”</p>
            <p class="text-gray-600 mb-6">
                The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
            </p>
            <hr class="border-gray-300 mb-6" />
            <div class="flex items-center">
                <img src={user2} alt="Andy Smith" class="w-20 h-20 rounded-full mr-8" />
                <div>
                    <p class="font-semibold text-gray-800">Andy Smith</p>
                    <p class="text-gray-500">San Francisco, CA</p>
                </div>
            </div>
        </div>
    </div>
</div>



  
  )
}

export default Feedback