import { Footer } from 'flowbite-react';
import { Button } from '@nextui-org/react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import DeftBirdIcon from "../../assets/logo/DeftBirdIcon";

const CustomFooter: React.FC = () => {
  return (
    <Footer container className='!rounded-none !w-full bg-[#1F1F1F] text-white py-12'>
      <div className="flex flex-col space-y-8 w-full ">
        {/* First Container */}
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto px-6">
          {/* Logo */}
          <div className="h-10 w-10 sm:h-10 sm:w-10 scale-150 relative fade-in">
              <DeftBirdIcon className="h-full w-full" />
          </div>

          {/* Social Media Section */}
          <div className="flex items-center space-x-4">
            {/* Paragraph */}
            <p className="hidden sm:block text-white text-sm font-medium font-clash mr-4">
              Follow Us On Social Media
            </p>

            <div className="flex items-center space-x-4">
              {/* LinkedIn Button */}
              <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                <BsLinkedin className="text-white text-xl" />
              </Button>              
              {/* Twitter Button */}
              <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                <BsTwitter className="text-white text-xl" />
              </Button>
              {/* Facebook Button */}
              <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                <BsFacebook className="text-white text-xl" />
              </Button>
              {/* Instagram Button */}
              <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                <BsInstagram className="text-white text-xl" />
              </Button>
            </div>
          </div>
        </div>

        {/* Second Container (Links) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-7xl w-full mx-auto px-40">
          {/* About */}
          <div>
            <Footer.Title title="About Us" className='text-white font-sora' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='font-sora font-normal'>About</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Our Team</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Careers</Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Services */}
          <div>
            <Footer.Title title="Services" className='text-white font-sora'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='font-sora font-normal'>Web Design</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Website Development</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>App Development</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Digital Marketing</Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Projects */}
          <div>
            <Footer.Title title="Projects" className='text-white font-sora'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='font-sora font-normal'>Project 1</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Project 2</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Project 3</Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Legal */}
          <div>
            <Footer.Title title="Legal" className='text-white font-sora'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='font-sora font-normal'>Privacy Policy</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Terms & Conditions</Footer.Link>
              <Footer.Link href="#" className='font-sora font-normal'>Cookie Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className="my-8 border-gray-600" />

        {/* Third Container (Copyright, Version, Legal Links) */}
        <div className="relative flex items-center max-w-7xl w-full mx-auto px-2">
          {/* Copyright */}
          <p className="absolute left-0 text-sm text-gray-400">
            © {new Date().getFullYear()} Deft Point. All Rights Reserved.
          </p>

          {/* Version */}
          <p className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-400 font-sora">
            Deft Point Consulting
          </p>

          {/* Legal Links */}
          <div className="absolute right-0 flex space-x-6">
            <Footer.Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Footer.Link>
            <Footer.Link href="#" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Footer.Link>
            <Footer.Link href="#" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Footer.Link>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;