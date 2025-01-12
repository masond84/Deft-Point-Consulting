import React from 'react';
import { Button } from "@nextui-org/react";
import { motion } from 'motion/react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";

const Hero: React.FC = () => {
  const handleScroll = () => {
    const inquiryFormElement = document.getElementById("inquiryForm");
    if (inquiryFormElement) {
      inquiryFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-[90vh] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] relative flex items-center justify-center"
      style={{
        backgroundImage: `url('./src/assets/Abstract-Design.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: .9,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#64646434] to-[#1414149d] opacity-80"></div>

      {/* Content */}
      <div className='relative z-10 max-w-4xl text-center text-white px-6 sm:px-6 md:px-12 lg:px-16 space-y-6 mx-auto sm:mx-48 mt-14 sm:mt-16'>
        {/* Title */}
        <h1 className='text-2xl md:text-3xl font-bold leading-tight font-sora mb-6'>
          Ready to take your business to the next level?
        </h1>

        {/* Subtitle */}
        <p className='text-sm sm:text-xl mb-8 text-gray-300 leading-relaxed font-clash'>
          Book a demo and discovery call to get a look at:
        </p>

        {/* Features List */}
        <ul className="space-y-6">
          {[
            "How Deft Point Works",
            "How you can scale better, faster, and cheaper",
            "How we’re different from other agencies",
            "How we make pricing plans that work for you",
          ].map((feature, index) => (
            <li key={index} className="flex items-center justify-center space-x-2">
              <IoCheckmarkDoneCircleOutline className="text-[#AFE5FF] text-2xl" />
              <span className="text-md sm:text-lg font-light font-sora">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Scroll Indicator */}
        <div
          onClick={handleScroll}
          className="flex items-center justify-center space-x-2 cursor-pointer group"
        >
          <motion.div
            initial={{ y: 0}}
            animate={{ y: [0, -15, 15, 0] }} // Moves up, then down, then back to the initial position
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BsChevronDoubleDown
              className="text-xl text-white"
            />
          </motion.div>
          <span className="text-lg font-medium font-clash text-white">
            Get in Touch
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
