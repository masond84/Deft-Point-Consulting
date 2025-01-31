import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import CardImage from '../../assets/images/DropdownCardImage2.jpg';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const Marketing: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#252525] min-h-screen">
      {/* Title Section */}
      <div className="mt-16 max-w-7xl mx-auto mb-12 px-6 flex flex-col md:flex-row items-start">
        <h1 className="text-3xl font-semibold text-left mb-4 font-sora md:mb-0 md:mr-12 w-full md:w-1/3 text-white">
          Marketing Services
        </h1>
        <p className="text-base sm:text-lg font-light font-clash w-full md:w-2/4 text-left text-gray-200">
          Full-service custom website development solutions to help your
          business stand out and grow.
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
                className="rounded-lg object-cover w-full h-64 md:h-auto"
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
              <h2 className="text-xl font-semibold text-white font-sora">Strategy</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Analytics and Research, Brand Strategy, Content Strategy, Digital
                Strategy, Conversion Rate Optimization, Technical SEO support.
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
              <h2 className="text-xl font-semibold text-white font-sora">Design</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                UI/UX Design, Creative Direction, Brand Guides, Prototypes, Visual
                Asset Creation, Motion Design.
              </p>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className="md:w-12/12 w-full md:order-1">
            <CardBody>
              <img
                src={CardImage}
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
                src={CardImage}
                alt="Development"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
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
              <h2 className="text-xl font-semibold text-white font-sora">Development</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Front-end Development, Back-end Development, CMS Integration, E-commerce Solutions, Web Applications.
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Row 4: Text on left, Image on right */}
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
              <h2 className="text-xl font-semibold text-white font-sora">Marketing</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-200 font-clash">
                Digital Marketing, Social Media Management, Email Marketing, PPC Campaigns, Content Marketing.
              </p>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className="md:w-12/12 w-full md:order-1">
            <CardBody>
              <img
                src={CardImage}
                alt="Marketing"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
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
                title: "Define the spec",
                description: "Define the project spec so both teams understand the project deliverables.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 2,
                title: "Web Design",
                description: "Website design goes beyond aesthetics; our team uses a strategic approach to align with your business objectives.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 3,
                title: "Web Development",
                description: "We will execute a pixel-perfect implementation of your designs.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 4,
                title: "Refine and Perfect",
                description: "We will ensure your project meets your visual and functional needs.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 5,
                title: "Search Engine Optimization",
                description: "Your site aims to attract and convert. SEO is your most strategic marketing tool.",
                image: CardImage, // Replace with the actual image path
              },
              {
                step: 6,
                title: "Launch & Hand-off",
                description: "Publish your project live. Optional training from our developers and project managers.",
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
                <CardHeader className="text-2xl font-bold mb-0">{card.step}.</CardHeader>

                {/* Image Body */}
                <CardBody>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-lg object-cover w-full h-32 md:h-40"
                  />
                </CardBody>

                {/* Card Body */}
                <CardBody>
                  <h3 className="text-lg font-semibold mb-2 font-sora">{card.title}</h3>
                  <p className="text-gray-200 font-clash">
                    {card.description}
                  </p>
                </CardBody>
              </Card>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className='max-w-8xl mx-auto px-6'>
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-12 text-center">Why Choose Us</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Performance & Speed",
                  description:
                    "We build high-performing, fast-loading websites optimized for the best user experience.",
                  icon: "⚡", // Replace with an icon or image
                  overlay: abstractDesignSvg, // Replace with the actual overlay image
                },
                {
                  title: "Security & Reliability",
                  description:
                    "Your website is protected with the latest security protocols to ensure data safety and uptime.",
                  icon: "🔒", // Replace with an icon or image
                  overlay: abstractDesignSvg, // Replace with the actual overlay image
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  isHoverable
                  className="relative p-4 sm:p-6 rounded-lg text-center flex flex-col items-center space-y-2 transition h-full w-[90%] sm:w-full max-w-sm sm:max-w-lg mx-auto card-gradient-border"
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
                  <CardHeader className="relative z-10 flex flex-col items-center pb-2">
                    <span className="text-5xl">{service.icon}</span> {/* Use an icon or image */}
                  </CardHeader>

                  {/* Card Content */}
                  <CardBody className="relative z-10 flex flex-col items-center text-center flex-grow mb-4">
                    <h3 className="text-lg sm:text-xl font-medium mb-4 font-sora">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base font-clash leading-loose">
                      {service.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          
            {/* Social Media Section */}
            <section className=" w-full py-12 px-6 text-center text-white">
                {/* Header Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-sora mb-4">Join Us on Social Media</h3>
                  <p className="text-gray-400 text-md font-clash">
                    Stay updated with our latest projects, industry insights, and company news by following us on social media.
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
                    <h4 className="text-xl font-medium tracking-wide font-sora">Thank You!</h4>
                    <p className="text-gray-300 text-md font-clash max-w-lg text-center">
                      For considering Deft Point. We look forward to connecting with you and being part of your next success!
                    </p>
                  </CardBody>
                </Card>
            </section>
      </div>

    </section>
  );
};

export default Marketing;
