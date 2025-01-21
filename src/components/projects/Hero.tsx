import React from 'react';
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import abstractDesign from '@/assets/Abstract-Design.png';

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate to routes

  return (
    <section 
      className="min-h-[75vh] bg-gradient-to-r from-[#0f0f0f] to-[#272727] relative flex items-center justify-center sm:justify-start"
      style={{
        backgroundImage: `url(${abstractDesign})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#272727c0] to-[#0f0f0f] opacity-80"></div>

      {/* Hero Content */}
      <div className="relative max-w-4xl text-center sm:text-left text-white px-6 sm:px-6 space-y-6 mx-auto sm:mx-48 mt-14 sm:mt-0">
        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-sora">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#ddd9d9] to-[#e6e6e6]">Our Work With Brands</span> <span className="text-[#ffffff]"></span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg max-w-3xl text-gray-300 leading-relaxed font-clash">
          View impressions we've made in various industries. We deliver seamless user experiences, scalable websites, digital strategy and marketing plans for many sectors.
        </p>

        {/* Hero Buttons */}
        <div className="flex justify-center sm:justify-start space-x-4 mt-6 sm:mt-8">
            <Button 
                onPress={() => navigate('/contact')}
                className="px-6 py-6 bg-black text-white font-semibold rounded-full hover:bg-black/20 transition  font-clash " 
            >
                See How We Can Help
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
