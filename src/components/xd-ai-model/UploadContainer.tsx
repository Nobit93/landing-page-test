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
              <Image src="/xd-ai-model/hero-upload-icon.svg" alt="Upload Icon" width={24} height={24} />
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