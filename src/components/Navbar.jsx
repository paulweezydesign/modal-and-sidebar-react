import { Link } from 'react-router-dom';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const { openSidebar,  } = useGlobalContext();
  return (
    <nav className="text-xl font-bold text-center">
      <Link to="/home">Home</Link>
      <Link to="/kittens">Kittens</Link>
      <div className='flex justify-end md:hidden'>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      </div>
    </nav>
  );
}
export default Navbar;
