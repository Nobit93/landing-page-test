"use client";

import React from 'react';
import Image from 'next/image';

const CTASection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full py-[60px]">
      <div className="max-w-[1280px] w-full px-4">
        {/* Content Container: Flex column on mobile, row on md and up */}
        <div className="flex flex-col md:flex-row md:justify-end items-stretch md:items-center w-full gap-8 md:gap-12 md:pl-[60px] rounded-3xl bg-gradient-to-br from-[#9EA2AE] to-[#C2C3CC] relative overflow-hidden p-6 md:p-0">
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
          
          {/* Left Content: Takes full width on mobile */}
          <div className="flex-1 flex flex-col gap-8 md:py-8 z-10 order-2 md:order-1">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-[48px] font-semibold leading-tight md:leading-[1.21] tracking-tight md:tracking-[-0.02em] text-white">
                AI Fashion Model
              </h2>
              <p className="text-sm md:text-base leading-normal md:leading-[1.375] text-white/90">
                Generate AI fashion models for ecommerce catalogue using real models, mannequins, or flat-lay apparel images. 
                Easily customize skin tone, facial expression, and body size to create professional on-model product photography 
                and elevate your clothing presentations.
              </p>
            </div>
            
            <button className="flex items-center justify-center gap-3 px-6 h-14 md:h-16 bg-[#16171A] rounded-2xl text-xl md:text-2xl font-bold text-white w-full md:w-fit hover:bg-[#2C2D30] transition-colors duration-200">
              <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG paths */}
                <path d="M15.4667 1.2267C17.1023 -0.408901 19.7541 -0.408901 21.3897 1.2267L29.0004 8.83736C29.9817 9.81872 29.9817 11.4098 29.0004 12.3912C28.019 13.3725 26.4279 13.3725 25.4465 12.3912L21.7788 8.72341C21.3532 8.28088 21.1657 8.01013 20.9411 7.46694V24.0166C20.9411 25.4045 19.816 26.5296 18.4282 26.5296C17.0403 26.5296 15.9153 25.4045 15.9153 24.0166V7.46694C15.6795 8.00202 15.4931 8.27 15.0776 8.72341L11.4098 12.3912C10.4285 13.3725 8.83737 13.3725 7.85601 12.3912C6.87465 11.4098 6.87465 9.81872 7.85601 8.83736L15.4667 1.2267Z" fill="currentColor"/>
                <path d="M5.02588 25.2731C5.02588 23.8852 3.9008 22.7602 2.51294 22.7602C1.12509 22.7602 8.16243e-06 23.8852 8.16243e-06 25.2731L4.16823e-06 29.2141C-5.77419e-05 30.0768 -0.000114459 30.8692 0.0540028 31.5316C0.112348 32.2457 0.245912 33.0269 0.639093 33.7986C1.20125 34.9019 2.09825 35.7989 3.20154 36.361C3.9732 36.7542 4.75446 36.8878 5.46858 36.9461C6.13089 37.0002 6.92317 37.0002 7.78581 37.0001H29.0703C29.933 37.0002 30.7255 37.0002 31.3878 36.9461C32.1019 36.8878 32.8832 36.7542 33.6548 36.361C34.7581 35.7989 35.6551 34.9019 36.2173 33.7986C36.6105 33.0269 36.744 32.2457 36.8024 31.5316C36.8565 30.8692 36.8564 30.0769 36.8564 29.2142L36.8564 25.2731C36.8564 23.8852 35.7313 22.7602 34.3434 22.7602C32.9556 22.7602 31.8305 23.8852 31.8305 25.2731V29.1263C31.8305 30.106 31.8285 30.6896 31.7932 31.1223C31.7716 31.3863 31.7432 31.4973 31.7339 31.5271C31.6551 31.6766 31.5329 31.7989 31.3833 31.8777C31.3536 31.8869 31.2426 31.9154 30.9785 31.937C30.5459 31.9723 29.9622 31.9743 28.9825 31.9743H7.87387C6.89415 31.9743 6.3105 31.9723 5.87785 31.937C5.61379 31.9154 5.5028 31.8869 5.47305 31.8777C5.32348 31.7989 5.20126 31.6766 5.12245 31.5271C5.11322 31.4973 5.08475 31.3863 5.06318 31.1223C5.02783 30.6896 5.02588 30.106 5.02588 29.1263V25.2731Z" fill="currentColor"/>
              </svg>
              Upload Image
            </button>
          </div>
          
          {/* Right Content: Takes full width on mobile, specific width/height on md and up */}
          <div className="relative w-full md:w-[520px] h-[400px] md:h-[450px] order-1 md:order-2">
            {/* Background Image with Blur (optional visual element) */}
            {/* Consider removing or adjusting opacity/blur for mobile if needed */}
            <div className="absolute inset-0 opacity-[0.08] blur-[74px] hidden md:block">
              <Image
                src="/images/xd-ai-model/cta-model-image.png"
                alt="Background Effect"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Main Image */}
            <Image
              src="/images/xd-ai-model/cta-model-image.png"
              alt="Fashion Model"
              fill
              className="object-cover object-top rounded-lg md:rounded-none" /* Rounded corners for mobile */
            />
            
            {/* Floating Info Box: Positioned bottom-right */}
            <div className="absolute bottom-5 right-5 w-[327px] max-w-[calc(100%-40px)] h-[143px] bg-black/17 backdrop-blur-[44px] rounded-xl p-4 shadow-[0px_8px_24px_0px_rgba(10,18,38,0.06)] flex gap-4">
              {/* Left: Image Preview */}
              <div className="h-full aspect-[111/111] bg-[#F3F3F3] rounded-lg flex-shrink-0">
                <Image
                  src="/images/xd-ai-model/cta-preview-image.png"
                  alt="Preview"
                  width={111}
                  height={111}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Right: Text Content */}
              <div className="flex flex-col justify-center gap-2 overflow-hidden">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-white/16 rounded-lg text-sm text-white whitespace-nowrap">Flatlay</span>
                  <span className="px-2 py-1 bg-white/16 rounded-lg text-sm text-white whitespace-nowrap">Model</span>
                </div>
                <p className="text-sm text-white">Western female model, brown hair, neutral expression, runway fashion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 