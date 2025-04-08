"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Update HeaderLogo to accept isScrolled prop
const HeaderLogo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const logoTextColorClass = isScrolled ? "text-black" : "text-white";
  const logoSubTextColorClass = isScrolled ? "text-[#6B7280]" : "text-gray-300";

  return (
    <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
       {/* Logo visual changes based on scroll */}
       <div className={`w-8 h-8 ${isScrolled ? 'bg-blue-600' : 'bg-white'} rounded-full transition-colors duration-300`}></div> 
       <span className={`text-xl font-bold ${logoTextColorClass} transition-colors duration-300`}>X-Design</span> 
       <span className={`text-sm ${logoSubTextColorClass} transition-colors duration-300`}>(Vmake AI)</span>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'AI E-commerce', hasDropdown: true },
    { name: 'AI Tools', hasDropdown: true },
    { name: 'Solution', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Use case', hasDropdown: false },
  ];

  const headerBaseClasses = "sticky top-0 z-50 transition-all duration-300 ease-in-out";
  const headerScrolledClasses = "bg-[rgba(255,255,255,0.8)] backdrop-blur-[44px] border-b border-[rgba(0,0,0,0.08)] shadow-sm";
  const textColorClass = isScrolled ? "text-[#374151]" : "text-white";

  return (
    <header className={`${headerBaseClasses} ${isScrolled ? headerScrolledClasses : 'bg-transparent border-transparent'}`}>
      <nav className="flex items-center justify-between gap-10 px-10 py-2.5 max-w-screen-xl mx-auto">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center gap-10">
          <Link href="/">
            {/* Use HeaderLogo component and pass isScrolled state */}
            <HeaderLogo isScrolled={isScrolled} /> 
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href="#"
                className={`flex items-center gap-1.5 px-3 h-10 rounded-lg ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-[rgba(255,255,255,0.1)]'} transition-colors duration-200`}
              >
                <span className={`text-sm font-semibold ${textColorClass} transition-colors duration-300`}>
                  {item.name}
                </span>
                {item.hasDropdown && (
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${textColorClass} transition-colors duration-300`}>
                    <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9C9.63317 9.78105 8.36684 9.78105 7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="currentColor"/>
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
           <Link href="#" className={`px-3 h-10 flex items-center rounded-lg ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-[rgba(255,255,255,0.1)]'} transition-colors duration-200`}>
              <span className={`text-sm font-semibold ${textColorClass} transition-colors duration-300`}>Top up</span>
           </Link>
          <button className={`px-3 h-10 ${isScrolled ? 'bg-[#0A68DA] hover:bg-[#0854AE]' : 'bg-white hover:bg-gray-200 text-[#0A68DA]'} ${isScrolled ? 'text-white' : 'text-[#0A68DA] border border-transparent'} text-[13px] font-semibold leading-[1.21] rounded-lg transition-all duration-300`}>
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 