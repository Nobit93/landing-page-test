"use client";

import React from 'react';
import Image from 'next/image';

const WhyChooseSection: React.FC = () => {
  const content = [
    {
      title: 'AI Product Photography',
      description:
        'Transform plain product images into stunning, professional visuals in seconds. Enhance your product presentation and captivate customers with AI-powered photography editing.',
      imageUrl: '/xd-ai-model/why-choose-1.png',
      imageAlt: 'AI Product Photography Example 1',
      reverse: false,
    },
    {
      title: 'AI Product Photography',
      description:
        'Transform plain product images into stunning, professional visuals in seconds. Enhance your product presentation and captivate customers with AI-powered photography editing.',
      imageUrl: '/xd-ai-model/why-choose-2.png',
      imageAlt: 'AI Product Photography Example 2',
      reverse: true,
    },
  ];

  return (
    <section className="bg-[#F6F7FA] py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold text-[#16171A] leading-[1.21]">
          Why Choose X-Design?
        </h2>
        <div className="flex flex-col gap-8 w-full">
          {content.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-10 bg-white rounded-3xl px-10 h-[490px] ${item.reverse ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="relative flex-1 h-full">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-[#16171A] leading-[1.25]">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#5E616B] leading-[1.375]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 