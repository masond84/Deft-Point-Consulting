import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import HeaderBrand from './HeaderBrand';
import MobileNav from '../../components/layout/MobileHeader';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="bg-transparent backdrop-blur-sm shadow-sm border border-gray-300 rounded-full max-w-7xl mx-auto px-4 sm:px-6 py-2 absolute top-0 left-0 right-0 z-50 mt-6"
    >
      {/* Logo and Brand Name */}
      <HeaderBrand />

      {/* Mobile Navigation */}
      <NavbarContent justify="end">
        <NavbarItem className="md:hidden">
          <MobileNav />
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent 
        className="ml-auto px-6 py-2 bg-gray-200/40 rounded-full items-center space-x-4 hidden md:flex"
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
            className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash"
          >
            Services
          </Link>        
        </NavbarItem>
        
        <NavbarItem>
          <Link
            href="/portfolio"
            className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash"
          >
            Portfolio
          </Link>        
        </NavbarItem>
        
        {/* Dropdown for About */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                onPress={() => navigate('/about')}
                className="px-4 py-2 bg-[#1E1E1E] rounded-full text-white text-sm hover:bg-[#1E1E1E]/90 transition-colors font-clash"
              >
                Our Mission
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="About Dropdown"
              variant="light"
              className="bg-glass-bg-2 border border-glass-bg shadow-glass text-white rounded-lg w-full p-4 font-clash"
              style={{
                minWidth: '100%',
              }}
            >
              <DropdownItem key="about" className='text-center' onPress={() => navigate('/about')}>
                About
              </DropdownItem>
              <DropdownItem key="contact" className='text-center' onPress={() => navigate('/contact')}>
                Contact
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        
        {/* Highlighted "Let's Meet" Button */}
        <NavbarItem>
          <Button
            as={Link}
            href="/get-quote"
            className="px-4 py-2 
            text-gray-950 text-sm rounded-full border border-glass-bg
            hover:bg-gradient-to-br hover:from-[#4fadff]/95 hover:via-[#6dc1ff]/85 hover:to-[#0e73e6b9]
            transition-colors font-semibold tracking-wide font-clash"
            style={{
              backgroundImage: `linear-gradient(150deg, #4fadff 20%, #6dc1ff 75%, #0e73e6b9 100%)`,
            }}
          >
            Let's Meet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;