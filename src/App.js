import './style.css';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';



export default function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}
