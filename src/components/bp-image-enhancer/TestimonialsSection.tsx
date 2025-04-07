import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'David',
    review: 'Absolutely impressed with Airbrush! It effortlessly refines video details, enhancing both brightness and contrast with precision. This tool has been essential in improving my video projects, ensuring high-quality outputs every time.',
    stars: 5,
    quoteColor: 'text-blue-400', // Example color based on design (blue in Figma)
    bgColor: 'bg-blue-50',
  },
    {
    id: 2,
    name: 'Sarah', // Assuming different names for variety
    review: 'Airbrush is a game-changer! The video enhancement features are intuitive and powerful. My footage looks incredibly professional now. Highly recommended for content creators!',
    stars: 5,
    quoteColor: 'text-blue-400',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    name: 'Michael',
    review: 'I was skeptical at first, but Airbrush delivered. The AI enhancement significantly improved the clarity and colors of my old videos. It\'s like giving them a new life.',
    stars: 5,
    quoteColor: 'text-blue-400',
    bgColor: 'bg-blue-50',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-pink-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          User Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`${testimonial.bgColor} rounded-2xl p-10 flex flex-col`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <StarRating rating={testimonial.stars} />
                </div>
                <div className="flex space-x-1">
                   <Image src="/images/bp-image-enhancer/quote-icon-start.svg" alt="Quote start" width={24} height={18} className={`${testimonial.quoteColor}`} />
                   <Image src="/images/bp-image-enhancer/quote-icon-end.svg" alt="Quote end" width={24} height={18} className={`${testimonial.quoteColor}`} />
                </div>
              </div>
              <p className="text-base text-gray-600 flex-grow">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 