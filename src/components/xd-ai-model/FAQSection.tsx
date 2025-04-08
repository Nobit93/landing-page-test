"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-t border-[#EBEDF2] overflow-hidden">
      <div
        className="flex justify-between items-center gap-6 cursor-pointer py-6"
        onClick={onClick}
      >
        <span className="flex-1 text-xl font-bold text-[#374151] leading-[1.5]">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 text-[#6B7280] transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L18 15.1716L32.5858 0.585786C33.3668 -0.195262 34.6332 -0.195262 35.4142 0.585786C36.1953 1.36683 36.1953 2.63317 35.4142 3.41421L20.8284 18C19.2663 19.5621 16.7337 19.5621 15.1716 18L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="currentColor"/>
        </svg>
      </div>
      <div
        className={`transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base text-[#6B7280] leading-[1.375]">
          {answer}
        </p>
      </div>
    </div>
  );
};


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Keep the first item open initially

  const faqs = [
    {
      question: 'How does the AI Background Changer specifically benefit e-commerce product photography?',
      answer:
        "Our AI Background Changer enhances e-commerce product images by generating professional-quality backgrounds tailored to each product. This elevates the visual appeal of your listings, leading to increased customer engagement and sales. It's perfect for creating consistent branding across your online store.",
    },
    {
      question: 'What are the pre-set scenes available for e-commerce products?',
      answer:
        'We offer a wide variety of pre-set scenes including studio setups, lifestyle environments, and abstract designs. You can choose the one that best fits your product and brand aesthetic.',
    },
     {
      question: 'Can I upload my own background images?',
      answer:
        'Yes, absolutely! You have the flexibility to upload your own custom background images to ensure perfect brand alignment.',
    },
     {
      question: 'Is there a limit to the number of images I can process?',
      answer:
        'Our plans vary. Please check our pricing page for details on image processing limits for each subscription level.',
    },
     {
      question: 'What image formats are supported?',
      answer:
        'We support common image formats like JPG, PNG, and WebP. Please refer to our documentation for a complete list.',
    },
     {
      question: 'How accurate is the background removal?',
      answer:
        'Our AI is trained on millions of images and offers high accuracy for most common objects. For complex images, manual refinement tools are available.',
    },
  ];

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start gap-20">
        <h2 className="text-4xl font-bold text-[#374151] leading-[1.23] w-full md:w-1/3">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col w-full md:w-2/3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 