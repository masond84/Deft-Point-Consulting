import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Chip } from '@nextui-org/react';
import { motion } from "motion/react";

import { FaIndustry, FaLaptopCode, FaPalette } from 'react-icons/fa';
import { TfiAngleDown, TfiAngleDoubleUp } from 'react-icons/tfi';
import CardImage1 from '../../assets/images/DropdownCardImage1.jpg';
import CardImage2 from '../../assets/images/DropdownCardImage2.jpg';

const Showcase: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardId: number): void => {
    setExpandedCard(expandedCard === cardId ? null : cardId); // Expand only the clicked card
  };

  return (
    <section className="py-12 bg-[#121212] text-white">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold font-sora leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#808080] to-[#b4b4b4]">Projects</span> Showcase
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed font-clash mt-4">
          Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {/* Card 1 */}
        <Card className="bg-[#1A1A1A] shadow-lg rounded-lg border border-[#1F1F1F]">
          {/* Card Header */}
          <CardHeader className="p-4">
            <div className='bg-[#222222] rounded-lg overflow-hidden flex justify-center items-center h-72'>
              <img
                src={CardImage1} // Replace with actual image
                alt="Project Thumbnail"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </CardHeader>

          {/* Card Body */}
          <CardBody className="p-6">
            {/*  */}
            <div className="flex justify-between items-center pl-4 pr-4 mb-4">
              <h3 className="text-xl font-medium font-sora">E-Commerce Revolution</h3>
              
              <div className="flex items-center gap-2">
                <span className="text-[#666666] font-xs font-sora">{expandedCard === 1 ? 'Show Less' : 'Show More'}</span>
                <div className="p-[2px] rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A]/0">
                <Button
                  onPress={() => toggleCard(1)}
                  className="p-3 bg-gradient-to-r from-[#222222] to-[#333333] text-white hover:text-white/80 border border-[#262626] rounded-full"
                  variant="ghost"
                >
                  {expandedCard === 1 ? (
                    <TfiAngleDoubleUp className="text-lg" />
                  ) : (
                    <TfiAngleDown className="text-lg" />
                  )}
                </Button>
                </div>
              </div>
            </div>
            
            {/* Card Tags */}
            <div className="flex flex-wrap gap-3 pl-4 pr-4 mb-4">
              {/* E-commerce Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center p-4 text-sm font-clash"
                startContent={<FaIndustry className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                E-commerce
              </Chip>

              {/* Web Design Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center p-4 text-sm font-clash"
                startContent={<FaPalette className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Web Design
              </Chip>

              {/* Development Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center p-4 text-sm font-clash"
                startContent={<FaLaptopCode className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Development
              </Chip>
            </div>
            
            {/* Default Description */}
            <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-lg ml-4 mr-4 mb-4 p-8">
              <h4 className="text-lg font-light text-white font-sora mb-4">Project Description</h4>
              <p className='text-xs text-gray-400 font-sora'>
                A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.
              </p>
            </div>

            {/* Dropdown Section */}
            {expandedCard === 1 && (
              <div className="space-y-6 p-8 bg-[#0f0f0f] border border-[#1F1F1F] rounded-lg">
                {/* Project Details */}
                <div className="flex font-clash items-center justify-between border border-[#1F1F1F] rounded-lg p-4">
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Category</h4>
                    <p className="text-[#666666]">Technology</p>
                  </div>
                  <div className="w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Time Taken</h4>
                    <p className="text-[#666666]">6 Months</p>
                  </div>
                  <div className="w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Start Date</h4>
                    <p className="text-[#666666]">Feb 1, 2023</p>
                  </div>
                  <div className="w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">End Date</h4>
                    <p className="text-[#666666]">Aug 1, 2023</p>
                  </div>
                </div>
            
                {/* Technologies Used */}
                <div className="flex font-clash items-center justify-start border border-[#1F1F1F] rounded-lg p-4 pl-12">
                  <h4 className="text-lg font-light text-white font-sora">Technologies Used</h4>
                  <div className="flex ml-8 items-center gap-8">
                    {/* Example Technology Icons */}
                    {[1, 2, 3, 4].map((_, index) => (
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
                          src="src/assets/images/FigmaIcon.svg" // Replace with actual icon path
                          alt={`Technology ${index + 1}`}
                          className="w-12 h-12"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
            
                {/* Team Members */}
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
            
                {/* Methods Used */}
                <div className="flex font-clash items-center justify-start border border-[#1F1F1F] rounded-lg p-4 pl-12 space-x-10 cursor-default">
                  <h4 className="font-bold text-white">Methods Used</h4>
                  <div className="flex flex-wrap gap-4">
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Development
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Development
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Development
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
            <div className="bg-[#222222] rounded-lg overflow-hidden flex justify-center items-center h-72">
              <img
                src={CardImage2} // Replace with actual image
                alt="Project Thumbnail"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </CardHeader>

          {/* Card Body */}
          <CardBody className="p-6">
            {/* */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium font-sora">TechGuru Platform</h3>
              
              <div className="flex items-center gap-2">
                <span className="text-[#666666] font-xs font-sora">{expandedCard === 1 ? 'Show Less' : 'Show More'}</span>
                <div className="p-[2px] rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A]/0">
                <Button
                  onPress={() => toggleCard(2)}
                  className="p-3 bg-gradient-to-r from-[#222222] to-[#333333] text-white hover:text-white/80 border border-[#262626] rounded-full"
                  variant="ghost"
                >
                  {expandedCard === 2 ? (
                    <TfiAngleDoubleUp className="text-lg" />
                  ) : (
                    <TfiAngleDown className="text-lg" />
                  )}
                </Button>
                </div>
              </div>
            </div>

            {/* Card Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                            {/* E-commerce Chip */}
                            <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                startContent={<FaIndustry className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Technology
              </Chip>

              {/* Web Design Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                startContent={<FaPalette className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Platform
              </Chip>

              {/* Development Chip */}
              <Chip
                className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                startContent={<FaLaptopCode className="text-[#A6A6A6] text-sm" />} // Icon on the left
                size="lg"
                variant="bordered"
              >
                Development
              </Chip>
            </div>

            {/* Default Description */}
            <div className="bg-[#0F0F0F] border border-[#1F1F1F] p-8 rounded-lg mb-4">
              <h4 className="text-lg font-light text-white font-sora mb-4">Project Description</h4>
                <p className="text-xs text-gray-400 font-sora">
                  A cutting-edge platform for technology enthusiasts, designed to streamline workflows and enhance collaboration among teams.
                </p>
            </div>

            {/* Dropdown Section */}
            {expandedCard === 2 && (
              <div className="space-y-6 p-8 bg-[#0f0f0f] border border-[#1F1F1F] rounded-lg">
                {/* Project Details */}
                <div className="flex font-clash items-center justify-between border border-[#1F1F1F] rounded-lg p-4">
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Category</h4>
                    <p className="text-[#666666]">Technology</p>
                  </div>
                  <div className="w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Time Taken</h4>
                    <p className="text-[#666666]">6 Months</p>
                  </div>
                  <div className="w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">Start Date</h4>
                    <p className="text-[#666666]">Feb 1, 2023</p>
                  </div>
                  <div className="w-px bg-[#1f1f1f] h-12 mx-4"></div>
                  <div className='flex-1 text-center'>
                    <h4 className="font-light text-white font-sora">End Date</h4>
                    <p className="text-[#666666]">Aug 1, 2023</p>
                  </div>
                </div>
            
                {/* Technologies Used */}
                <div className="flex font-clash items-center justify-start border border-[#1F1F1F] rounded-lg p-4 pl-12">
                  <h4 className="text-lg font-light text-white font-sora">Technologies Used</h4>
                  <div className="flex ml-8 items-center gap-8">
                    {/* Example Technology Icons */}
                    {[1, 2, 3, 4].map((_, index) => (
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
                          src="src/assets/images/FigmaIcon.svg" // Replace with actual icon path
                          alt={`Technology ${index + 1}`}
                          className="w-12 h-12"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
            
                {/* Team Members */}
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
            
                {/* Methods Used */}
                <div className="flex font-clash items-center justify-start border border-[#1F1F1F] rounded-lg p-4 pl-12 space-x-10 cursor-default">
                  <h4 className="font-bold text-white">Methods Used</h4>
                  <div className="flex flex-wrap gap-4">
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Development
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Development
                    </Chip>
                    <Chip
                      className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full flex items-center p-4 text-sm font-clash"
                      size="lg"
                      variant="bordered"
                    >
                      Development
                    </Chip>
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Showcase;