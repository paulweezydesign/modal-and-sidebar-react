import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import Kittens from './kittens';


const App = () => {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
       
        <Route path='/' element={<Home />}></Route>
        <Route path='/kittens' element={<Kittens />}></Route>
      </Routes>
      <Modal />
      <Sidebar />
      </Router>
    </>
  );
}
export default App;