import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Link
} from '@nextui-org/react';
import { motion } from "motion/react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SparkleIcon from '../../assets/images/SparkleIcon.svg';
import LightBulbIcon from '../../assets/images/LightBulbIcon.svg';
import PointerIcon from '../../assets/images/PointerIcon.svg';
import PhoneIcon from '../../assets/images/PhoneIcon.svg';
import BoltIcon from '../../assets/images/BoltIcon.svg';
import AppsIcon from '../../assets/images/AppsIcon.svg';

const ReasonsToChoose: React.FC = () => {
    // List of services offered or ways to help other companies
    const cardContent = [
      {
        icon: <img src={SparkleIcon} alt="Sparkle Icon" className="w-20 h-20" />,
        title: 'Expertise That Drives Results',
        description: 'Our team of seasoned professionals brings years of experience and expertise to the table.',
        link: '#',
      },
      {
        icon: <img src={LightBulbIcon} alt="Sparkle Icon" className="w-20 h-20" />,
        title: 'Tailored Business Solutions',
        description: 'We understand that every business is unique. That’s why our solutions are customized.',
        link: '#',
      },
      {
        icon: <img src={PointerIcon} alt="Sparkle Icon" className="w-20 h-20" />,
        title: 'Cutting-Edge Web Design',
        description: 'Leave a lasting impression on your audience with our top-notch web design services.',
        link: '#',
      },
      {
        icon: <img src={PhoneIcon} alt="Sparkle Icon" className="w-20 h-20" />,
        title: 'Mobile-First Approach',
        description: 'In today’s mobile-centric world, we prioritize mobile-first design to ensure your website shines.',
        link: '#',
      },
      {
        icon: <img src={BoltIcon} alt="Sparkle Icon" className="w-20 h-20" />,
        title: 'Marketing Strategies',
        description: 'Our data-driven marketing strategies allow us to target the right audience with precision.',
        link: '#',
      },
      {
        icon: <img src={AppsIcon} alt="Sparkle Icon" className="w-20 h-20" />,
        title: 'Search Engine Optimization',
        description: 'Boost your online visibility with our expert SEO techniques for long-lasting success.',
        link: '#',
      },
    ];

  return (
    <section 
      className="py-8 text-white"
      style={{
        background: 'linear-gradient(135deg, #272727 0%, #0f0f0f 92%)',
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 font-sora leading-tight">
          Reasons to Choose Deft Point for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#808080] to-[#b4b4b4]">Your Digital Journey</span>
        </h2>
        <p className="text-white text-md font-light font-sora leading-loose">
          Partnering with Deft Point offers a multitude of advantages. Experience increased brand visibility, 
          improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your 
          unique business needs, ensuring lasting success.
        </p>
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto items-stretch'>
        {cardContent.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: 10, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 8 }}
          >
          <Card
            isHoverable
            className="bg-glass-bg shadow-glass backdrop-blur-glass border  border-glass-border p-6 rounded-lg text-center flex flex-col items-center space-y-4 transition h-full w-72 max-w-sm"
          >
          {/* Overlay Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/src/assets/AbstractDesign.svg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.3, // Adjust opacity for better visibility of the backdrop
            }}
          ></div>

          {/* Card Header */}
          <CardHeader className="flex flex-col items-center pb-2">
            {card.icon}
          </CardHeader>

          {/* Card Content */}
          <CardBody className='flex flex-col items-center text-center flex-grow mb-4'>
            <h3 className="text-xl font-medium mb-4 font-sora">{card.title}</h3>
            <p className="text-gray-400 text-sm font-clash leading-loose">{card.description}</p>
          </CardBody>

          {/* Card Footer */}
          <CardFooter className="flex justify-center pt-4">
              <div className='flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#1A1A1A]/40 transition'>
                <Link href={card.link} className='text-white text-sm font-medium font-sora pr-4'>
                  Learn More
                </Link>
                <Button className="w-12 h-2 p-4 bg-black rounded-full flex items-center justify-center">
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

export default ReasonsToChoose;
