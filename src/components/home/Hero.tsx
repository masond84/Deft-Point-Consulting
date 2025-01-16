import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Button } from "@nextui-org/react";
import Particles from "../Blob/Particles";
import "../../assets/styles/landingStyles.css"; // Ensure the CSS file is correctly linked.
import abstractDesign from '@/assets/Abstract-Design.png';
import heroImage from '@/assets/images/hero.jpg'
import CircularTextButton from './CircularTextButton'; // Import the component

const Hero: React.FC = () => {
    useEffect(() => {
        // Timeline for sequential animations
        const timeline = gsap.timeline();

        // Box animation (fades in and slides out)
        timeline
            .to(".box", {
                x: "-100%",
                opacity: 0,
                ease: "power4.inOut",
                duration: 1.2,
                delay: 0.5, // Slight delay before starting
            })
            .fromTo(
                ".header",
                {
                    opacity: 0,
                    x: -200, // Start off-screen to the left
                },
                {
                    opacity: 1, // Full opacity at the end
                    x: 0, // End position (centered)
                    ease: "power3.out",
                    duration: 1.5,
                }
            );
    }, []);

    const navigate = useNavigate(); // Hook to navigate to routes
    
    const handleClick = () => {
        navigate("/services#categories");
    };
    

    return (
        <section className="relative w-full sm:h-[calc(100vh-4rem)] h-[calc(100vh-6rem)]  overflow-visible"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                background: 'linear-gradient(215deg, #0F0F0F 72%, #0f0f0f98 92%)',
                overflow: 'hidden',
            }}
        >
            {/* Mobile-specific background */}
            <div
                className="absolute inset-0 sm:hidden"
                style={{
                background: 'linear-gradient(225deg, #0F0F0F 30%, #0F0F0F58 80%)', // Mobile background
                }}
            ></div>
            {/* Wrapper Image */}
            <div className="wrapper-img">
                <div className="box z-10"></div>
                <div>
                    <img
                        className="image"
                        src={heroImage}
                        alt="Hero Background"
                    />
                </div>
            </div>

            {/* Hero Content */}
            <div className="container relative z-20">
                <section className="relative top-[15%] w-full text-white flex flex-col items-end text-right">
                    {/* Blob Animation (Left) */}
                    {/*
                    <div className="blob-container flex-none hidden md:block">
                        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                            <Blob />
                            <Particles />
                        </Canvas>
                    </div>                
                    */}
                    <div className="white-space"></div>
                    <div className="header relative top-10 mr-8 sm:mr-4 text-[24vw] sm:text-[15vw] font-bold ">
                        Deftly.
                        {/* Subheader */}
                        <div className="font-clash text-gray-200 text-lg md:text-xl -mt-10 md:-mt-20 leading-snug text-left ml-4 md:ml-10">
                            Crafted Websites
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 mt-28 sm:mt-14 pr-8 md:pr-36">
                        <Button
                            onPress={handleClick}
                            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition font-clash"
                        >
                            Get Started
                        </Button>
                        <Button
                            onPress={() => navigate('/get-quote')}
                            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-700 transition font-clash"
                        >
                            Free Consultation
                        </Button>
                    </div>
                </section>



                {/* Bottom Navigation */}
                <section className="absolute -bottom-2 w-full flex justify-between px-6 sm:px-12">
                    <div className="flex w-full sm:w-1/2 justify-between items-center">
                        {/* Animated Spinning Circle With Arrow That Takes User To Next Section */}
                        <div className="mt-20 sm:mt-0">
                            <CircularTextButton />
                        </div>
                        <p className="w-full sm:w-1/3 font-clash text-white text-md sm:text-md text-right sm:text-center">
                            We are a full scale development agency that works with small business and enterprise clients.
                        </p>
                    </div>
                    <div className="location">
                        <div className="country">
                            <span className="font-clash leading-relaxed tracking-widest">Custom Solutions</span>
                            <span></span>
                        </div>
                        <div className="year">
                            <span className="font-clash leading-relaxed tracking-widest">Tailored Results</span>
                            <span></span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
