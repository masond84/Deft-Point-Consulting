import React from 'react';
import { Button } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-[75vh] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] relative flex items-center justify-start"
      style={{
        backgroundImage: `url('./src/assets/Abstract-Design.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202ea] opacity-80"></div>

    </section>
  );
};

export default Hero;
