"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Re-defining Logo specific to Header style, or adapt the shared Logo component
const HeaderLogo: React.FC = () => {
  // Placeholder - In reality, construct from downloaded SVGs or use a single optimized SVG/Image
  return (
    <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
       {/* Simple visual placeholder */}
       <div className="w-8 h-8 bg-blue-600 rounded-full"></div> 
       <span className="text-xl font-bold text-black">X-Design</span> 
       <span className="text-sm text-[#6B7280]">(Vmake AI)</span>
    </div>
  );
};

const Header: React.FC = () => {
  const navItems = [
    { name: 'AI E-commerce', hasDropdown: true, dropdownIconColor: 'dark' },
    { name: 'AI Tools', hasDropdown: true, dropdownIconColor: 'dark' },
    { name: 'Solution', hasDropdown: true, dropdownIconColor: 'blue' },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Use case', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.8)] backdrop-blur-[44px] border-b border-[rgba(0,0,0,0.08)]">
      <nav className="flex items-center justify-between gap-10 px-10 py-2.5 max-w-screen-xl mx-auto">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center gap-10">
          <Link href="/">
            <HeaderLogo />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href="#" // Replace with actual paths later
                className="flex items-center gap-1.5 px-3 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-sm font-semibold text-[#374151]">
                  {item.name}
                </span>
                {item.hasDropdown && (
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9C9.63317 9.78105 8.36684 9.78105 7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="currentColor"/>
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
           <Link href="#" className="px-3 h-10 flex items-center rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-sm font-semibold text-[#374151]">Top up</span>
           </Link>
          <button className="px-3 h-10 bg-[#0A68DA] text-white text-[13px] font-semibold leading-[1.21] rounded-lg border border-white hover:bg-[#0854AE] transition-colors duration-200">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 