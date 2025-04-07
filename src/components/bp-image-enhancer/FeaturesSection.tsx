import React from 'react';

const features = [
  {
    id: 1,
    title: 'Custom Background Color',
    description: 'SnapID makes it easy to add background to photos with solid colors, meeting various ID photo standards. Feel free to remove existing backdrop and pick the exact HEX color your document requires.',
    bgColor: 'bg-pink-50',
    numberColor: 'text-pink-200',
  },
  {
    id: 2,
    title: 'Pre-set Background Selection',
    description: "Don't worry about the right shade for your ID photo. The background changer offers common background colors: Pure white, gray, light blue, gradient blue, yellow, American-style texture, and more.",
    bgColor: 'bg-pink-50',
    numberColor: 'text-pink-200',
  },
  {
    id: 3,
    title: 'AI Background Changer',
    description: 'Say goodbye to rough, unnatural photo edges. The AI algorithm will add background to photo smoothly, perfectly blending them into intricate details like hair strands. It\'s your top-tier studio backdrop.',
    bgColor: 'bg-pink-50',
    numberColor: 'text-pink-200',
  },
  {
    id: 4,
    title: 'User-friendly Experience',
    description: 'SnapID is designed for ease of use. Just one click to change an ID headshot with the ideal background. The online app empowers you to create high-quality headshots on-demand, quickly and conveniently.',
    bgColor: 'bg-pink-50',
    numberColor: 'text-pink-200',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          Why Choose AirBrush to Enhance Image Quality?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className={`${feature.bgColor} rounded-2xl p-10 relative overflow-hidden`}>
              <span className={`absolute top-2 left-5 text-8xl font-bold ${feature.numberColor} opacity-50`} style={{ lineHeight: '1' }}>
                {feature.id}
              </span>
              <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                   {feature.title}
                 </h3>
                <p className="text-base text-gray-600">
                  {feature.description}
                </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 