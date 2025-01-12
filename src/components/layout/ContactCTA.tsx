import React from 'react';
import { motion } from 'motion/react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { Chip } from '@mui/material';
import abstractDesign from '@/assets/AbstractDesign.svg';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-12 flex justify-center px-4 sm:px-0 overflow-visible">
      <motion.div
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='overflow-visible'
      >
        <Card
          className="relative shadow-lg rounded-2xl max-w-lg sm:max-w-5xl w-full p-4 sm:p-10 overflow-visible"
          style={{
            background: `linear-gradient(100deg, rgba(26, 26, 26, 0.8) 0%, rgba(15, 15, 15, 0.8) 20%), url('/src/assets/AbstractDesign.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
          }}
        >
          {/* Overlay Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${abstractDesign})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 1,
            }}
          ></div>

          {/* Card Header */}
          <CardHeader className="text-center pb-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight font-sora max-w-2xl text-center mx-auto mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bebebe] to-[#ecececb7]">
                Get in Touch
              </span>{" "}
                with Us Today!            
              </h2>
          </CardHeader>

          {/* Card Body */}
          <CardBody className="text-center relative z-10 space-y-2 mr-20">
            <p className="text-sm sm:text-base text-white font-light font-sora mb-4 max-w-2xl mx-auto">
              At DigitX, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.
            </p>
            <p className="text-white text-sm sm:text-base font-light font-sora max-w-2xl mx-auto">
              Connect with us through any of the channels below, and we’ll be delighted to assist you on your digital journey.
            </p>
          </CardBody>

            {/* Centered Chip */}
            <div
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20"
                style={{
                    marginBottom: '-20px', // Adjust positioning
                }}
            >
                <Chip
                    label="Feel free to contact us through any of the following channels"
                    className=" text-sm font-clash"
                    style={{
                        backgroundColor: 'rgba(26, 26, 26, 0.5)', // Slightly transparent background
                        color: '#FFFFFF', // Text color
                        border: '1px solid #1F1F1F', // Border color
                        borderRadius: '999px', // Fully rounded chip
                        maxWidth: 'fit-content',
                        fontFamily: 'Clash Display, sans-serif',
                    }}
                />
            </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
