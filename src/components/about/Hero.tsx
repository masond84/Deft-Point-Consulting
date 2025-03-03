import React from 'react';
import abstractDesign from '@/assets/Abstract-Design.png';
import CircularTextButton from "../../components/home/CircularTextButton";

const Hero: React.FC = () => {
    return (
        <section 
            className="min-h-[90vh] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] relative flex items-center justify-center"
            style={{
                backgroundImage: `url(${abstractDesign})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] opacity-80"></div>

            {/* Content Wrapper */}
            <div className="relative max-w-4xl text-center text-white px-6 space-y-6">                
                {/* Subheader */}
                <p className="text-sm uppercase tracking-widest text-gray-400">About Us</p>

                {/* Main Header */}
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-sora">
                    Our vision is to make work <br />
                    <span className="text-[#ffffff]">inspiring and fulfilling</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-clash max-w-2xl">
                    At Deft Point, we provide exceptional digital solutions to simplify and streamline
                    processes. Our tailored services empower SMB businesses to grow and succeed with ease.
                </p>
            </div>

            {/* CircularTextButton */}
            <div className="absolute -bottom-8 flex justify-center">
                <CircularTextButton />
            </div>
        </section>
    );
};

export default Hero;
