import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button, Chip, Link } from '@nextui-org/react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { FaIndustry, FaLaptopCode, FaPalette } from 'react-icons/fa';
import { TfiAngleDown, TfiAngleDoubleUp } from 'react-icons/tfi';
import CardImage1 from '../../assets/images/DropdownCardImage1.png';
import CardImage2 from '../../assets/images/DropdownCardImage2.png';

// Card Icons
import FigmaIcon from '../../assets/images/FigmaIcon.svg';
import JSIcon from '../../assets/images/JSIcon.svg';
import MUIIcon from '../../assets/images/MUIUIIcon.svg';
import ReactIcon from '../../assets/images/ReactIcon.svg';
import TailwindIcon from '../../assets/images/TailwindIcon.svg';
import TSIcon from '../../assets/images/TSIcon.svg';

const Showcase: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleCard = (cardId: number): void => {
    setExpandedCard(expandedCard === cardId ? null : cardId); // Expand only the clicked card
  };

  useEffect(() => {
    if (location.hash === "#showcase") {
      const showcaseSection = document.getElementById("showcase");
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <section id="showcase" className="py-12 bg-[#121212] text-white">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-8 sm:px-12 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sora leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#808080] to-[#b4b4b4]">Projects</span> Showcase
        </h2>
        <p className="text-sm sm:text-base md:text-md text-gray-400 leading-relaxed font-clash">
          Witness the brilliance of our works. We showcase the successful collaborations we've embarked with diverse clients across diverse industries.
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto px-6 sm:px-2">
        {/* Card 1 */}
        <Card className="bg-[#1A1A1A] shadow-lg rounded-lg border border-[#1F1F1F]">
          {/* Card Header */}
          <CardHeader className="p-4">
            <div className='bg-[#222222] shadow-glass rounded-lg overflow-hidden flex justify-center items-center h-fit'>
              <img
                src={CardImage1} // Replace with actual image
                alt="Project Thumbnail"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </CardHeader>

          {/* Card Body */}
          <CardBody className="p-8 sm:p-6">
            {/*  */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-center sm:text-left sm:pl-4 sm:pr-4 mb-4 space-y-4 sm:space-y-0">
              
              <h3 className="text-lg sm:text-xl font-medium font-sora whitespace-nowrap">
                Modern Cleaning Service Site 
              </h3>
              
              <div className="flex items-center gap-2">
                <span className="text-[#666666] font-xs font-sora mr-2 sm:mr-0">{expandedCard === 1 ? 'Show Less' : 'Show More'}</span>
                <div className="p-[2px] rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A]/0">
                  <Button
                    onPress={() => toggleCard(1)}
                    className="p-3 bg-gradient-to-r from-[#222222] to-[#333333] text-white hover:text-white/80 border border-[#262626] rounded-full"
                    variant="ghost"
                  >
                    {expandedCard === 1 ? (
                      <TfiAngleDoubleUp className="text-sm sm:text-lg" />
                    ) : (
                      <TfiAngleDown className="text-sm sm:text-lg" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Card Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:-mt-4 sm:pl-4 sm:pr-4 justify-center sm:justify-start overflow-x-auto">
              {/* Web Design Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                startContent={<FaPalette className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Design & Branding
              </Chip>

              {/* Development Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                startContent={<FaLaptopCode className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Development
              </Chip>
            </div>
            
            {/* Default Description */}
            <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-lg sm:ml-4 sm:mr-4 mb-4 p-4 sm:p-8 text-center sm:text-left">
              <h4 className="text-lg font-light text-white font-sora mb-4">Project Description</h4>
              <p className='text-xs text-gray-400 font-sora'>
                A fully responsive website using React.js and Material UI. Designed for Minas Cleaning Service to display their service offerings and allow for online bookings.              
              </p>
            </div>

            {/* Dropdown Section */}
            {expandedCard === 1 && (
              <div className="space-y-6 p-4 sm:p-8 bg-[#0f0f0f] border border-[#1F1F1F] rounded-lg">
                {/* Project Details */}
                <div className="flex flex-col sm:flex-row font-clash items-center sm:items-start justify-center sm:justify-between border border-[#1F1F1F] rounded-lg p-4 space-y-4 sm:space-y-0">
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Category</h4>
                    <p className="text-[#666666]">Website Development</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[#1f1f1f] h-16 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Time Taken</h4>
                    <p className="text-[#666666]">3 Months</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[#1f1f1f] h-16 mx-4"></div>
                  <div className='hidden sm:block flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Start Date</h4>
                    <p className="text-[#666666]">Aug 20, 2024</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[#1f1f1f] h-16 mx-4"></div>
                  <div className='hidden sm:block flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">End Date</h4>
                    <p className="text-[#666666]">Oct 16, 2024</p>
                  </div>
                </div>
            
                {/* Technologies Used */}
                <div className="flex flex-col sm:flex-row font-clash items-center sm:items-start justify-center sm:justify-start border border-[#1F1F1F] rounded-lg p-4 sm:pl-12">
                  <h4 className="text-md sm:text-lg font-light text-white font-sora text-center sm:text-left mb-2 sm:mb-0">Technologies Used</h4>
                  <div className="flex flex-wrap justify-center sm:justify-start ml-0 sm:ml-8 items-center gap-4 sm:gap-8">
                    {/* Example Technology Icons */}
                    {[
                      { src: ReactIcon, alt: "React.js" },
                      { src: TSIcon, alt: "TypeScript" },
                      { src: TailwindIcon, alt: "Tailwind CSS" },
                      { src: MUIIcon, alt: "Material UI" }
                    ].map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: [0, -6, 0, -3, 0], // Moves up, down slightly, and back
                          transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <img
                          src={tech.src}
                          alt={tech.alt}
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
            
                {/* Team Members */}
                {/*
                <div className="flex font-clash items-center justify-start border border-[#1F1F1F] rounded-lg p-4 pl-12 pr-12">
                  <h4 className="text-lg font-light text-white font-sora text-nowrap">Team Members</h4>
                  <div className="grid grid-cols-3 gap-4 ml-8">
                    <div className="bg-[#222222] p-4 rounded-lg">
                      <h5 className="font-bold text-white mb-1">Web Developers</h5>
                      <p className="text-gray-400">John Smith, Emily Johnson</p>
                    </div>
                    <div className="bg-[#222222] p-4 rounded-lg">
                      <h5 className="font-bold text-white mb-1">UI/UX Designer</h5>
                      <p className="text-gray-400">Jessica Lee</p>
                    </div>
                    <div className="bg-[#222222] p-4 rounded-lg">
                      <h5 className="font-bold text-white mb-1">Project Manager</h5>
                      <p className="text-gray-400">Michael Williams</p>
                    </div>
                  </div>
                </div>
                */}
            
                {/* Methods Used */}
                <div className="flex flex-col sm:flex-row font-clash items-center justify-center sm:justify-start border border-[#1F1F1F] rounded-lg p-4 sm:pl-12 sm:space-x-10 space-y-4 sm:space-y-0 cursor-default">
                  <h4 className="text-md sm:text-lg font-light text-white font-sora text-center sm:text-left mb-2 sm:mb-0">Methods Used</h4>
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Full-Stack Development
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      API Integration
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Mobile Optimization
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Email Marketing
                    </Chip>
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>

        {/* Card 2 */}
        <Card className="bg-glass-bg backdrop-blur-glass border  border-glass-border rounded-lg">
          {/* Card Header */}
          <CardHeader className="p-4">
            <div className="bg-[#222222] shadow-glass rounded-lg overflow-hidden flex justify-center items-center h-fit">
              <img
                src={CardImage2} // Replace with actual image
                alt="Project Thumbnail"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </CardHeader>

          {/* Card Body */}
          <CardBody className="p-8 sm:p-6">
            {/* */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-center sm:text-left sm:pl-4 sm:pr-4 mb-4 space-y-4 sm:space-y-0">
              <h3 className="text-lg sm:text-xl font-medium font-sora flex-wrap">
                Professional Car Detailing Site Template
              </h3>
              
              <div className="flex items-center gap-2">
                <span className="text-[#666666] font-xs font-sora mr-2 sm:mr-0">{expandedCard === 1 ? 'Show Less' : 'Show More'}</span>
                <div className="p-[2px] rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A]/0">
                <Button
                  onPress={() => toggleCard(2)}
                  className="p-3 bg-gradient-to-r from-[#222222] to-[#333333] text-white hover:text-white/80 border border-[#262626] rounded-full"
                  variant="ghost"
                >
                  {expandedCard === 2 ? (
                    <TfiAngleDoubleUp className="text-sm sm:text-lg" />
                  ) : (
                    <TfiAngleDown className="text-sm sm:text-lg" />
                  )}
                </Button>
                </div>
              </div>
            </div>

            {/* Card Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:-mt-4 sm:pl-4 sm:pr-4 justify-center sm:justify-start overflow-x-auto">
              {/* Web Design Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                startContent={<FaPalette className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Design & Branding
              </Chip>
            </div>

            {/* Default Description */}
            <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-lg sm:ml-4 sm:mr-4 mb-4 p-4 sm:p-8 text-center sm:text-left">
              <h4 className="text-lg font-light text-white font-sora mb-4">Project Description</h4>
                <p className="text-xs text-gray-400 font-sora">
                  Developed a full-site template for a mobile detailing business focusing on creating a visually appealing and functional design using Figma.
                </p>
            </div>

            {/* Dropdown Section */}
            {expandedCard === 2 && (
              <div className="space-y-6 p-4 sm:p-8 bg-[#0f0f0f] border border-[#1F1F1F] rounded-lg mx-0 sm:mx-4">
                {/* Project Details */}
                <div className="flex flex-col sm:flex-row font-clash items-stretch justify-center sm:justify-between border border-[#1F1F1F] rounded-lg p-4 space-y-4 sm:space-y-0">
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Category</h4>
                    <p className="text-[#666666]">Design & Branding</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Time Taken</h4>
                    <p className="text-[#666666]">2 Weeks</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='hidden sm:block flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Start Date</h4>
                    <p className="text-[#666666]">Dec 16, 2024</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='hidden sm:block flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">End Date</h4>
                    <p className="text-[#666666]">Jan 3, 2025</p>
                  </div>
                </div>
            
                {/* Technologies Used */}
                <div className="flex flex-col sm:flex-row font-clash items-center sm:items-start justify-center sm:justify-start border border-[#1F1F1F] rounded-lg p-4 sm:pl-12">
                  <h4 className="text-md sm:text-lg font-light text-white font-sora text-center sm:text-left mb-2 sm:mb-0 pt-2">Technologies Used</h4>
                  <div className="flex flex-wrap justify-center sm:justify-start ml-0 sm:ml-8 items-center gap-4 sm:gap-8">
                    {/* Example Technology Icons */}
                    {[1].map((_, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: [0, -6, 0, -3, 0], // Moves up, down slightly, and back
                          transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <img
                          src={FigmaIcon} // Replace with actual icon path
                          alt={`Technology ${index + 1}`}
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
            
                {/* Team Members */}
                {/*
                <div className="flex font-clash items-center justify-start border border-[#1F1F1F] rounded-lg p-4 pl-12 pr-12">
                  <h4 className="text-lg font-light text-white font-sora text-nowrap">Team Members</h4>
                  <div className="grid grid-cols-3 gap-4 ml-8">
                    <div className="bg-[#222222] p-4 rounded-lg">
                      <h5 className="font-bold text-white mb-1">Web Developers</h5>
                      <p className="text-gray-400">John Smith, Emily Johnson</p>
                    </div>
                    <div className="bg-[#222222] p-4 rounded-lg">
                      <h5 className="font-bold text-white mb-1">UI/UX Designer</h5>
                      <p className="text-gray-400">Jessica Lee</p>
                    </div>
                    <div className="bg-[#222222] p-4 rounded-lg">
                      <h5 className="font-bold text-white mb-1">Project Manager</h5>
                      <p className="text-gray-400">Michael Williams</p>
                    </div>
                  </div>
                </div>
                */}
            
                {/* Methods Used */}
                <div className="flex flex-col sm:flex-row font-clash items-center justify-center sm:justify-start border border-[#1F1F1F] rounded-lg p-4 sm:pl-12 sm:space-x-10 space-y-4 sm:space-y-0 cursor-default">
                  <h4 className="text-md sm:text-lg font-light text-white font-sora text-center sm:text-left mb-2 sm:mb-0">Methods Used</h4>
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      UI/UX Design
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Branding Strategy Development
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Prototyping and Wireframing
                    </Chip>
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-6">
        <Link
          href="/projects/all-projects"
          className="no-underline" // Prevent underline styling
        >
            <Button 
              onPress={() => navigate('/projects/all-projects')}
              className="px-6 py-3 rounded-full border border-[#262626] bg-[#1A1A1A]/20 text-white font-sora hover:bg-[#1A1A1A]/40 text-sm font-light"
            >
              View More <ArrowRightAltIcon className="ml-2" />
            </Button>
        </Link>
      </div>
    </section>
  );
};

export default Showcase;