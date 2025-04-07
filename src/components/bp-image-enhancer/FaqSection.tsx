'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpenInitially?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpenInitially = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900">{question}</h3>
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            {isOpen ? (
                 <Image src="/images/bp-image-enhancer/faq-toggle-icon.svg" alt="Toggle open" width={20} height={20} />
            ) : (
                 <Image src="/images/bp-image-enhancer/faq-toggle-plus-icon.svg" alt="Toggle closed" width={20} height={20} />
            )
            }
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="text-base text-gray-600 pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: 'What is SnapID?',
    answer: 'SnapID is an online transparent background maker that removes the background from headshot photos with a click.',
    isOpenInitially: true, // First item open by default
  },
  {
    question: 'Can SnapID remove backgrounds from any type of ID photo?',
    answer: 'Yes, the background remover can seamlessly delete backgrounds from various headshots including professional headshots, corporate photos and passport images.',
     isOpenInitially: true,
  },
  {
    question: 'Is the SnapID background remover free?',
    answer: 'Basic background removal is often free, but advanced features or high-resolution downloads might require a subscription. Please check the specific tool\'s pricing page.',
  },
  {
    question: 'What kinds of photos does SnapID support?',
    answer: 'Most tools support common image formats like JPG, PNG, and sometimes HEIC or WebP. Check the uploader for specific supported types.',
  },
  {
    question: 'Does SnapID support different photo sizes?',
    answer: 'Yes, SnapID usually handles various photo dimensions, but there might be limits on maximum file size or resolution based on the plan.',
  },
    {
    question: 'Can I use SnapID on my phone or tablet?',
    answer: 'SnapID is a web-based tool, so you can access it through the browser on your phone or tablet. Some may also offer dedicated mobile apps.',
  },
   {
    question: 'How accurate is the background removal?',
    answer: 'Accuracy depends on the AI algorithm and image complexity. Most modern tools offer very high accuracy, especially for clear subjects like headshots.',
  },
];

const FaqSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} isOpenInitially={faq.isOpenInitially} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 