import React from 'react'
import Layout from '../Layouts/Layout';
import Card from '../Components/Card';
import Introduce from '../Components/Introduce';
import Event from '../Components/Event';
import Delivery from '../Components/Delivery';
import Feedback from '../Components/Feedback';
import Blog from '../Components/Blog';
import Banner from '../Components/Banner.jsx';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Layout>
    <Banner />
    <Card />
    <Introduce />
    <Event />
    <Delivery />
    <Feedback />
    <Blog />
  </Layout>
  )
}

export default Home;
