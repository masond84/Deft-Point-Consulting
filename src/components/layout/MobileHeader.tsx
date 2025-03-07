import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="block md:hidden">
      <Dropdown>
        <DropdownTrigger>
          <Button 
            isIconOnly
            variant="light"
            className="bg-transparent"
          >
            <Menu className="w-6 h-6 text-white" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Mobile navigation"
          className="w-72 bg-glass-bg-2 text-white p-4 rounded-2xl shadow-glassmorphism backdrop-blur-glass border border-glassmorphism transition-all duration-500"
        >
          <DropdownItem
            key="home"
            className="py-3 hover:bg-white/10 rounded-lg text-bold font-clash tracking-widest transition-colors"
            onPress={() => navigate('/')}
          >
            Home
          </DropdownItem>
          <DropdownItem
            key="services"
            className="py-3 hover:bg-white/10 rounded-lg text-bold font-clash tracking-widest transition-colors"
            onPress={() => navigate('/services')}
          >
            Services
          </DropdownItem>
          <DropdownItem
            key="portfolio"
            className="py-3 hover:bg-white/10 rounded-lg text-bold font-clash tracking-widest transition-colors"
            onPress={() => navigate('/portfolio')}
          >
            Portfolio
          </DropdownItem>
          <DropdownItem
            key="about"
            className="py-3 hover:bg-white/10 rounded-lg text-bold font-clash tracking-widest transition-colors"
            onPress={() => navigate('/about')}
          >
            About
          </DropdownItem>
          <DropdownItem
            key="contact"
            className="py-3 hover:bg-white/10 rounded-lg text-bold font-clash tracking-widest transition-colors"
            onPress={() => navigate('/contact')}
          >
            Contact
          </DropdownItem>
          <DropdownItem
            key="get-quote"
            className="mt-2 py-3 bg-gradient-to-br font-bold font-clash tracking-widest from-[#4fadff] via-[#6dc1ff] to-[#0e73e6] rounded-lg text-center"
            onPress={() => navigate('/get-quote')}
          >
            Let's Meet
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MobileNav;