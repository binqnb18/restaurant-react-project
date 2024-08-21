import React from 'react'
import mask from "../assets/img/Maskgroup.png"
const Guest = () => {
  return (
    <div class="relative mx-auto mt-24 w-full max-w-6xl h-auto bg-white flex justify-between items-center p-12">

    <div class="w-1/2">
        <h2 class="text-5xl font-bold text-gray-800 mb-6">
            A little information for our valuable guest
        </h2>
        <p class="text-lg text-gray-600 mb-12">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        
        <div class="grid grid-cols-2 gap-8">
    <div class="border border-inherit rounded-lg p-6 text-center">
        <span class="text-4xl font-semibold text-gray-800">3</span>
        <p class="text-lg text-gray-600 mt-2">Locations</p>
    </div>
    <div class="border border-inherit rounded-lg p-6 text-center">
        <span class="text-4xl font-semibold text-gray-800">1995</span>
        <p class="text-lg text-gray-600 mt-2">Founded</p>
    </div>
    <div class="border border-inherit rounded-lg p-6 text-center">
        <span class="text-4xl font-semibold text-gray-800">65+</span>
        <p class="text-lg text-gray-600 mt-2">Staff Members</p>
    </div>
    <div class="border border-inherit rounded-lg p-6 text-center">
        <span class="text-4xl font-semibold text-gray-800">100%</span>
        <p class="text-lg text-gray-600 mt-2">Satisfied Customers</p>
    </div>
</div>

    </div>
    
    <div class="w-1/2">
        <img src={mask} alt="Cooking Image" class="w-full h-auto rounded-lg object-cover ml-36" />
    </div>
</div>


  )
}

export default Guest