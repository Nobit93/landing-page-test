"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-t border-[#EBEDF2] ${isOpen ? '' : 'pt-8'}`}>
      <div className={`flex justify-between items-start gap-6 cursor-pointer ${isOpen ? 'pt-8' : ''}`} onClick={onClick}>
        <span className="flex-1 text-xl font-bold text-[#374151] leading-[1.5]">
          {question}
        </span>
        <Image 
          src={isOpen ? '/xd-ai-model/faq-chevron-up.svg' : '/xd-ai-model/faq-chevron-down.svg'} 
          alt={isOpen ? 'Collapse' : 'Expand'} 
          width={24} 
          height={24} 
          className="mt-1" // Adjust vertical alignment if needed
        />
      </div>
      {isOpen && (
        <p className="mt-6 text-base text-[#6B7280] leading-[1.375]">
          {answer}
        </p>
      )}
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
        <div className="flex flex-col gap-8 w-full md:w-2/3">
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