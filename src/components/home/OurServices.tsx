import React from "react";
import { motion } from "motion/react";
import { Card, CardHeader, CardBody, CardFooter, Button, Link } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import Router Link
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import abstractDesignSvg from '@/assets/AbstractDesign.svg';
import WebIcon from '../../assets/images/WebPIcon.svg';
import MobileIcon from '../../assets/images/MobilePIcon.svg';
import BoltIcon from '../../assets/images/BoltPIcon.svg';
import PointerIcon from '../../assets/images/PointerPIcon.svg';

const OurServices: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <img src={WebIcon} alt="Website and Application Development" className="w-20 h-20" />,
      title: "Website and Application Development",
      description:
        "Unlock Your Online Potential in today's digital age with custom websites, applications, and landing pages tailored to your needs.",
      link: "/services",
      tabIndex: 1,
    },
    {
      icon: <img src={MobileIcon} alt="Consulting Services" className="w-20 h-20" />,
      title: "Consulting Services",
      description:
        "Embrace Mobility with Confidence with our guidance on application development, UI/UX design, and digital strategies.",
      link: "/services",
      tabIndex: 2,
    },
    {
      icon: <img src={PointerIcon} alt="Design and Branding (UI/UX)" className="w-20 h-20" />,
      title: "Design & Branding",
      description:
        "Custom UI/UX designs, branding packages, and design systems to elevate Your Brand Aesthetics.",
      link: "/services",
      tabIndex: 0, 
    },
    {
      icon: <img src={BoltIcon} alt="Marketing and Data Solutions" className="w-20 h-20" />,
      title: "Marketing & Data Solutions",
      description: "SEO, analytics, lead generation, PPC campaigns, web automation, marketing solutions and so much more.",      
      link: "/services",
      tabIndex: 3, 
    },
  ];

  return (
    <section className="py-8 text-white bg-[#0F0F0F]">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-8 sm:px-12 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sora leading-snug sm:leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#808080] to-[#b4b4b4]">Our</span> Services
        </h2>
        <p className="text-sm sm:text-base md:text-md text-white text-md font-light font-soraleading-normal sm:leading-loose">
          Our comprehensive range of services include web design, mobile app development, SEO, online marketing, and more.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-8 max-w-6xl mx-auto items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up on scroll
            whileHover={{ rotateY: 10, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 5, duration: 0.5, delay: index * 0.1, ease: "easeInOut" }} // Add stagger effect
            viewport={{ once: true }} // Ensure animation happens only once
          >
          <Card
            isHoverable
            className="p-4 sm:p-6 rounded-lg text-center flex flex-col items-center space-y-4 transition h-full w-[90%] sm:w-full max-w-sm sm:max-w-lg mx-auto card-gradient-border"
          >
            {/* Overlay Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${abstractDesignSvg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.8, // Adjust opacity for better visibility of the backdrop
              }}
            ></div>

            {/* Card Header */}
            <CardHeader className="flex flex-col items-center pb-2">{service.icon}</CardHeader>

            {/* Card Content */}
            <CardBody className="flex flex-col items-center text-center flex-grow mb-4">
              <h3 className="text-lg sm:text-xl font-medium mb-4 font-sora">{service.title}</h3>
              <p className="capitalize  text-gray-400 text-sm sm:text-base font-clash leading-loose">{service.description}</p>
            </CardBody>

            {/* Card Footer */}
            <CardFooter className="flex justify-center pt-4">
              <div 
                className="flex items-center bg-[#111111] border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#111111]/80 transition"
              >
                <span className="text-white text-sm font-medium font-sora pr-2">
                  Learn More
                </span>
                <Button 
                  onPress={() => {
                      navigate('/services', { state: {tabIndex: 1} });
                  }}
                  className="w-12 h-2 p-4 bg-black rounded-full flex items-center justify-center">
                  <ArrowRightAltIcon />
                </Button>
              </div>
            </CardFooter>
          </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
  
  export default OurServices;