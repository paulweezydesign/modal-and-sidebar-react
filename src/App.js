import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import Kittens from './kittens';
import Products from './Products';
import About from './about';

import SingleProduct from './SingleProduct';
import SharedProductLayout from './SharedProductLayout';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="kittens" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
        </Routes>
        <Modal />
        <Sidebar />
      </Router>
    </>
  );
};
export default App;
