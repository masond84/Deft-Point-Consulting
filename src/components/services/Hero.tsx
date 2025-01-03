import React from 'react';
import { Button } from "@nextui-org/react";
import abstractDesign from '@/assets/Abstract-Design.png';

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-[75vh] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] relative flex items-center justify-start"
      style={{
        backgroundImage: `url(${abstractDesign})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202ea] opacity-80"></div>

      {/* Hero Content */}
      <div className="relative max-w-5xl text-left text-white px-6 space-y-6 mx-48 mt-14">
        {/* Hero Heading */}
        <h1 className="text-5xl font-bold leading-tight font-sora">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#808080] to-[#b4b4b4]">Empowering Your</span> <span className="text-[#ffffff]">Digital Vision</span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg max-w-3xl text-gray-300 leading-relaxed font-clash">
          At Deft Point, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. From captivating web design to seamless development, we ensure optimal functionality and lasting impressions.
        </p>

        {/* Hero Buttons */}
        <div className="flex space-x-4 mt-8">
            <Button 
                className="px-6 py-6 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition font-clash " 
            >
                Get a Quote
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
