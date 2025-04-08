"use client";

import React from 'react';
import Image from 'next/image';

const RetailModelsSection: React.FC = () => {
  const options = ['Female', 'Male', 'Children', 'Silver'];
  const images = [
    { src: '/xd-ai-model/retail-model-1.png', alt: 'Retail Model 1' },
    { src: '/xd-ai-model/retail-model-2.png', alt: 'Retail Model 2' },
    { src: '/xd-ai-model/retail-model-3.png', alt: 'Retail Model 3' },
    { src: '/xd-ai-model/retail-model-4.png', alt: 'Retail Model 4' },
    { src: '/xd-ai-model/retail-model-5.png', alt: 'Retail Model 5' },
    { src: '/xd-ai-model/retail-model-6.png', alt: 'Retail Model 6' },
    // Add more images if needed for scrolling
    { src: '/xd-ai-model/retail-model-1.png', alt: 'Retail Model 7' },
    { src: '/xd-ai-model/retail-model-2.png', alt: 'Retail Model 8' },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-4xl font-bold text-[#16171A] leading-[1.21]">
            Retail fashion models comp card
          </h2>
          <div className="flex justify-center gap-2 w-full">
            {options.map((option, index) => (
              <button
                key={option}
                className={`px-4 py-2 text-xl leading-[1.5] rounded-lg border ${index === 0 ? 'bg-[#EEF7FF] border-[#3389FF] text-[#3389FF] font-bold hover:bg-[#DCE9F9] transition-colors duration-200' : 'bg-white border-[#D2D5DC] text-[#16171A] font-normal hover:bg-gray-100 transition-colors duration-200'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Image Scroll Container with hidden scrollbar */}
        <div className="relative w-full h-[370px]">
          {/* Scrollable content */}
          <div className="w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="flex gap-4 w-max">
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[270px] h-[370px] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Fixed overlay - this stays in place when content scrolls */}
          <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-white via-white/80 to-transparent z-10 flex items-center justify-end pr-10 pointer-events-none">
            <button className="px-6 py-3 bg-[#16171A] text-white text-xl font-bold leading-[1.5] rounded-lg pointer-events-auto hover:bg-[#303542] transition-colors duration-200">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Optional: Add this utility class to your global CSS or tailwind.config.js if needed
/*
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
*/

export default RetailModelsSection; 