"use client";

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            {/* Logo - Replace with actual logo */}
            <div className="flex-shrink-0 flex items-center space-x-2.5">
              <div className="bg-gray-300 w-8 h-8"></div> {/* Placeholder */}
              <span className="text-2xl font-medium text-gray-900">BeautyPlus</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Home</a>
            <div className="relative">
              <button type="button" className="group inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 focus:outline-none">
                <span>Online Tools</span>
                <Image src="/images/bp-image-enhancer/navbar-dropdown-icon.svg" alt="Dropdown icon" width={16} height={16} className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
              </button>
              {/* Dropdown menu, show/hide based on menu state */}
            </div>
            <div className="relative">
              <button type="button" className="group inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 focus:outline-none">
                <span>Features</span>
                <Image src="/images/bp-image-enhancer/navbar-dropdown-icon.svg" alt="Dropdown icon" width={16} height={16} className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
              </button>
              {/* Dropdown menu */}
            </div>
            <div className="relative">
              <button type="button" className="group inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 focus:outline-none">
                <span>Download</span>
                <Image src="/images/bp-image-enhancer/navbar-dropdown-icon.svg" alt="Dropdown icon" width={16} height={16} className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
              </button>
              {/* Dropdown menu */}
            </div>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Academy</a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-base font-semibold text-black bg-white hover:bg-gray-50">
              Download App
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: outline/menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
    </header>
  );
};

export default Header; 