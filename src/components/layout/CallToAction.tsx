import React from 'react';
import { motion } from 'motion/react';
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from '@nextui-org/react';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';
import { useNavigate } from "react-router-dom";


const CallToAction: React.FC = () => {
    const isMobile = window.matchMedia('(max-width: 768px').matches;

    const navigate = useNavigate(); // Hook to navigate to routes
    
    const handleClick = () => {
        navigate("/services#categories");
        window.scrollTo(0, 0); // Scroll to the top after navigating
    };
    
    const handleConsultationClick = () => {
        navigate('/get-quote');
        window.scrollTo(0, 0); // Scroll to the top after navigating
    };

    return (
        <section className="py-12 flex justify-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
                <motion.div
                    animate={{
                        x: isMobile ? 0 : [0, 10, 0, -10, 0], // Only animate horizontally for larger screens
                        y: [0, -10, 0, 10, 0], // Always animate vertically (for mobile and desktop)
                    }}
                    transition={{
                        duration: 6, // Duration for one cycle
                        repeat: Infinity, // Repeat the animation forever
                        ease: 'easeInOut', // Smooth easing
                    }}
                    
                >
                    <div className="px-6 sm:px-6 lg:px-8 w-full">
                        <Card 
                            className="shadow-lg rounded-2xl max-w-5xl w-full p-6 sm:p-14"
                            style={{
                                background: `linear-gradient(100deg, rgba(26, 26, 26, 0.5) 0%, rgba(15, 15, 15, 0.5) 20%), url(${abstractDesignSvg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                border: '1px solid rgba(255, 255, 255, 0.1)', // Optional: adds a border like in the screenshot
                                borderRadius: '20px', // Matches the corner radius in the screenshot
                            }}
                        >
                            {/* Overlay Image */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${abstractDesignSvg})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    opacity: 0.9, // Adjust opacity for better visibility of the backdrop
                                }}
                            ></div>
                            
                            {/* Card Header */}
                            <CardHeader className="max-w-2xl mx-auto text-center pb-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight font-sora max-w-1xl text-center mx-auto">
                                Join us in your digital journey and be the next success story!
                            </h2>
                            </CardHeader>

                            {/* Card Body */}
                            <CardBody>
                                <div className='max-w-2xl mx-auto text-center space-y-2 sm:space-6'>
                                    <p className="text-gray-400 text-md sm:text-lg font-light font-clash mb-6">
                                        Maximize effeciency, drive growth, and allow us to set the stage for sustainable growth.
                                        <br />
                                        We build Intelligent Software - Websites, and Digital Pipelines to help you scale.
                                    </p>

                                    {/* Button Section */}
                                    <div className="space-y-4">
                                        <p className="text-white text-md font-clash">
                                        Unlock Your Digital Potential Today
                                        </p>
                                        <div className="flex justify-center space-x-4">
                                            <Button
                                                onPress={handleClick}
                                                className="px-3 py-3 sm:px-6 sm:py-6 text-sm sm:text-base bg-white text-black font-semibold rounded-full hover:bg-white/90 transition font-clash" 
                                            >
                                                Get Started
                                            </Button>
                                            <Button 
                                                onPress={handleConsultationClick}
                                                className="px-3 py-3 sm:px-6 sm:py-6 text-sm sm:text-base bg-[#1A1A1A] border border-[#262626] text-white font-semibold rounded-full hover:bg-[#1A1A1A]/70 transition font-clash"
                                            >
                                                Free Consultation
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </motion.div>
        </section>
    );
};

export default CallToAction;