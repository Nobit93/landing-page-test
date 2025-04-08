"use client";

import React from 'react';
import Image from 'next/image';

const UploadContainer: React.FC = () => {
  return (
    <div className="w-[520px] h-[560px] bg-[rgba(255,255,255,0.8)] backdrop-blur-[94px] rounded-3xl p-6 flex flex-col gap-10 shadow-[0px_0px_54px_0px_rgba(0,0,0,0.06)]">
      {/* Dashed border container */}
      <div className="flex-grow border border-dashed border-[rgba(0,0,0,0.4)] rounded-2xl flex flex-col items-center justify-center gap-10">
        {/* Upper section: Upload */}
        <div className="flex flex-col items-center gap-6">
          {/* Sample Images */}
          <div className="relative w-[184px] h-[120px]">
             <Image
               src="/xd-ai-model/hero-upload-sample-3.png"
               alt="Sample 3"
               width={88}
               height={110}
               className="absolute top-0 left-0 rounded-lg shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] z-10"
             />
             <Image
               src="/xd-ai-model/hero-upload-sample-2.png"
               alt="Sample 2"
               width={88}
               height={110}
               className="absolute top-[5px] left-[48px] rounded-lg shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] z-20"
             />
             <Image
                src="/xd-ai-model/hero-upload-sample-1.png"
                alt="Sample 1"
                width={88}
                height={110}
                className="absolute top-[10px] left-[96px] rounded-lg z-0"
             />
          </div>
          {/* Upload Button and Hint */}
          <div className="flex flex-col items-center gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#16171A] rounded-2xl text-white text-lg font-bold leading-[1.55] hover:bg-[#303542] transition-colors duration-200">
              <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4667 1.2267C17.1023 -0.408901 19.7541 -0.408901 21.3897 1.2267L29.0004 8.83736C29.9817 9.81872 29.9817 11.4098 29.0004 12.3912C28.019 13.3725 26.4279 13.3725 25.4465 12.3912L21.7788 8.72341C21.3532 8.28088 21.1657 8.01013 20.9411 7.46694V24.0166C20.9411 25.4045 19.816 26.5296 18.4282 26.5296C17.0403 26.5296 15.9153 25.4045 15.9153 24.0166V7.46694C15.6795 8.00202 15.4931 8.27 15.0776 8.72341L11.4098 12.3912C10.4285 13.3725 8.83737 13.3725 7.85601 12.3912C6.87465 11.4098 6.87465 9.81872 7.85601 8.83736L15.4667 1.2267Z" fill="currentColor"/>
                <path d="M5.02588 25.2731C5.02588 23.8852 3.9008 22.7602 2.51294 22.7602C1.12509 22.7602 8.16243e-06 23.8852 8.16243e-06 25.2731L4.16823e-06 29.2141C-5.77419e-05 30.0768 -0.000114459 30.8692 0.0540028 31.5316C0.112348 32.2457 0.245912 33.0269 0.639093 33.7986C1.20125 34.9019 2.09825 35.7989 3.20154 36.361C3.9732 36.7542 4.75446 36.8878 5.46858 36.9461C6.13089 37.0002 6.92317 37.0002 7.78581 37.0001H29.0703C29.933 37.0002 30.7255 37.0002 31.3878 36.9461C32.1019 36.8878 32.8832 36.7542 33.6548 36.361C34.7581 35.7989 35.6551 34.9019 36.2173 33.7986C36.6105 33.0269 36.744 32.2457 36.8024 31.5316C36.8565 30.8692 36.8564 30.0769 36.8564 29.2142L36.8564 25.2731C36.8564 23.8852 35.7313 22.7602 34.3434 22.7602C32.9556 22.7602 31.8305 23.8852 31.8305 25.2731V29.1263C31.8305 30.106 31.8285 30.6896 31.7932 31.1223C31.7716 31.3863 31.7432 31.4973 31.7339 31.5271C31.6551 31.6766 31.5329 31.7989 31.3833 31.8777C31.3536 31.8869 31.2426 31.9154 30.9785 31.937C30.5459 31.9723 29.9622 31.9743 28.9825 31.9743H7.87387C6.89415 31.9743 6.3105 31.9723 5.87785 31.937C5.61379 31.9154 5.5028 31.8869 5.47305 31.8777C5.32348 31.7989 5.20126 31.6766 5.12245 31.5271C5.11322 31.4973 5.08475 31.3863 5.06318 31.1223C5.02783 30.6896 5.02588 30.106 5.02588 29.1263V25.2731Z" fill="currentColor"/>
              </svg>
              Upload Image
            </button>
            <p className="text-base text-[#374151]">Or drop a file, paste image or URL</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(0,0,0,0.08)]"></div>

        {/* Lower section: Suggestions */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-[#5E616B]">No image? Try one of these:</p>
          <div className="flex gap-2">
             <Image src="/xd-ai-model/hero-suggestion-1.png" alt="Suggestion 1" width={64} height={64} className="rounded-lg" />
             <Image src="/xd-ai-model/hero-suggestion-2.png" alt="Suggestion 2" width={64} height={64} className="rounded-lg" />
             <Image src="/xd-ai-model/hero-suggestion-3.png" alt="Suggestion 3" width={64} height={64} className="rounded-lg" />
             <Image src="/xd-ai-model/hero-suggestion-4.png" alt="Suggestion 4" width={64} height={64} className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadContainer; 