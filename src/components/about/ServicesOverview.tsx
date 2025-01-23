import React from 'react';

const ServicesOverview: React.FC = () => {

    return (
        <section className="w-full py-16 bg-[linear-gradient(180deg,_#121212,_#181818_60%,_#1F1F1F)] text-white">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
                {/* Header */}
                <h1 className="text-2xl sm:text-3xl font-bold font-sora leading-tight max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#f3f3f3] to-[#cbc4c4]">
                    A Partner In Innovation That Drives Curiosity
                </h1>

                {/* Paragraphs */}
                <div className="space-y-6 text-md md:text-lg text-gray-300 font-light font-sora leading-relaxed max-w-5xl mx-auto">
                    <p>
                        In today's evergrowing - evolving digital landscape, every business will need to streamline their digital operations in order to compete tommorow. And, at Deft Point, that is just what we do!
                    </p>
                    <p>
                        We are commited to working hand in hand with businesses to help them develop competitiveness and agility with intelligent software solutions. We are a full-scale development agency focused on scalable solutions from websites or applications to marketing and data pipelines.  
                    </p>
                    <p>
                        Taking apreciation in the human aspect of techincal expertise we know that only together, we can bring your vision to life. Deft Point is dedicated to helping your business from ideation, to development, and ongoing maintance - no matter what it be. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
