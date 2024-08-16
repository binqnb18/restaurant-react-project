import React from 'react'
import hambuger from '../assets/img/hambuger.png';
import pizza from '../assets/img/pizza.png';
import potato from '../assets/img/potato.png';
import chicken from '../assets/img/chicken.png';
import cake from '../assets/img/cake.png';


const Blog = () => {
  return (
    <div class="bg-white py-16 px-8 lg:px-24">
  <div class="flex justify-between items-center mb-12">
    <h2 class="text-4xl font-bold text-gray-900">Our Blog & Articles</h2>
    <a href="#" class="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700">Read All Articles</a>
  </div>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

    <div class="lg:col-span-2">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={hambuger} alt="Big Blog Image" class="w-full h-64 object-cover" />
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-2">January 3, 2023</p>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elitlitim sempet adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.
          </p>
        </div>
      </div>
    </div>
    

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
    
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={potato} class="w-full h-40 object-cover" />
        <div class="p-4">
          <p class="text-sm text-gray-500 mb-2">January 3, 2023</p>
          <h3 class="text-lg font-semibold text-gray-900">How to prepare the perfect french fries in an air fryer</h3>
        </div>
      </div>
      
      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={chicken} alt="Blog" class="w-full h-40 object-cover" />
        <div class="p-4">
          <p class="text-sm text-gray-500 mb-2">January 3, 2023</p>
          <h3 class="text-lg font-semibold text-gray-900">How to prepare delicious chicken tenders</h3>
        </div>
      </div>
      
    
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={cake} alt="Blog" class="w-full h-40 object-cover" />
        <div class="p-4">
          <p class="text-sm text-gray-500 mb-2">January 3, 2023</p>
          <h3 class="text-lg font-semibold text-gray-900">7 delicious cheesecake recipes you can prepare</h3>
        </div>
      </div>
      
      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={pizza} alt="Blog" class="w-full h-40 object-cover" />
        <div class="p-4">
          <p class="text-sm text-gray-500 mb-2">January 3, 2023</p>
          <h3 class="text-lg font-semibold text-gray-900">5 great pizza restaurants you should visit this city</h3>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog