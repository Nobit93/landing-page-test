"use client";

import React from 'react';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="bg-white py-16 px-8 flex justify-center items-center">
      <div className="relative w-[1200px] h-[600px] bg-gradient-to-r from-[#9EA2AE] to-[#C2C3CC] rounded-3xl flex items-center px-6 overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col gap-8 w-1/2 z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[48px] font-semibold text-white leading-[1.21] tracking-[-2.08%]">
              AI Fashion Model
            </h2>
            <p className="text-base text-white leading-[1.375]">
              Generate AI fashion models for ecommerce catalogue using real models,
              mannequins, or flat-lay apparel images. Easily customize skin tone,
              facial expression, and body size to create professional on-model
              product photography and elevate your clothing presentations.
            </p>
          </div>
          <button className="flex items-center justify-center gap-3 px-6 bg-[#16171A] text-white text-2xl font-bold leading-[1.21] rounded-2xl h-16 w-fit">
            <Image src="/xd-ai-model/cta-upload-icon.svg" alt="Upload Icon" width={24} height={24} />
            Upload Image
          </button>
        </div>

        {/* Right Image Area */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
          {/* Blurred Background Image */}
          <Image
            src="/xd-ai-model/cta-bg-blur.png"
            alt="Blurred background"
            fill
            className="object-cover filter blur-[74px] opacity-80"
          />
          {/* Main Image */}
          <Image
            src="/xd-ai-model/cta-main-image.png"
            alt="Fashion model showcase"
            width={570}
            height={570}
            className="relative z-10 object-contain"
          />

          {/* Label Overlay */}
          <div className="absolute bottom-10 right-10 bg-[rgba(0,0,0,0.17)] backdrop-blur-[44px] rounded-xl p-4 flex items-center gap-4 z-20 w-[327px] h-[143px]">
            <Image
              src="/xd-ai-model/cta-label-flatlay-image.png"
              alt="Flatlay example"
              width={111} 
              height={111}
              className="rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-[rgba(255,255,255,0.16)] text-white text-sm rounded-lg">
                  Flatlay
                </span>
                <span className="px-2 py-1 bg-[rgba(255,255,255,0.16)] text-white text-sm rounded-lg">
                  Model
                </span>
              </div>
              <p className="text-white text-sm leading-[1.2]">
                Western female model, brown hair, neutral expression, runway fashion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 