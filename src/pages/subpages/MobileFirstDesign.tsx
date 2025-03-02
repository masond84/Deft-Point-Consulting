import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { motion } from "motion/react";

import PartnersSection from './components/Partners';

import CardImage from '../../assets/images/DropdownCardImage2.jpg';
import CardImage2 from '../../assets/images/why-deft-mobile-first-image-1.jpg';
import CardImage3 from '../../assets/images/why-deft-mobile-first-image-2.jpg';
import CardImage4 from '../../assets/images/why-deft-mobile-first-image-3.jpg';
import CardImage5 from '../../assets/images/why-deft-mobile-first-image-4.jpg';
import CardImage6 from '../../assets/images/why-deft-mobile-first-image-5.jpg';

import abstractDesignSvg from '@/assets/AbstractDesign.svg';
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import LockIcon from '../../assets/images/LockIcon.svg';
import BoltIcon from '../../assets/images/BoltIcon.svg';


const MobileFirstDesign: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#252525] min-h-screen">
      {/* Section 1 */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className='text-3xl font-semibold text-white mb-4 font-sora'>Why Deft Point?</h2>
        <p className='text-gray-200 text-lg font-light max-w-3-xl mx-auto font-clash'>
          We empower your organization by optimizing operations, improving customer experiences, and driving innovation with emerging technologies.
          Uniting multi-disciplinary expertise across technology, marketing, and data, we work closely with you to create the solutions of your dreams.
        </p>

        {/* Image Card */}
        <Card className='mt-8 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-[#0F0F0F]'>
          <CardBody className='p-0'>
            <img
              src={CardImage2}
              alt='Why Deft Point?'
              className='w-full aspect-[21/9] rounded-xl object-cover'
            />
          </CardBody>
        </Card>
      </div>

      {/* Title Section */}
      <div className="mt-16 max-w-7xl mx-auto mb-12 px-6 flex flex-col md:flex-row items-start">
        <h1 className="text-3xl font-semibold text-left mb-4 font-sora md:mb-0 md:mr-12 w-full md:w-1/3 text-white">
          Consulting & Transformation
        </h1>
        <p className="text-base sm:text-lg font-light font-clash w-full md:w-2/4 text-left text-gray-200">
          We use the best practices in emerging technologies, working closely with you through every step of the software development lifecycle. 
        </p>
      </div>

      {/* Section 2 */}
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8">
        {/* Row 1: Image on left, Text on right */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start w-full">
          {/* Image Card */}
          <Card className="md:w-12/12 w-full">
            <CardBody>
              <img
                src={CardImage3}
                alt="Strategy"
                className="rounded-lg object-cover w-full h-64 aspect-[21/9] md:h-auto"
              />
            </CardBody>
          </Card>

          {/* Text Card */}
          <Card className="md:w-5/12 w-full h-full bg-glass-bg shadow-glass backdrop-blur-glass border border-glass-border p-6 rounded-lg flex flex-col justify-end">
            {/* Overlay Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${abstractDesignSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.6, // Adjust opacity for better visibility of the backdrop
              }}
            ></div>
            <CardHeader>
              <h2 className="text-xl font-semibold text-white font-sora">Client Discovery</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                We analyze your business goals and current landscape to identify opportunities for growth and optimization.
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Row 2: Text on left, Image on right */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Text Card */}
          <Card className="md:w-5/12 w-full h-full bg-glass-bg shadow-glass backdrop-blur-glass border border-glass-border p-6 rounded-lg flex flex-col justify-end">
            {/* Overlay Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${abstractDesignSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.6, // Adjust opacity for better visibility of the backdrop
              }}
            ></div>
            <CardHeader>
              <h2 className="text-xl font-semibold text-white font-sora">Roadmap Development</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Analytics and research allow us to create custom digital strategies that align with your business objectives.
              </p>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className="md:w-12/12 w-full md:order-1">
            <CardBody>
              <img
                src={CardImage4}
                alt="Design"
                className="rounded-lg object-cover w-full aspect-[21/9] h-64 md:h-auto"
              />
            </CardBody>
          </Card>
        </div>
        
        {/* Row 3: Image on left, Text on right */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Image Card */}
          <Card className="md:w-12/12 w-full">
            <CardBody>
              <img
                src={CardImage5}
                alt="Development"
                className="rounded-lg object-cover w-full aspect-[21/9] h-64 md:h-auto"
              />
            </CardBody>
          </Card>

          {/* Text Card */}
          <Card className="md:w-5/12 w-full h-full bg-glass-bg shadow-glass backdrop-blur-glass border border-glass-border p-6 rounded-lg flex flex-col justify-end">
            {/* Overlay Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${abstractDesignSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.6, // Adjust opacity for better visibility of the backdrop
              }}
            ></div>
            <CardHeader>
              <h2 className="text-xl font-semibold text-white font-sora">Implementation & Optimization</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                We advise you through every step of the process ensuring seamless integrations and improved performance.               
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Row 4: Text on left, Image on right */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Text Card */}
          <Card className="md:w-5/12 w-full h-full bg-glass-bg shadow-glass backdrop-blur-glass border border-glass-border p-6 rounded-lg flex flex-col justify-end">
            {/* Overlay Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${abstractDesignSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.6, // Adjust opacity for better visibility of the backdrop
              }}
            ></div>
            <CardHeader>
              <h2 className="text-xl font-semibold text-white font-sora">Ongoing Support</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Post-implementation support monitoring key metrics, refining strategies, and scaling solutions for sustained success.              
              </p>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className="md:w-12/12 w-full md:order-1">
            <CardBody>
              <img
                src={CardImage6}
                alt="Marketing"
                className="rounded-lg object-cover w-full aspect-[21/9] h-64 md:h-auto"
              />
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Partners Section 3 */}
      {/*
      <div className='max-w-7xl mx-auto px-6 py-8'>
        <PartnersSection />
      </div>
      */}
      {/* Cards Section */}
      <div className='py-8 text-white'>
        {/* Header Section */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 font-sora">Why Choose Us</h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-8 sm:px-4 max-w-6xl mx-auto items-stretch">
          {[
            {
              title: "Results-Driven Approach",
              description:
                "Our team combines industry expertise with data-driven strategies to deliver tailored solutions that enhance efficiency, scalability, and customer engagement.",
              icon: BoltIcon, // Replace with an icon or image
              overlay: abstractDesignSvg, // Replace with the actual overlay image
            },
            {
              title: "End-to-End Transformation",
              description:
                "We don’t just advise—we execute. From initial analysis to implementation and ongoing support, we’re with you every step of the way.",              
              icon: LockIcon, // Replace with an icon or image
              overlay: abstractDesignSvg, // Replace with the actual overlay image
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 10, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 5, duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Card
                isHoverable
                className="relative p-2 sm:p-4 rounded-lg text-center flex flex-col items-center -space-y-2 sm:space-y-2 transition h-full w-full  mx-auto card-gradient-border"
              >
                {/* Overlay Image */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundImage: `url(${service.overlay})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.8, // Adjust opacity for better visibility of the backdrop
                  }}
                ></div>

                {/* Card Header */}
                <CardHeader className="relative z-10 flex flex-col items-center pb-1">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                </CardHeader>

                {/* Card Content */}
                <CardBody className="relative z-10 flex flex-col items-center text-center flex-grow mb-4">
                  <h3 className="text-lg sm:text-xl font-medium mb-4 font-sora text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base font-clash leading-loose">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
          
        {/* Social Media Section */}
        <section className=" w-full pt-12 px-6 text-center text-white">
          {/* Header Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-sora mb-4">Let Us Bring Your Project To Life</h3>
            <p className="max-w-xl mx-auto text-gray-200 text-md font-clash">
              Let our team bring your vision to fruition. Connect with us and let's explore how we can make your project a reality. 
            </p>
          </div>

            {/* Card Section */}
            <Card
              className="relative border border-[#1F1F1F] rounded-glass p-8 bg-[linear-gradient(220deg,_#121212,_#181818_60%,_#1F1F1F)] max-w-4xl mx-auto"
            >
              <CardBody className="flex flex-col items-center space-y-6">
                {/* Social Media Buttons */}
                <div className="flex items-center space-x-6">
                  {/* LinkedIn Button */}
                  <Button 
                    className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
                    onPress={() => window.open("https://www.linkedin.com/company/deft-point-consulting", "_blank")}
                  >
                    <BsLinkedin className="text-white text-xl" />
                  </Button>
                  {/* Twitter Button */}
                  <Button 
                    className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
                    onPress={() => window.open("https://x.com/deftpoint", "_blank")}
                  >
                    <BsTwitter className="text-white text-xl" />
                  </Button>
                  {/* Facebook Button */}
                  <Button 
                    className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
                    onPress={() => window.open("", "_blank")}
                  >
                    <BsFacebook className="text-white text-xl" />
                  </Button>
                  {/* Instagram Button */}
                  <Button 
                    className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
                    onPress={() => window.open("https://www.instagram.com/deftpointconsulting/", "_blank")}
                  >
                    <BsInstagram className="text-white text-xl" />
                  </Button>
                </div>

                {/* Thank You Header */}
                <h4 className="text-xl font-medium tracking-wide font-sora">Get In Touch</h4>
                <p className="text-gray-300 text-md font-clash max-w-lg text-center font-clash capitalize">
                  Thanks For considering Deft Point. Together we can streamline your business with innovation in mind!
                </p>

                {/* CTA Button */}
                <Button
                  className="px-6 py-3 text-lg font-medium font-clash rounded-full bg-gradient-to-r from-[#4d4d4d] to-[#1F1F1F] hover:opacity-80 transition-all"
                  onPress={() => window.location.href = "/contact"}
                >
                  Start Your Project
                </Button>
              </CardBody>
            </Card>
        </section>
      </div>

    </section>
  );
};

export default MobileFirstDesign;
