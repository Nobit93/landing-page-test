import React from 'react';
import Image from 'next/image';

const FeaturesSection: React.FC = () => {
  const steps = [
    {
      icon: '/xd-ai-model/features-step1-icon.svg',
      title: 'Upload your image',
      description: 'Select the image you want to remove the background from by clicking \'Upload Image\' or simply drag and drop your files into the section.',
    },
    {
      icon: '/xd-ai-model/features-step2-icon.svg',
      title: 'Let AI remove the background',
      description: 'Sit back and relax, X-Design\'s AI-Powered background eraser will do all the work automatically.',
    },
    {
      icon: '/xd-ai-model/features-step3-icon.svg',
      title: 'Download your image',
      description: 'Save your edit as a transparent background or use X-Design\'s AI background generator to generate your new background.',
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-bold text-[#16171A] leading-[1.21]">
            How to remove background from a picture?
          </h2>
        </div>
        <div className="flex self-stretch gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col flex-1 ${index === 1 ? 'gap-6' : 'gap-6'} p-8 bg-[#F3F4F6] rounded-3xl`}
            >
              <Image src={step.icon} alt={`Step ${index + 1} Icon`} width={48} height={48} />
              <div className="flex flex-col self-stretch gap-4">
                <div className="flex flex-col self-stretch items-start gap-1">
                  <h3 className="text-2xl font-bold text-[#374151] leading-[1.21]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-base text-[#6B7280] leading-[1.375]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="px-4 py-2 bg-[#101727] text-[#F9FAFB] text-lg font-semibold leading-[1.67] rounded-lg hover:bg-[#303542] transition-colors duration-200">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection; 