import React from 'react';
import { Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import DeftBirdIcon from "../../assets/logo/DeftBirdIcon";
import DeftArrowIcon from '../../assets/logo/DeftArrowIcon.svg';

const HeaderBrand: React.FC = () => {
  return (
    <Link href="/">
            <div className="relative flex items-center justify-center bg-gradient-to-tl from-[#1E1E1E]/80 to-[#00000000] rounded-full px-4 py-1 sm:px-6 sm:py-2 max-w-fit -ml-6 md:ml-0 overflow-visible">
                {/* Logo Icon */}
                <div className="h-8 w-8 sm:h-10 sm:w-10 scale-150 relative fade-in">
                    <DeftBirdIcon className="h-full w-full" />
                </div>

                {/* Company Name Text */}
                
                <div className='relative flex items-center -ml-1'>
                    {/* Animated Arrow Behind Text */}
                    {/*
                    <motion.img
                        src={DeftArrowIcon}
                        alt="Animated Arrow"
                        className="absolute"
                        style={{
                            position: 'absolute',
                            top: '5%',
                            left: '30%', // Adjust to start near the "O"
                            transform: 'translateY(-50%)',
                            zIndex: 0, // Ensure it appears behind the text
                            width: '75%', // Adjust arrow width relative to text
                            height: 'auto',
                            opacity: 0, // Optional for subtlety
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.5, // Start smaller for "drawing" effect
                        }}
                        animate={{
                            opacity: 1, // Fully visible
                            x: 0, // Align with final position
                            y: 0, // Align with final position
                            scale: 1, // Return to normal size
                        }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut',
                        }}
                    />*/}

                    {/* Text */}
                    <span
                        className="relative z-10 text-white font-bold text-xl tracking-wider leading-loose font-clash"
                    >
                        Deft Point
                    </span>
                </div>
            </div>
    </Link>
  );
};

export default HeaderBrand;