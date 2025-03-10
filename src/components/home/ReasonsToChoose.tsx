import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Link
} from '@nextui-org/react';
import { useNavigate } from "react-router-dom";
import { motion as motionReact } from "motion/react";
import { motion as framerMotion, AnimatePresence } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SparkleIcon from '../../assets/images/SparkleIcon.svg';
import LightBulbIcon from '../../assets/images/LightBulbIcon.svg';
import PointerIcon from '../../assets/images/PointerIcon.svg';
import PhoneIcon from '../../assets/images/PhoneIcon.svg';
import BoltIcon from '../../assets/images/BoltIcon.svg';
import AppsIcon from '../../assets/images/AppsIcon.svg';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';

const ReasonsToChoose: React.FC = () => {
  const navigate = useNavigate(); // Programmatic navigation using react-router

  const [cardOrder, setCardOrder ] = useState<number[]>([]);

  // List of services offered or ways to help other companies
  const cardContent = [
    {
      icon: <img src={SparkleIcon} alt="Sparkle Icon" className="w-20 h-20" />,
      title: 'Custom Software Development',
      description: 'We develop businesses with custom applications and software tailored to their specific needs.',
      link: '/services/custom-software-development',
    },
    {
      icon: <img src={LightBulbIcon} alt="Sparkle Icon" className="w-20 h-20" />,
      title: 'Consulting & Transformation',
      description: 'Unlock the full potential of your business with our strategic consulting and digital transformation services.',
      link: '/services/consulting',
    },
    {
      icon: <img src={PointerIcon} alt="Sparkle Icon" className="w-20 h-20" />,
      title: 'Full-Scale Website Design',
      description: "We craft visually stunning, responsive websites that elevate your brand's digital presence.",
      link: '/services/website-design',
    },
    {
      icon: <img src={PhoneIcon} alt="Sparkle Icon" className="w-20 h-20" />,
      title: 'Ongoing Maintenance Plans',
      description: 'Keep your systems running smoothly with regular updates, performance checks, and hosting management.',
      link: '/services/website-maintenance-plans',
    },
    {
      icon: <img src={BoltIcon} alt="Sparkle Icon" className="w-20 h-20" />,
      title: 'Marketing Strategies',
      description: 'Reach your ideal audience with precision offering personalized strategies to boost visibiliaty and maximize ROI.',
      link: '/services/marketing',
    },
    {
      icon: <img src={AppsIcon} alt="Sparkle Icon" className="w-20 h-20" />,
      title: 'Data-Driven Scaling',
      description: 'We offer Site Auditing, CRM Integration, API Connectivity, and real-time tracking for seamless bussiness operations.',
      link: '/services/data-solutions',
    },
  ];

  useEffect(() => {
    const initialOrder = Array.from({ length: cardContent.length }, (_, i) => i);
    setCardOrder(initialOrder); // Set the initial card order
  }, [cardContent.length]);

  const shuffleTopCard = () => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const firstCard = newOrder.shift();
      if (firstCard !== undefined) {
        newOrder.push(firstCard); // Move the top card to the bottom
      }
      return newOrder;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleTopCard();
    }, 6000);

    return () => clearInterval(interval);
  }, [cardOrder]);

  const handleButtonClick = (link: string) => {
    // Scroll to the top of the page before navigating
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
    
    navigate(link); // Navigate to the associated link
  };

  return (
    <section 
      id="reasons-to-choose" 
      className="py-8 md:py-10 relative text-white"
      style={{
        background: 'linear-gradient(285deg, #0F0F0F 60%, #0f0f0f98 92%)',
        overflow: 'hidden',
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-8 sm:px-12 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sora leading-snug sm:leading-tight">
          Reasons to Choose Deft Point for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#808080] to-[#b4b4b4]">Your Digital Journey</span>
        </h2>
        <p className="text-sm sm:text-base md:text-md text-white font-light font-sora leading-normal sm:leading-loose">
          Partnering with Deft Point offers a multitude of advantages. Experience increased brand visibility, 
          improved customer engagement, and higher ROI.
        </p>
      </div>
      
      {/* Desktop Layout */}
      {/* Cards Section */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 px-20 md:px-24 lg:px-4 max-w-5xl mx-auto items-center justify-items-center'>
        {cardContent.map((card, index) => (
          <motionReact.div
            key={index}
            whileHover={{ rotateY: 10, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 8 }}
          >
          <Card
            isHoverable
            className="bg-glass-bg shadow-glass backdrop-blur-glass border border-glass-border p-6 rounded-lg text-center flex flex-col items-center space-y-4 transition h-full w-72 max-w-sm"
          >
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

            {/* Card Header */}
            <CardHeader className="flex flex-col items-center pb-2">
              {card.icon}
            </CardHeader>

            {/* Card Content */}
            <CardBody className='flex flex-col items-center text-center flex-grow mb-4 justify-between h-52 overflow-visible'>
              <h3 className="text-xl font-medium mb-4 font-sora">{card.title}</h3>
              <p className="text-gray-200 text-sm font-clash leading-loose">{card.description}</p>
            </CardBody>

            {/* Card Footer */}
            <CardFooter className="flex justify-center pt-4">
              {index < 3 && ( // Only show the button for the first three cards
                <div className='flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#1A1A1A]/40 transition'>
                  <Link 
                    className='text-white text-sm font-medium font-sora pr-4 cursor-default'
                  >
                    Learn More
                  </Link>
                  <Button 
                    onPress={() => handleButtonClick(card.link)} // Navigate programmatically
                    className="w-12 h-2 p-4 bg-black rounded-full flex items-center justify-center"
                  >
                    <ArrowRightAltIcon />
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </motionReact.div>
      ))}
    </div>

    {/* Mobile Layout */}
    <div 
      className='md:hidden relative w-full h-[600px] flex justify-center items-center -mt-20'
    >
      <AnimatePresence>
        {cardOrder.map((index, arrayIndex) => (
          <framerMotion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -30,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              scale: arrayIndex === 0 ? 1 : 0.95, // Top card slightly larger
              y: arrayIndex * 15, // Stack effect
              rotate: arrayIndex * 3, // Add slight rotation to each card
              zIndex: cardOrder.length - arrayIndex, // Dynamic zIndex
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 50,
              rotate: -10,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute w-[300px] h-[450px] cursor-pointer"
            onClick={() => shuffleTopCard()} // Trigger shuffle animation
          >
            {/* Card */}
            <Card
              isHoverable
              className='bg-glass-bg-dark shadow-glass backdrop-blur-glass border border-glass-border rounded-lg text-center flex flex-col items-center space-y-4 h-full relative overflow-hidden'
            >
              {/* Overlay Image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${abstractDesignSvg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.6, // Adjust opacity for better visibility
                  zIndex: -1, // Ensure it stays behind the content
                }}
              ></div>

              {/* Card Header */}
              <CardHeader className='flex flex-col items-center pb-2'>
                {cardContent[index].icon}
              </CardHeader>

              {/* Card Body */}
              <CardBody className='flex flex-col items-center text-center mb-4 justify-start h-48 overflow-visible'>
                <h3 className="text-xl font-medium font-sora mb-2">{cardContent[index].title}</h3>
                <p className='text-gray-200 text-sm font-clash leading-loose mt-2'>
                  {cardContent[index].description}
                </p>
              </CardBody>

              {/* Card Footer */}
              {index < 3 && (
                <CardFooter className="flex justify-center pt-4">
                  <div className="flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#1A1A1A]/40 transition">
                    <Link className="text-white text-sm font-medium font-sora pr-4">
                      Learn More
                    </Link>
                    <Button 
                      onPress={() => handleButtonClick(cardContent[index].link)}
                      className="w-12 h-2 p-4 bg-black rounded-full flex items-center justify-center"
                    >
                      <ArrowRightAltIcon />
                    </Button>
                  </div>
                </CardFooter>
              )}
            </Card>
          </framerMotion.div> 
        ))}
      </AnimatePresence>
    </div>
  </section>
  );
};

export default ReasonsToChoose;
