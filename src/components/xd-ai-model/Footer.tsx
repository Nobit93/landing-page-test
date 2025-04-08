import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo'; // Import the Logo component

const Footer: React.FC = () => {
  const linkSections = [
    {
      title: 'AI E-commerce',
      links: ['AI Fashion model', 'AI Background'],
    },
    {
      title: 'AI Tools',
      links: [
        'Background Remover',
        'AI Background',
        'Image Enhancer',
        'Object Remover',
        'Image Unscaler',
      ],
    },
    {
      title: 'Resources',
      links: ['Magic Eraser', 'Resize Image', 'Android App'],
    },
    {
      title: 'Fashion model',
      links: ['All', 'Women', 'Men', 'Kids', 'Silver'],
    },
    {
        title: 'Product photograph',
        links: ['All', 'Skincare', 'Beauty', 'Jewelry', 'Home', 'Electronic']
    }
  ];

  const socialIcons = [
    { src: '/xd-ai-model/footer-social-fb-subtract.svg', alt: 'Facebook' },
    { src: '/xd-ai-model/footer-social-twitter.svg', alt: 'Twitter' },
    { src: '/xd-ai-model/footer-social-instagram.svg', alt: 'Instagram' },
  ];

  return (
    <footer className="bg-[#101727] text-white pt-10 pb-4 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-20 mb-20">
          {/* Left Column: Logo, Desc, Social, PH, Apps */}
          <div className="flex flex-col gap-6 w-full md:w-80">
            <Logo className="text-white"/>
            <p className="text-base text-[rgba(255,255,255,0.6)] leading-[1.375]">
              X-Design empowers e-commerce with AI-driven marketing tools, enabling
              retailers to craft captivating visuals and optimize online sales
              processes.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <Link href="#" key={icon.alt} className="block w-10 h-10 border border-[rgba(255,255,255,0.15)] rounded-full flex items-center justify-center">
                    <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                </Link>
              ))}
            </div>
            {/* Product Hunt Badge */}
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold text-white leading-[1.5]">Featured on Product Hunt</span>
              <Link href="#" className="relative block w-[258px] h-[78px]">
                   <Image src="/xd-ai-model/footer-ph-bg.png" alt="Product Hunt Background" fill className="object-cover rounded-lg" />
                   <div className="absolute inset-0 flex items-center justify-between p-3 bg-white bg-opacity-90 rounded-lg border border-[#414D6F]">
                      <Image src="/xd-ai-model/footer-ph-cat.png" alt="Product Hunt Cat" width={62} height={62} />
                      <div className="text-[#414D6F]">
                         <div className="text-[10.37px] font-extrabold uppercase">Featured on</div>
                         <div className="text-[18.67px] font-extrabold">Product Hunt</div>
                      </div>
                       <div className="flex flex-col items-center text-[#414D6F]">
                           <Image src="/xd-ai-model/footer-ph-arrow.svg" alt="Arrow Up" width={16} height={10} />
                           <span className="text-[15.55px] font-semibold">896</span>
                       </div>
                   </div>
              </Link>
            </div>
            {/* App Store Badges */}
            <div className="flex flex-col gap-4">
               <span className="text-xl font-semibold text-white leading-[1.5]">Install app</span>
               <div className="flex flex-col gap-4">
                  <Link href="#" className="block w-[120px] h-[40px]">
                      <Image src="/xd-ai-model/footer-appstore-badge.svg" alt="Download on the App Store" width={120} height={40}/>
                  </Link>
                  <Link href="#" className="block w-[135px] h-[40px]"> 
                      <Image src="/xd-ai-model/footer-googleplay-badge.svg" alt="Get it on Google Play" width={135} height={40}/>
                  </Link>
               </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10">
            {linkSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h4 className="text-xl font-semibold text-white leading-[1.5]">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className={`text-sm leading-[1.43] ${section.title === 'Product photograph' ? 'text-[#8B8F99]' : 'text-[#6B7280]'} hover:text-white`}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-[#6B7280] leading-[1.43]">
            © 2024 X-Design, Inc.
          </span>
          <div className="flex items-center gap-4.5 text-sm text-[#F9FAFB] leading-[1.43]">
            <Link href="#">Terms of Service</Link>
            <span className="h-4 w-px bg-[rgba(255,255,255,0.1)]"></span>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 