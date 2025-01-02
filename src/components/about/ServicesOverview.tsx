import React from 'react';

const ServicesOverview: React.FC = () => {

    return (
        <section className="w-full py-16 bg-[linear-gradient(180deg,_#121212,_#181818_60%,_#1F1F1F)] text-white">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold font-sora leading-tight max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#f3f3f3] to-[#d3d3d3]">
                    A Partner In Innovation That Drives Curiosity
                </h1>

                {/* Paragraphs */}
                <div className="space-y-6 text-md md:text-lg text-gray-300 font-light font-sora leading-relaxed max-w-5xl mx-auto">
                    <p>
                        Nearly every organization will need to become a tech company in order to compete tomorrow. Yes, even yours. At Simform, we are on a mission to help companies develop competitiveness and agility using the software.
                    </p>
                    <p>
                        Simform is part of a rare league of engineering companies, uniquely positioned to build scalable software and deliver end-to-end product engineering services. We drive digital innovation through UX-led engineering, design thinking, product accelerators for efficient delivery, and strategic partnerships with leading cloud providers and AI platforms. We also serve as a system integrator with the ability to scale and achieve functional excellence.
                    </p>
                    <p>
                        We have delivered product engineering services and developed scalable products for both SMEs and enterprises across diverse industries such as retail, healthcare, supply chain, and fintech, with our expertise in Cloud/MACH architectures, DevOps automation, data engineering, and advanced AI/ML.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
