import { Link } from 'react-router-dom';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="text-xl font-bold text-center">
      <Link to="/">
        <a className="mr-8" href="/">
          Home
        </a>
      </Link>
      <Link to="/about">
        <a href="/about" className="mr-8">
          About
        </a>
      </Link>
      <Link to="/kittens">
        <a className="mr-8" href="/kittens">
          Kittens
        </a>
      </Link>
      <div className="flex justify-end md:hidden">
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
