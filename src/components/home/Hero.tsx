import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import Blob from "../Blob";
import Particles from "../Blob/Particles";
import "../../assets/styles/landingStyles.css"; // Ensure the CSS file is correctly linked.
import abstractDesign from '@/assets/Abstract-Design.png';
import heroImage from '@/assets/images/hero.jpg'

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

    return (
        <section className="relative w-full h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${abstractDesign})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                background: 'linear-gradient(215deg, #0F0F0F 72%, #0f0f0f98 92%)',
                overflow: 'hidden',
            }}
        >


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
                <section className="hero">
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
                    <div className="header">
                        Deftly.
                        {/* Removed invalid </br> */}
                        <div className="font-clash text-gray-200 text-lg md:text-xl self-end -mt-20 ml-10 leading-snug">
                            Crafted Websites
                        </div>
                    </div>
                </section>

                {/* Bottom Navigation */}
                <section className="bottom-nav">
                    <div className="about">
                        <a href="#">
                            Login to the <br />
                            <span>customer</span> <br />
                            panel
                        </a>
                        <p className="w-1/3 font-clash text-white text-sm text-center">
                            We are a full scale development agency that works with small business and enterprise clients.
                        </p>
                    </div>
                    <div className="location">
                        <div className="country">
                            <span>Country</span>
                            <span>New Zealand</span>
                        </div>
                        <div className="year">
                            <span>Year</span>
                            <span>2023</span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
