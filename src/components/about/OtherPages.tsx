import React from "react";
import { motion } from "motion/react";
import { Card, CardHeader, CardBody, CardFooter, Button, Link } from "@nextui-org/react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import abstractDesign from '@/assets/AbstractDesign.svg';
import WorkIcon from '../../assets/images/WorkIcon.svg';
import PhoneOldIcon from '../../assets/images/PhoneOldIcon.svg';

const OtherPages: React.FC = () => {
  const pages = [
    {
      icon: <img src={WorkIcon} alt="Work With Us" className="w-20 h-20" />,
      title: "Work With Us",
      description:
        "At DigitX, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.",
      link: "#",
    },
    {
      icon: <img src={PhoneOldIcon} alt="Contact Us" className="w-20 h-20" />,
      title: "Contact Us",
      description:
        "At DigitX, we value your inquiries, feedback, and collaborations. Connect with us through any of the channels below, and we'll be delighted to assist you on your digital journey.",
      link: "/contact",
    },
  ];

  return (
    <section className="py-8 text-white bg-[#0F0F0F]">
      {/* Header Section */}
      <div className="text-center mb-6 max-w-3xl mx-auto">
        <p className="text-white text-s font-light font-sora leading-loose">
            See These Pages
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto items-stretch">
        {pages.map((service, index) => (
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
            className="p-4 rounded-lg text-center flex flex-col items-center space-y-2 transition h-full w-full max-w-lg mx-auto card-gradient-border"
          >
            {/* Overlay Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${abstractDesign})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.5, // Adjust opacity for better visibility of the backdrop
              }}
            ></div>

            {/* Card Header */}
            <CardHeader className="flex flex-col items-center pb-1">{service.icon}</CardHeader>

            {/* Card Content */}
            <CardBody className="flex flex-col items-center text-center flex-grow mb-4">
              <h3 className="text-xl font-medium mb-4 font-sora">{service.title}</h3>
              <p className="text-gray-400 text-sm font-clash leading-loose">{service.description}</p>
            </CardBody>

            {/* Card Footer */}
            <CardFooter className="flex justify-center pt-4">
              <div className="flex items-center bg-[#111111] border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#111111]/80 transition">
                <Link href={service.link} className="text-white text-sm font-medium font-sora pr-2">
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
  
export default OtherPages;