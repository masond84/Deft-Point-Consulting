import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { motion } from "motion/react";

import CardImage from '../../assets/images/card-image-6-website-design.png';
import CardImage2 from '../../assets/images/card-image-1-website-design.png';
import CardImage3 from '../../assets/images/card-image-5-website-design.png';
import CardImage4 from '../../assets/images/card-image-7-website-design.png';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';
import LockIcon from '../../assets/images/LockIcon.svg';
import BoltIcon from '../../assets/images/BoltIcon.svg';
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const WebsiteRedesign: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#252525] min-h-screen">
      {/* Title Section */}
      <div className="mt-20 max-w-7xl mx-auto mb-12 px-6 flex flex-col md:flex-row items-start">
        <h1 className="text-3xl font-semibold text-left mb-4 font-sora md:mb-0 md:mr-12 w-full md:w-1/3 text-white">
          Full-Scale Website Design
        </h1>
        <p className="text-base sm:text-lg font-light font-clash w-full md:w-2/4 text-left text-gray-200">
          Working with B2B partners, we provide end-to-end web design- whether refreshing an existing site or building a new one from scratch. Let us help you scale your brand with custom aesthetics and functionality.
        </p>
      </div>

      {/* Section 1 */}
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8">
        {/* Row 1: Image on left, Text on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full">
          {/* Image Card */}
          <Card className="md:w-12/12 w-full">
            <CardBody>
              <img
                src={CardImage}
                alt="Strategy"
                className="rounded-lg object-cover aspect-[21/9] w-full h-64 md:h-auto"
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
              <h2 className="text-xl font-semibold text-white font-sora">Strategy Development</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                We perform competitor analysis and industry research to understand your brand and ensure your site stands out.
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Row 2: Text on left, Image on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
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
              <h2 className="text-xl font-semibold text-white font-sora">Custom UX/UI Optimization</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Our team crafts initial wireframes and prototypes to define the layout and ensure smooth transition into development.
              </p>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className="md:w-12/12 w-full md:order-1">
            <CardBody>
              <img
                src={CardImage2}
                alt="Design"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </CardBody>
          </Card>
        </div>
        
        {/* Row 3: Image on left, Text on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image Card */}
          <Card className="md:w-12/12 w-full">
            <CardBody>
              <img
                src={CardImage3}
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
              <h2 className="text-xl font-semibold text-white font-sora">Iterative Development & Integration</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                We employ modern frameworks to ensure responsiveness, and scalability with additional add on integrations as needed.              
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Row 4: Text on left, Image on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start overflow-hidden">
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
              <h2 className="text-xl font-semibold text-white font-sora">Testing, Deployment, Launch</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Allow us to ensure flawless functionality with in depth testing, offering ongoing maintenance after going live to keep your site at peak effeciency.              
              </p>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className="hidden md:block md:w-12/12 w-full md:order-1">
            <CardBody>
              <img
                src={CardImage4}
                alt="Marketing"
                className="rounded-lg object-cover w-full aspect-[21/9] md:h-auto"
              />
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Section 2 */}
      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Title */}
        <h2 className='text-3xl font-semibold mb-12 text-center font-sora text-white'>The Process</h2>

        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card Data Array */}
            {[
              {
                step: 1,
                title: "Requirement Analysis",
                description: "We breakdown your vision and assess the best way for building out your project.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 2,
                title: "User Experience Design",
                description: "Defining the ways a user interacts with the application to ensure a seamless experience.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 3,
                title: "User Interface Design",
                description: "We build a visually appealing interfaces that align with your vision and brand identity.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 4,
                title: "Application Development",
                description: "Each project is built with functionality and scalability in mind, converting designs into applications.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 5,
                title: "Quality Assurance",
                description: "Let us identify and resolve the bugs, performance issues and usability problems within your application.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 6,
                title: "Launch & Hand-off",
                description: "Launch the application on a production server with post-launch support for all your needs.",
                image: CardImage, // Replace with the actual image path
              },
            ].map((card, index) => (
              <Card key={index} className='p-3 rounded-lg bg-glass-bg shadow-glass text-white -space-y-2'>
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

                {/* Header */}
                <CardHeader className="text-2xl font-bold mb-0 font-clash">{card.step} .</CardHeader>

                {/* Card Body */}
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2 font-clash tracking-wider">{card.title}</h3>
                  <p className="text-gray-200 font-sora">
                    {card.description}
                  </p>
                </CardBody>
              </Card>
          ))}
        </div>
      </div>

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
              title: "Technical Specialization",
              description:
                "Clients trust us to bring their vision to life with the expertise and experience to build exactly what they need.",
              icon: BoltIcon, // Replace with an icon or image
              overlay: abstractDesignSvg, // Replace with the actual overlay image
            },
            {
              title: "Communication & Transparency",
              description:
                "A well-managed project guarantees timely delivery, clear expectations, and smooth collaboration between clients and our team.",              
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
                    onPress={() => window.open("https://www.facebook.com/profile.php?id=61572559884891", "_blank")}
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

export default WebsiteRedesign;
