import React from 'react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';


const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="#ranking" className="text-gray-800 hover:text-blue-500">
            Ranking
          </a>
          <a href="#drops" className="text-gray-800 hover:text-blue-500">
            DROPS
          </a>
        </nav>
        <DynamicWidget />
      </div>
    </header>
  );
};

export default Navbar;
