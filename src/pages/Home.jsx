import React from 'react'
import Card from '../Components/Card'
import Introduce from '../Components/Introduce'
import Event from '../Components/Event'
import Delivery from '../Components/Delivery'
import Feedback from '../Components/Feedback'
import Blog from '../Components/Blog'
import Banner from '../Components/Banner.jsx'

export const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <Introduce />
      <Event />
      <Delivery />
      <Feedback />
      <Blog />
    </>
  )
}

export default Home;
