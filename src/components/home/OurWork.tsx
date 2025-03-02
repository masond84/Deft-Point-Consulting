import React from 'react';
import { Card, CardBody, Button, Link } from '@nextui-org/react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

// Import images for the top containers
import AbstractIcon1 from '../../assets/images/AbstractIcon1.svg';
import AbstractIcon2 from '../../assets/images/AbstractIcon2.svg';
import AbstractIcon3 from '../../assets/images/AbstractIcon3.svg';
import AbstractIcon4 from '../../assets/images/AbstractIcon4.svg';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';

const OurWork: React.FC = () => {
  const navigate = useNavigate();

  const works = [
    {
      id: 'cleaning-services',
      iconPath: AbstractIcon1,
      title: 'Professional Cleaning Services Website',
      category: 'Category: Web Development',
      date: 'September 2024',
      description:
        'Developed a professional website to increase the online visibility of Minas Cleaning Services, a cleaning company.',
      link: '/projects/cleaning-services',
    },
    {
      id: 'custom-crm-setup',
      iconPath: AbstractIcon3,
      title: 'Custom CRM Setup With HubSpot',
      category: 'Category: Marketing Solutions',
      date: 'June 2024',
      description:
        'Designed a custom CRM using HubSpot and WordPress, automating lead capture and streamlining retail outreach.',
      link: '/projects/custom-crm-setup',
    },
    {
      id: 'edutech-seo-optimization',
      iconPath: AbstractIcon4,
      title: 'SEO Optimization For EduTech App',
      category: 'Category: Marketing Solutions',
      date: 'May 2022',
      description:
        'Improved search engine rankings and online visibility for a speech language therapy application.',
      link: '/projects/edutech-seo-optimization',
    },
    {
      id: 'mobile-detailing-template',
      iconPath: AbstractIcon2,
      title: 'Professional Car Detailing Website Template',
      category: 'Category: Web Development',
      date: 'Dec 2024',
      description:
        'Implemented a modern car detailing website template, with figma and modern UI components - building online brand presence.',
      link: '/projects/mobile-detailing-template',
    },
  ];

  return (
    <section className="py-12 text-white bg-[#0F0F0F]">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-8 sm:px-12 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sora leading-snug sm:leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#808080] to-[#b4b4b4]">Our</span> Works
        </h2>
        <p className="text-sm sm:text-base md:text-md text-white font-light font-sora leading-normal sm:leading-loose">
          Witness the brilliance of our previous projects. Our portfolio showcases the successful
          collaborations we’ve had with diverse clients across various industries.
        </p>
      </div>

      {/* Cards Section Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto items-stretch">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up on scroll
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add stagger effect
            viewport={{ once: true }} // Ensure animation happens only once
          >
            <Card
            key={index}
            isHoverable
            className="relative p-0 rounded-2xl overflow-hidden transition h-full w-full max-w-lg mx-auto bg-[#121212]"
            >
              {/* Wrapper for All Card Content */}
              <div className="flex flex-col justify-between h-full p-6 bg-[#121212] rounded-2xl">
                {/* Top Container */}
              <div className="relative h-48 bg-[#1A1A1A] flex items-center justify-center rounded-lg">
                  {/* Overlay Image */}
                  <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${abstractDesignSvg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        opacity: 1, // Adjust opacity for better visibility of the backdrop
                      }}
                  ></div>

                  {/* Icon/Image */}
                  <img
                    src={work.iconPath}
                    alt={work.title}
                    className="relative z-10 h-24 w-24" // Adjust size as needed
                  />
                  
                  <Button
                      onPress={() => navigate(work.link)}
                      className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1A1A1A]/80 text-white rounded-full px-5 py-2  border border-[#262626] font-sora hover:bg-[#1A1A1A]/40 text-sm font-light"
                  >
                    View Projects Details
                    <ArrowRightAltIcon className="ml-1" />
                  </Button>
                </div>

                {/* Body Section */}
                <CardBody className="px-4 py-6 mt-4">
                  <div className="flex justify-between items-center text-sm font-clash font-light mb-4">
                    <span className="text-gray-400">{work.category}</span>
                    <span className="text-gray-400">{work.date}</span>
                  </div>

                  <h3 className="text-lg font-bold font-sora text-white mb-4">{work.title}</h3>
                  <p className="text-gray-400 text-sm font-sora font-light">{work.description}</p>
                </CardBody>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Cards Section - Mobile */}
      <div className="md:hidden grid grid-cols-1 gap-8 px-4 max-w-6xl mx-auto items-stretch">
        {works.slice(0, 2).map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              isHoverable
              className="relative p-0 rounded-2xl overflow-hidden transition h-full w-full max-w-lg mx-auto bg-[#121212]"
            >
              {/* Wrapper for All Card Content */}
              <div className="flex flex-col justify-between h-full p-6 bg-[#121212] rounded-2xl">
                {/* Top Container */}
                <div className="relative h-48 bg-[#1A1A1A] flex items-center justify-center rounded-lg">
                  {/* Overlay Image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${abstractDesignSvg})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      opacity: 1,
                    }}
                  ></div>

                  {/* Icon/Image */}
                  <img
                    src={work.iconPath}
                    alt={work.title}
                    className="relative z-10 h-24 w-24"
                  />

                  <Button 
                    onPress={() => navigate(work.link)}
                    className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1A1A1A]/80 text-white rounded-full px-5 py-2 border border-[#262626] font-sora hover:bg-[#1A1A1A]/40 text-sm font-light">
                    View Project Details
                    <ArrowRightAltIcon className="ml-1" />
                  </Button>
                </div>

                {/* Body Section */}
                <CardBody className="px-4 py-6 mt-4">
                  <div className="flex flex-col md:flex-row justify-between items-start text-sm font-clash font-light mb-4 space-y-2">
                    <span className="text-gray-400 whitespace-nowrap">{work.category}</span>
                    <span className="text-gray-400 whitespace-nowrap">{work.date}</span>
                  </div>

                  <h3 className="text-lg font-bold font-sora text-white mb-4">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-sora font-light">
                    {work.description}
                  </p>
                </CardBody>
              </div>
            </Card>
          </motion.div>
        ))}
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
              View All Projects <ArrowRightAltIcon className="ml-2" />
            </Button>
        </Link>
      </div>
      
    </section>
  );
};

export default OurWork;