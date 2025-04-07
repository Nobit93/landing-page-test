'use client'; // Mark as client component
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position at 50%
  const [isDragging, setIsDragging] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const sliderHandleRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (_e: React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
        setIsDragging(false);
    }
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
      if (isDragging) {
          setIsDragging(false);
      }
  }, [isDragging]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
      handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
  }, [handleMove]);

  useEffect(() => {
      if (isDragging) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          document.addEventListener('touchmove', handleTouchMove);
          document.addEventListener('touchend', handleTouchEnd);
      } else {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
      }

      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
      };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);


  return (
    <section className="bg-white flex flex-col items-center h-[calc(100vh-4.5rem)] overflow-hidden max-h-[720px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center flex-grow">
        <div className="text-center mb-20 w-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            AI Image Enhancer - Improve Picture Quality Online
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upscale images to the next level with BeautyPlus AI image enhancer.
            Improve photo or picture quality for best resolution, clarity, and color in seconds!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 w-full max-w-6xl lg:items-stretch">
          {/* Image Comparison Slider */}
          <div
            ref={imageContainerRef}
            className="w-full md:w-3/5 lg:w-1/2 relative rounded-2xl overflow-hidden cursor-ew-resize select-none flex-shrink-0 aspect-square lg:aspect-auto"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <Image
              src="/images/bp-image-enhancer/hero-image-before.png"
              alt="Before enhancement"
              layout="fill"
              objectFit="cover"
              priority
              draggable="false"
            />
            <div
              className="absolute top-0 left-0 h-full w-full origin-left overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src="/images/bp-image-enhancer/hero-image-after.png"
                alt="After enhancement"
                layout="fill"
                objectFit="cover"
                priority
                draggable="false"
                className="w-full h-full object-cover origin-left"
              />
            </div>
            <div
              ref={sliderLineRef}
              className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
            </div>
            <div
              ref={sliderHandleRef}
              className="absolute top-1/2 w-10 h-10 bg-white rounded-full shadow-lg cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
              >
                 <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L1 4.99997L5 9" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 1L15 4.99997L11 9" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
            </div>
          </div>

          {/* Upload Section */}
          <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 flex-shrink-0">
            <div className="w-full border-2 border-dashed border-pink-400 rounded-2xl bg-pink-50 p-6 md:p-8 text-center">
              <div className="flex flex-col items-center space-y-3 mb-4 md:mb-6">
                <Image src="/images/bp-image-enhancer/upload-icon.svg" alt="Upload icon" width={40} height={40} className="md:w-[50px] md:h-[50px]"/>
                <p className="text-base md:text-lg font-medium text-gray-900">Drag and drop photo here</p>
                <p className="text-sm md:text-base text-gray-600">Maximum size: 10MB</p>
              </div>
              <button className="bg-pink-500 text-white font-semibold py-2.5 px-6 md:py-3 md:px-7 rounded-full hover:bg-pink-600 transition duration-300 text-base md:text-lg">
                Upload Photo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a href="#" className="flex-1 bg-gray-900 text-white rounded-full py-3 px-4 md:py-4 md:px-5 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-800 transition duration-300">
                <Image src="/images/bp-image-enhancer/app-store-icon.svg" alt="App Store" width={20} height={20} className="md:w-6 md:h-6" />
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-light">GET IT ON</p>
                  <p className="text-sm md:text-lg font-medium">App Store</p>
                </div>
              </a>
              <a href="#" className="flex-1 bg-gray-900 text-white rounded-full py-3 px-4 md:py-4 md:px-5 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-800 transition duration-300">
                <Image src="/images/bp-image-enhancer/google-play-icon.svg" alt="Google Play" width={20} height={20} className="md:w-6 md:h-6" />
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-light">GET IT ON</p>
                  <p className="text-sm md:text-lg font-medium">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 