import React from 'react';
import "../../assets/Abstract-Design.png";

const Hero: React.FC = () => {
  return (
    <section 
        className="h-screen bg-cover bg-center flex items-center justify-start"
        style={{
            backgroundImage: `url('/src/assets/Abstract-Design.png')`,
        }}
    >
        {/* Hero Content */}
        <div className='max-w-xl text-left text-white space-y-6 mx-48'>
            {/* Hero Heading */}
            <h1 className='text-5xl font-bold leading-tight font-sora'>
                Digital Solutions <br />
                <span className="text-[#222222]">That Drive Success</span>
            </h1>

            {/* Hero Description */}
            <p className='text-lg text-gray-300 leading-relaxed font-clash'>
                At Deft Point, we believe in the transformative power of digital solutions. 
                Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. 
                From captivating web design to data-driven marketing strategies, we deliver results that exceed expectations.
            </p>

            {/* Hero Buttons */}
            <div className='pt-4 space-y-6'>  
                <p className='text-lg text-white font-clash mb-4'>Unlock Your Digital Potential Today</p>

                <div className='flex space-x-4'>
                    <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition font-clash">
                        Get Started
                    </button>
                    <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-black/70 transition font-clash">
                        Free Consultation
                    </button>
                </div>
                </div>        
        </div>
    </section>
  );
};

export default Hero;
