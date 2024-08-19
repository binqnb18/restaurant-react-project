import React from 'react'
import chef from '../assets/img/chef.png';
import curry from '../assets/img/curry.png';
import grill from '../assets/img/grill.png';
const Delivery = () => {
  return (
    <div class="bg-white py-16 px-8 lg:px-24 flex flex-col lg:flex-row items-center">

<div className="flex justify-center items-center" style={{ height: '100vh' }}>
    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div style={{ borderRadius: '12px', position: 'relative' }}>
            <img 
                src={chef} 
                alt="Chef preparing food" 
                className="w-full h-full object-cover rounded-lg" 
                style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }}
            />
        </div>
        <div className="grid grid-rows-2 gap-4" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '16px' }}>
            <div style={{ height: '333px', borderRadius: '12px', overflow: 'hidden' }}>
                <img 
                    src={curry} 
                    alt="Dish 1" 
                    className="w-full h-full object-cover rounded-lg" 
                    style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }}
                />
            </div>
            <div style={{ height: '240px', borderRadius: '12px', overflow: 'hidden' }}>
                <img 
                    src={grill} 
                    alt="Dish 2" 
                    className="w-full h-full object-cover rounded-lg" 
                    style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }}
                />
            </div>
        </div>
    </div>
</div>


  

  <div class="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
    <h2 class="text-4xl font-bold text-gray-900 mb-6">Fastest Food Delivery in City</h2>
    <p class="text-gray-700 mb-6">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.</p>
    <ul class="space-y-8">
    <li class="flex items-center text-gray-700">
  <div class="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="" fill="white" viewBox="0 0 320 512">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  </div>
  <span class="ml-2">Delivery within 30 minutes</span>
</li>
      <li class="flex items-center text-gray-700">
        <svg class="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11.414l4.95 4.95-1.414 1.414L12 14.828l-4.95 4.95-1.414-1.414L10.586 13 5.636 8.05l1.414-1.414L12 11.172l4.95-4.95 1.414 1.414L13.414 13z" />
        </svg>
        Best Offer & Prices
      </li>
      <li class="flex items-center text-gray-700">
        <svg class="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 10h-4v2h4v-2zm2 6H7v-2h10v2zm2-10H5V7h14v2z" />
        </svg>
        Online Services Available
      </li>
    </ul>
  </div>
</div>

  )
}

export default Delivery