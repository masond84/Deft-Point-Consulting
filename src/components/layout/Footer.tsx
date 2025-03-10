import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from 'flowbite-react';
import { Button, Accordion, AccordionItem } from '@nextui-org/react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import DeftBirdIcon from "../../assets/logo/DeftBirdIcon";

const CustomFooter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Footer container className='!rounded-none !w-full bg-[#1F1F1F] text-white py-12'>
      <div className="flex flex-col space-y-8 w-full ">
        {/* First Container */}
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto px-6">
          {/* Logo */}
          <div className="h-10 w-10 sm:h-10 sm:w-10 scale-150 relative fade-in">
              <a href="/">
                <DeftBirdIcon className="h-full w-full" />
              </a>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center space-x-4">
            {/* Paragraph */}
            <p className="hidden sm:block text-white text-sm font-medium font-clash mr-4">
              Follow Us On Social Media
            </p>

            <div className="flex items-center space-x-4">
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
          </div>
        </div>

        {/* Second Container (Links with Accordion for Mobile) */}
        <div className="sm:hidden px-6">
          <Accordion
            variant="shadow"
            selectionMode="single"
            className="w-full max-w-7xl"
          >
            <AccordionItem title="Our Pages" className="text-white font-sora">
              <Footer.LinkGroup col className="mb-2">
                <Footer.Link href="/services" className="font-sora font-normal">
                  Services
                </Footer.Link>
                <Footer.Link href="/about" className="font-sora font-normal">
                  About
                </Footer.Link>
                <Footer.Link href="/get-quote" className="font-sora font-normal">
                  Quote
                </Footer.Link>
                <Footer.Link href="/contact" className="font-sora font-normal">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </AccordionItem>

            <AccordionItem title="Services" className="text-white font-sora">
              <Footer.LinkGroup col className="mb-2">
                <Footer.Link href="/services/custom-software-development" className="font-sora font-normal">
                  Custom Software Development
                </Footer.Link>
                <Footer.Link href="/services/consulting" className="font-sora font-normal">
                  Consulting & Transformation
                </Footer.Link>
                <Footer.Link href="/services/website-design" className="font-sora font-normal">
                  Website Design
                </Footer.Link>
              </Footer.LinkGroup>
            </AccordionItem>

            <AccordionItem title="Projects" className="text-white font-sora">
              <Footer.LinkGroup col className="mb-2">
                {/* Create and take user to portfolio page */}
                <Footer.Link href="/portfolio" className="font-sora font-normal">
                  Our Portfolio
                </Footer.Link>
                {/* Create and take users to all pages section */}
                <Footer.Link href="projects/all-projects" className="font-sora font-normal">
                  All Projects
                </Footer.Link>
                {/* Take user to portfolio page and showcase section */}
                <Footer.Link 
                  href="/portfolio#showcase"
                  className="font-sora font-normal"
                >
                  Recent Projects
                </Footer.Link>
              </Footer.LinkGroup>
            </AccordionItem>

            <AccordionItem title="Legal" className="text-white font-sora">
              <Footer.LinkGroup col className="mb-2">
                <Footer.Link href="/privacy-policy" className="font-sora font-normal">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="/terms-and-conditions" className="font-sora font-normal">
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link href="/cookie-policy" className="font-sora font-normal">
                  Cookie Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-4 sm:gap-8 max-w-7xl w-full mx-auto px-40">
          <div>
            <Footer.Title title="Our Pages" className="text-white font-sora" />
            <Footer.LinkGroup col>
              <Footer.Link href="/services" className="font-sora font-normal">
                Services
              </Footer.Link>
              <Footer.Link href="/about" className="font-sora font-normal">
                About
              </Footer.Link>
              <Footer.Link href="/get-quote" className="font-sora font-normal">
                Quote
              </Footer.Link>
              <Footer.Link href="/contact" className="font-sora font-normal">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Services" className="text-white font-sora" />
            <Footer.LinkGroup col>
              <Footer.Link href="/services/custom-software-development" className="font-sora font-normal">
                Custom Software Development
              </Footer.Link>
              <Footer.Link href="/services/consulting" className="font-sora font-normal">
                Consulting & Transformation
              </Footer.Link>
              <Footer.Link href="/services/website-design" className="font-sora font-normal">
                Website Design
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Projects" className="text-white font-sora" />
            <Footer.LinkGroup col>
              {/* Create and take user to portfolio page */}
              <Footer.Link href="/portfolio" className="font-sora font-normal">
                Our Portfolio
              </Footer.Link>
              {/* Create and take users to all pages section */}
              <Footer.Link href="/projects/all-projects" className="font-sora font-normal">
                All Projects
              </Footer.Link>
              {/* Take user to portfolio page and showcase section */}
              <Footer.Link 
                href="/portfolio#showcase"
                className="font-sora font-normal"
              >
                Recent Projects
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-white font-sora" />
            <Footer.LinkGroup col>
              <Footer.Link href="/privacy-policy" className="font-sora font-normal">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="/terms-and-conditions" className="font-sora font-normal">
                Terms & Conditions
              </Footer.Link>
              <Footer.Link href="/cookie-policy" className="font-sora font-normal">
                Cookie Policy
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className="my-8 border-gray-600" />

        {/* Third Container (Copyright, Version, Legal Links) */}
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-7xl w-full mx-auto px-2">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center sm:absolute sm:left-0 sm:text-left mb-2 sm:mb-0">
            © {new Date().getFullYear()} Deft Point. All Rights Reserved.
          </p>

          {/* Version */}
          <p className="text-sm text-gray-400 font-sora text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2 sm:mb-0">
            Deft Point Consulting
          </p>

          {/* Legal Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 sm:absolute sm:right-0">
            <Footer.Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="/terms-and-conditions" className="text-sm text-gray-400 hover:text-white">
              Terms & Conditions
            </Footer.Link>
            <Footer.Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </Footer.Link>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;