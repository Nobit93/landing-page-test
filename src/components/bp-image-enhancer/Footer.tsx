import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Section: Logo, Description, Support, Social */}
          <div className="lg:col-span-4 space-y-6">
             {/* Logo - Placeholder */}
            <div className="flex items-center space-x-2">
                 <div className="bg-gray-500 w-10 h-10"></div> {/* Placeholder */}
                 <span className="text-white text-3xl font-semibold">BeautyPlus</span>
             </div>
            <p className="text-sm leading-relaxed">
              BeautyPlus is here to help you capture and share your life in dynamic ways using hundreds of filters, stickers, makeup tools, special effects, and much more!
            </p>
            <div>
              <p className="text-sm">For support</p>
              <a href="mailto:support@beautyplus.com" className="text-sm text-pink-400 hover:text-pink-300">
                support@beautyplus.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Image src="/images/bp-image-enhancer/social-instagram.svg" alt="Instagram" width={24} height={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Image src="/images/bp-image-enhancer/social-facebook.svg" alt="Facebook" width={24} height={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Image src="/images/bp-image-enhancer/social-twitter.svg" alt="Twitter" width={24} height={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Image src="/images/bp-image-enhancer/social-youtube.svg" alt="YouTube" width={24} height={24} /></a>
            </div>
            {/* Language Selector */}
            <div className="inline-block border border-gray-600 rounded-lg px-6 py-3">
                <button className="flex items-center space-x-3 text-white">
                    <Image src="/images/bp-image-enhancer/language-globe-icon.svg" alt="Language" width={20} height={20} />
                    <span>English</span>
                    <Image src="/images/bp-image-enhancer/language-dropdown-arrow.svg" alt="Dropdown arrow" width={12} height={12} />
                </button>
                 {/* Dropdown content here */}
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Online Tools</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white">Video Enhancer</a></li>
                <li><a href="#" className="text-sm hover:text-white">Image Enhancer</a></li>
                <li><a href="#" className="text-sm hover:text-white">Remove Video Watermark</a></li>
                <li><a href="#" className="text-sm hover:text-white">Image Convert</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Portrait Editing</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white">Face Editor</a></li>
                <li><a href="#" className="text-sm hover:text-white">Makeup Tools</a></li>
                <li><a href="#" className="text-sm hover:text-white">Body Editor</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Design Tools</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white">Remove Objects</a></li>
                <li><a href="#" className="text-sm hover:text-white">Remove BG</a></li>
                <li><a href="#" className="text-sm hover:text-white">Photo to Cartoon</a></li>
                <li><a href="#" className="text-sm hover:text-white">Templates</a></li>
                <li><a href="#" className="text-sm hover:text-white">Unlimited Content</a></li>
                 <li><a href="#" className="text-sm hover:text-white">Photo to Art</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">More</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white">Download APP</a></li>
                <li><a href="#" className="text-sm hover:text-white">Download APK</a></li>
                <li><a href="#" className="text-sm hover:text-white">Academy</a></li>
                <li><a href="#" className="text-sm hover:text-white">Partnership</a></li>
                <li><a href="#" className="text-sm hover:text-white">Support</a></li>
                <li><a href="#" className="text-sm hover:text-white">Beauty Plus Studio</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section: QR Code */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get the Free App</h3>
            <Image src="/images/bp-image-enhancer/footer-qr-code.png" alt="QR Code" width={140} height={140} className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 Pixocial, Inc.</p>
          <p>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 