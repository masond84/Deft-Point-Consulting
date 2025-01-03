import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import abstractDesign from '@/assets/Abstract-Design.png';

{/*
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
*/}

import StaggeredCards from '../layout/StaggaredCards';

// Component to render the model
{/*
const Model: React.FC = () => {
    const { scene } = useGLTF('/src/assets/models/oceanic_currents.glb'); // Load the GLB model
    const modelRef = useRef<THREE.Object3D>(null); // Create a ref for the model
  
    useFrame(() => {
      // Apply rotation animation
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002; // Rotate around the Y-axis
      }
    });
  
    return (
      // Attach the ref to the primitive component
        <primitive 
            ref={modelRef} 
            object={scene} 
            scale={[2, 2, 2]} 
            rotation={[ Math.PI / 6, 0, Math.PI / 9]}    
        />
    );
};
*/}

const Hero: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate to routes

    const handleClick = () => {
        navigate("/services#categories");
    };

    return (
        <section 
            className="h-screen bg-gradient-to-r from-[#0f0f0f] to-[#252525] relative flex items-center justify-between"
            style={{
                backgroundImage: `url(${abstractDesign})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131212cc] opacity-80"></div>


            {/* Hero Content */}
            <div className='relative max-w-xl text-left text-white space-y-6 mx-48'>
                {/* Hero Heading */}
                <h1 className='text-5xl font-medium leading-tight font-sora'>
                    Digital Solutions <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#f0f0f0]/20 via-[#f0f0f0]/90 to-[#f0f0f0]">That Drive Success</span>
                </h1>

                {/* Hero Description */}
                <p className='text-lg text-gray-200 leading-relaxed font-clash'>
                    At Deft Point, we believe in the transformative power of digital solutions. 
                    Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. 
                    From captivating web design to data-driven marketing strategies, we deliver results that exceed expectations.
                </p>

                {/* Hero Buttons */}
                <div className='pt-4 space-y-6'>  
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
            
            {/* 3D Model */}
            {/*
            <div className="w-1/2 h-full">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <Model />
                </Canvas>
            </div>
            */}

            {/* Staggered Cards */}
            <div className="absolute right-[15%] top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <StaggeredCards /> {/* Render the StaggeredCards component */}
            </div>
        </section>
    );
};

export default Hero;
