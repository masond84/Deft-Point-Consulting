import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import CardImage from '../../assets/images/DropdownCardImage2.jpg';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';

const CustomWebsiteDevelopment: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#252525] min-h-screen">
      {/* Title Section */}
      <div className="mt-16 max-w-7xl mx-auto mb-12 px-6 flex flex-col md:flex-row items-start">
        <h1 className="text-3xl font-semibold text-left mb-4 font-sora md:mb-0 md:mr-12 w-full md:w-1/3 text-white">
          Website Design & Application Development
        </h1>
        <p className="text-base sm:text-lg font-light font-clash w-full md:w-2/4 text-left text-gray-200">
          Full-service custom website development solutions to help your
          business stand out and grow.
        </p>
      </div>

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
    </section>
  );
};

export default CustomWebsiteDevelopment;
