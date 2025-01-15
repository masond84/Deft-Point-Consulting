import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Canvas } from '@react-three/fiber';

import Blob from '../Blob';
import Particles from '../Blob/Particles'
import abstractDesign from '@/assets/Abstract-Design.png';

import StaggeredCards from '../layout/StaggaredCards';

const Hero: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate to routes

    const handleClick = () => {
        navigate("/services#categories");
    };

    return (
        <section 
        className="h-screen bg-gradient-to-r from-[#0f0f0f] to-[#252525] relative flex items-center justify-between overflow-hidden"
        style={{
            backgroundImage: `url(${abstractDesign})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
        >

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131212cc] opacity-80"></div>


            {/* Hero Content */}
            <div className='ml-2 md:ml-28 relative text-left text-white space-y-6 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[85%] sm:max-w-[90%] md:max-w-3xl mx-auto'>
                {/* Hero Heading */}
                <h1 className='text-5xl font-medium leading-tight font-sora max-w-full'>
                    Digital Solutions <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#f0f0f0]/20 via-[#f0f0f0]/90 to-[#f0f0f0]">That Drive Success</span>
                </h1>

                {/* Hero Description */}
                {/* Mobile Only Short Paragraph */}
                <p className ="text-base text-gray-200 leading-relaxed font-clash block md:hidden">
                    We are a full scale development agency that works with small business and enterprise clients.
                </p>
                {/* Desktop Paragraph */}
                <p className='hidden md:block text-lg text-gray-200 leading-relaxed font-clash'>
                    At Deft Point, we believe in the transformative power of digital solutions. 
                    Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. 
                    From captivating web design to data-driven marketing strategies, we deliver results that exceed expectations.
                </p>

                {/* Hero Buttons */}
                <div className='pt-4 space-y-4'>  
                    <p className='text-lg text-white font-clash mb-4'>Unlock Your Digital Potential Today</p>

                    <div className='flex space-x-4'>
                        <div className='flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full hover:bg-[#1A1A1A]/40 transition'>
                            <Button 
                                onPress={handleClick}
                                className="px-6 py-6 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition font-clash " 
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className='flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full hover:bg-[#1A1A1A]/40 transition'>

                            <Button 
                                onPress={() => navigate('/get-quote')} // Navigate to /get-quote on click
                                className="px-6 py-6 bg-black text-white font-semibold rounded-full hover:bg-black/20 transition font-clash" 
                            >
                                Free Consultation
                            </Button>
                        </div>    
                    </div>
                </div>        
            </div>

            {/* Blob Animation (Right) */}
            <div 
                className="absolute top-0 right-0 h-full w-1/2 items-center justify-center hidden sm:block"
            >
                <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                    <Blob />
                    <Particles />
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
