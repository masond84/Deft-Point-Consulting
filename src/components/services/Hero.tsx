import React from 'react';
import { Button } from "@nextui-org/react";
import abstractDesign from '@/assets/Abstract-Design.png';
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate to routes

  return (
    <section 
      className="min-h-[75vh] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] relative flex items-center justify-center sm:justify-start"
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
      <div className="relative max-w-4xl text-center sm:text-left text-white px-6 sm:px-6 space-y-6 mx-auto sm:mx-48 mt-14 sm:mt-0">
        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-sora">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#808080] to-[#b4b4b4]">Empowering Your</span> <span className="text-[#ffffff]">Digital Vision</span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg max-w-3xl text-gray-300 leading-relaxed font-clash">
          We deliver expert web design, seamless development, and tailored digital solutions to drive growth to your business.        
        </p>

        {/* Hero Buttons */}
        <div className="flex justify-center sm:justify-start space-x-4 mt-6 sm:mt-8">
            <Button 
              onPress={() => navigate('/get-quote')}
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
