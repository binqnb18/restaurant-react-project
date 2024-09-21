import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from '../Components/Navbar'; // Giả sử bạn có Navbar
import Footer from '../Components/Footer'; // Giả sử bạn có Footer

const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet /> {/* Nơi để hiển thị các route con */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
