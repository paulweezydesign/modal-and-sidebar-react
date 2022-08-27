import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="text-xl font-bold text-center">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
