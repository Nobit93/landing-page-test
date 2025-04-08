import React from 'react';
import Image from 'next/image';

const MoreScenariosSection: React.FC = () => {
  const scenarios = [
    { 
      bgImage: '/xd-ai-model/more-scenario-1-bg.png',
      title: 'AI background generator' 
    },
    { 
      bgImage: '/xd-ai-model/more-scenario-2-bg.png',
      title: 'AI background generator' 
    },
    { 
      bgImage: '/xd-ai-model/more-scenario-3-bg.png',
      title: 'AI background generator' 
    },
    { 
      bgImage: '/xd-ai-model/more-scenario-4-bg.png',
      title: 'AI background generator' 
    },
  ];

  // Simple placeholder for the complex icon structure
  const IconPlaceholder: React.FC = () => (
    <div className="w-12 h-12 bg-[rgba(255,255,255,0.24)] rounded-2xl flex items-center justify-center">
      {/* In a real scenario, you might use the downloaded SVGs or a proper icon component */}
      {/* Example using one downloaded SVG, adjust as needed */}
      <Image src="/xd-ai-model/more-scenario-icon-1.svg" alt="Scenario Icon" width={24} height={24} /> 
    </div>
  );

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold text-[#16171A] leading-[1.21] text-center max-w-2xl">
          More removal scenarios to empower business services.
        </h2>
        <div className="flex flex-wrap self-stretch gap-8 justify-center">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="relative w-[calc(50%-1rem)] h-[450px] rounded-3xl overflow-hidden flex flex-col justify-end p-6"
              style={{ 
                backgroundImage: `url(${scenario.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
              }}
            >
              <div className="flex items-center gap-3.5 z-10">
                <IconPlaceholder />
                <span className="text-2xl font-bold text-white leading-[1.33]">
                  {scenario.title}
                </span>
                <button className="ml-auto px-4 py-2 bg-white text-[#101727] text-lg font-semibold leading-[1.55] rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Try on
                </button>
              </div>
              {/* Optional: Add a subtle overlay for better text visibility if needed */}
              {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreScenariosSection; 