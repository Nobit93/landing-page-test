"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import UploadContainer from './UploadContainer';

const HeroSection: React.FC = () => {
  // State for the selected option
  const options = ['Female', 'Male', 'Children', 'Silver'];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [prevOption, setPrevOption] = useState(options[0]); // 记录前一个选项
  const [isAutoplayActive, setIsAutoplayActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // 控制新图片滑入动画
  const [isTransitioning, setIsTransitioning] = useState(false); // 整体过渡状态控制
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null); // 用于追踪过渡动画计时器
  const hasImagesLoaded = useRef(false);

  // Map options to their background images - 使用PNG图片（确保路径正确）
  const backgroundImages: { [key: string]: string } = {
    Female: '/images/ai-model/hero-banner-female.png',
    Male: '/images/ai-model/hero-banner-male.png',
    Children: '/images/ai-model/hero-banner-children.png',
    Silver: '/images/ai-model/hero-banner-silver.png',
    Default: '/images/ai-model/hero-bg.png'
  };

  // Map options to their background colors
  const backgroundColors: { [key: string]: string } = {
    Female: '#D3D5DC',
    Male: '#C3977A',
    Children: '#F8F4F3',
    Silver: '#CAA47A',
    Default: '#A1704E'
  };

  // 预加载图片
  useEffect(() => {
    if (hasImagesLoaded.current) return;
    
    const preloadImages = async () => {
      let loadedCount = 0;
      const imageSources = options.map(option => backgroundImages[option]);
      
      const loadPromises = imageSources.map(src => {
        return new Promise<void>((resolve) => {
          if (!src) {
            resolve();
            return;
          }
          
          const img = new Image();
          img.src = src;
          
          img.onload = () => resolve();
          img.onerror = () => {
            console.error("Failed to load image:", src);
            resolve();
          };
        });
      });
      
      // 等待所有图片加载完成
      await Promise.all(loadPromises);
      setIsAutoplayActive(true);
      hasImagesLoaded.current = true;
    };
    
    preloadImages();
  }, []);

  // 自动播放定时器
  useEffect(() => {
    if (isAutoplayActive && !isTransitioning) {
      if (timerRef.current) clearInterval(timerRef.current);
      
      timerRef.current = setInterval(() => {
        // 如果已经在过渡中，不要触发新的过渡
        if (isTransitioning) return;
        
        handleTransition(
          selectedOption,
          options[(options.indexOf(selectedOption) + 1) % options.length]
        );
      }, 3000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    
    return () => { 
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplayActive, selectedOption, isTransitioning]);

  // 处理过渡的函数
  const handleTransition = (currentOption: string, nextOption: string) => {
    if (isTransitioning || currentOption === nextOption) return;
    
    // 设置过渡状态并开始动画
    setIsTransitioning(true);
    setPrevOption(currentOption);
    
    // 延迟200ms后切换到新图片并开始滑入动画
    transitionTimerRef.current = setTimeout(() => {
      setSelectedOption(nextOption);
      setIsAnimating(true);
      
      // 滑入动画完成后重置状态
      transitionTimerRef.current = setTimeout(() => {
        setIsAnimating(false);
        setIsTransitioning(false);
      }, 700); // 滑入动画持续时间
    }, 200); // 淡出动画持续时间
  };

  // 按钮点击处理
  const handleOptionClick = (option: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAutoplayActive(false);
    
    if (option !== selectedOption && !isTransitioning) {
      handleTransition(selectedOption, option);
    }
  };

  // 清理计时器
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, []);

  return (
    <section 
      className="relative transition-colors duration-500 ease-in-out" 
      style={{ backgroundColor: backgroundColors[selectedOption] || backgroundColors.Default }}
    >
      <div className="relative flex h-[740px] max-w-[1280px] mx-auto w-full overflow-hidden">
        {/* Left Side with Image Area */}
        <div className="relative w-3/5 flex-shrink-0 overflow-hidden">
          {/* 当前活跃图片 */}
          <div className="absolute inset-0 z-0">
            <Image
              key={`active-${selectedOption}`}
              src={backgroundImages[selectedOption]}
              alt={`${selectedOption} Fashion Model`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 768px"
              className={`object-cover object-center ${isAnimating ? 'animate-slide-in' : ''}`}
            />
          </div>
          
          {/* 淡出的图片 - 只在过渡期间显示 */}
          {isTransitioning && prevOption !== selectedOption && (
            <div className="absolute inset-0 z-10 animate-fade-out">
              <Image
                key={`fading-${prevOption}`}
                src={backgroundImages[prevOption]}
                alt={`${prevOption} Fashion Model`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 768px"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Hero Text Content - Centered */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6 w-[523px] max-w-[calc(100%-40px)] rounded-lg p-6">
            <div className="flex flex-col items-center gap-3 text-center text-white">
              <h1 className="text-[52px] font-bold leading-[1.23] [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">AI Fashion Model</h1>
              <p className="text-base leading-[1.375] [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                Remove backgrounds from photos and make your subject stand out with X-Design's one-click background eraser
              </p>
            </div>

            {/* Options Buttons */}
            <div className="flex justify-center gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={isTransitioning} // 过渡期间禁用按钮
                  className={`px-4 py-2 text-xl leading-[1.5] rounded-lg border transition-colors duration-200
                    ${selectedOption === option
                      ? 'bg-[#101727] text-white font-bold border-transparent shadow-md'
                      : 'bg-white bg-opacity-90 text-[#16171A] font-normal border-[#D2D5DC] hover:bg-opacity-100 hover:border-gray-400'
                    } `}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-2/5 flex items-center justify-center p-10">
          <UploadContainer />
        </div>
      </div>

      {/* 全局动画样式 */}
      <style jsx global>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slideInFromRight {
          from { 
            transform: translateX(50px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fade-out {
          animation: fadeOut 0.2s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideInFromRight 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 