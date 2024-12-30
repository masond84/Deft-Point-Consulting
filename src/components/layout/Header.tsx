import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react';
import LogoIcon from '../../assets/LogoIcon';

const Header: React.FC = () => {
  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="bg-transparent backdrop-blur-sm shadow-sm border border-gray-300 rounded-full max-w-7xl mx-auto px-6 py-2 absolute top-0 left-0 right-0 z-50 mt-6"
    >
      {/* Logo and Brand Name */}
      <Link href="/">
      <NavbarBrand className='flex items-center space-x-2 bg-[#1E1E1E]/30 rounded-full px-6 py-2 max-w-fit'>
        <LogoIcon className="h-8 w-8" />
        <span className="text-xl font-bold text-white font-clash">Deft Point</span>
      </NavbarBrand>
      </Link>

      {/* Navigation Links */}
      <NavbarContent 
        className="ml-auto px-6 py-2 bg-gray-200/40 rounded-full flex items-center space-x-4"
      >
        <NavbarItem>
          <Link 
            href="/" 
            className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash"
          >
              Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/services"
            className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash">
            Services
          </Link>        
        </NavbarItem>
        
        <NavbarItem>
          <Link
            href="/portfolio"
            className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash">
            Portfolio
          </Link>        
        </NavbarItem>
        
        <NavbarItem>
          <Link
            href="/about"
            className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash">
            About
          </Link>
        </NavbarItem>
        
        {/* Highlighted "Let's Meet" Button */}
        <NavbarItem>
          <Button
            as={Link}
            href="/contact"
            className="px-4 py-2 bg-[#0073e6]/80 text-black text-sm rounded-full hover:bg-[#0073e6]/70 transition-colors font-clash"
          >
            Let's Meet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
