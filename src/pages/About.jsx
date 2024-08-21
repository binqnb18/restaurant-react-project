import React from 'react'
import Layout from '../Layouts/Layout'
import rib from '../assets/img/rib.png'
import Video from '../Components/Video'
import Guest from '../Components/Guest'
import Feedback from '../Components/Feedback'
const About = () => {
  return (
    <Layout>
<div class="relative flex flex-col md:flex-row items-center md:items-start gap-[90px] w-[1296px] h-[616px] mx-auto mt-[214px] ml-[152px]">
  
  <div class="flex-shrink-0 relative">
      <img src={rib} alt="Food Image" class="w-full h-auto" />
      <div class="absolute bottom-0 right-0 p-6 bg-gray-800 text-white rounded-lg w-3/4 transform translate-x-2/4 translate-y-1/4">
          <h3 class="text-xl font-semibold">Come and visit us</h3>
          <p class="mt-4">
              <strong>Phone:</strong> (414) 857 – 0107
          </p>
          <p>
              <strong>Email:</strong> happytummy@restaurant.com
          </p>
          <p>
              <strong>Address:</strong> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
          </p>
      </div>
  </div>
  
  
  <div class="flex flex-col justify-center">
      <h2 class="text-3xl font-bold leading-snug text-gray-900">
          We provide healthy food for your family.
      </h2>
      <p class="mt-4 text-lg text-gray-600">
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
      </p>
      <p class="mt-2 text-lg text-gray-600">
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
      </p>
  </div>
</div>
<Video />
<Guest />
<Feedback />
    </Layout>
  )
}

export default About