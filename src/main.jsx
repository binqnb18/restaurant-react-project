import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Login from './pages/admin/Login';  // Import trang login
import Layout from './Layouts/Layout'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Sử dụng BrowserRouter
import Dashboard from './pages/admin/Dashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <Routes>
        {/* Route không sử dụng Layout (Login trang quản trị viên) */}
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Các route sử dụng Layout */}
        <Route element={<Layout />}> {/* Bọc Layout cho các route này */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
