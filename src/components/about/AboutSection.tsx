import React from 'react';
import { motion } from "motion/react";

const AboutSection: React.FC = () => {
    return (
        <section 
            id='about-section'
            className="py-16 px-8 bg-gradient-to-b from-[#121212]/95 to-[#121212] text-white relative"
        >
            {/* Overlay Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('/src/assets/AbstractDesign.svg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 1, // Adjust opacity for better visibility of the backdrop
                }}
            ></div>
            
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 font-sora leading-tight mx-auto max-w-3xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#808080] to-[#b4b4b4]">
                        In a sea full of sameness,
                    </span>{" "}
                    how do you know who to partner with on your most important initiatives?
                </h2>
            </div>

            {/* Horizontal Line and Subheader */}
            <div className="mb-8 mx-auto max-w-7xl space-y-4">
                <hr className='border-t-2 border-gray-200 mb-2'/>
                <p className='text-sm uppercase tracking-widest text-[#b4b4b4] font-clash'>Why Deft</p>
            </div>
            
            {/* Text Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto max-w-7xl pl-8 pr-8 font-clash">
                {[
                    {
                        title: "We're Different",
                        content:
                        "We bring deep technical expertise mixed with mind-blowing creativity. We’re agency and consulting—with a bias for action. Boutique, flexible, and experienced, we’re big enough to deliver great global work, but agile enough to be easy for you to do business with.",
                    },
                    {
                        title: "Data-Driven",
                        content:
                        "We don’t trust our gut. We use data to create insights that drive our solutions and your outcomes.",
                    },
                    {
                        title: "Value-Focused",
                        content:
                        "This is so important that we’ll say it again. Our mission is to be the leading digital agency that is providing transformative digital experiences—driving growth with measurable value for all.",
                    },
                    ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up on scroll
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 5,
                            duration: 0.5,
                            delay: index * 0.1, // Add stagger effect
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }} // Ensure animation happens only once
                        className="border border-[#1F1F1F] rounded-glass p-4 bg-[linear-gradient(220deg,_#121212,_#181818_60%,_#1F1F1F)] cursor-default"
                    >
                        <h3 className="text-lg font-semibold text-white mb-4 font-clash text-center md:text-left">
                        {item.title}
                        </h3>
                        <p className="text-gray-300 font-sora text-center md:text-left">{item.content}</p>
                    </motion.div>
                    ))}
            </div>
        </section>
    );
};

export default AboutSection;
