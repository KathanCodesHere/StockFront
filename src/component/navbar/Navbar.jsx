import React, { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import logo from '../../assets/Logo (1).png';
import { Link } from "react-router-dom";
import DropdownLink from './DropdownLink';

const Logo = () => (
  <Link to={'/'}>
    <img
      src={logo}
      alt="Logo"
      className="w-[214px] h-[80px] object-contain cursor-pointer"
    />
  </Link>
);

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

// ✅ FIXED DROPDOWN COMPONENT


const NavItem = ({ name, href }) => (
  // <a
  //   href={href}
  //   className="px-4 py-2 text-[#d1d1d1] hover:text-[#FFD447] transition-colors duration-200 font-medium"
  // >
  <Link 
    to={href}
    className="px-4 py-2 text-[#d1d1d1] hover:text-[#FFD447] transition-colors duration-200 font-medium"
  >
    {name}
  </Link>
  // </a>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0c0c0c] shadow-md sticky top-0 z-50 border-b border-[#1b1b1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">

        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.name} {...link} />
          ))}

          <DropdownLink
            name="Back Office"
            links={[
              { name: 'Login', href: '/login' },
              { name: 'Sign Up', href: '/signup' },
            ]}
          />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          {/* <a
            href="/registration"
            className="ml-6 px-6 py-3 bg-gradient-to-r from-[#F5D37E] to-[#E0A627] text-[#0d0d0d] text-sm font-semibold uppercase rounded-md shadow hover:opacity-90 transition-transform hover:scale-105"
          > */}
          <Link 
            to={'/registration'}
            className="ml-6 px-6 py-3 bg-gradient-to-r from-[#F5D37E] to-[#E0A627] text-[#0d0d0d] text-sm font-semibold uppercase rounded-md shadow hover:opacity-90 transition-transform hover:scale-105"
          >
          
            NEW REGISTRATION
          </Link>
          {/* </a> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#FFD447] p-2 rounded hover:bg-[#222]"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111] border-t border-[#222] px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            // <a
            //   key={`mobile-${link.name}`}
            //   href={link.href}
            //   className="block text-[#d1d1d1] text-lg hover:text-[#FFD447]"
            //   onClick={() => setIsMobileMenuOpen(false)}
            // >
            <Link 
              to={link.href}
              className="block text-[#d1d1d1] text-lg hover:text-[#FFD447]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
            // </a>
          ))}

          <div className="pt-2">
            <p className="text-[#FFD447] font-medium">Back Office</p>
            <div className="pl-4 space-y-2 mt-1">
              {/* <a href="/login" className="text-[#bfbfbf] hover:text-[#FFD447]">Login</a> */}
              <Link to="/login" className="text-[#bfbfbf] hover:text-[#FFD447]">Login</Link>
              <Link to="/signup" className="text-[#bfbfbf] hover:text-[#FFD447]">Sign Up</Link>
            </div>
          </div>

          <Link
            to="/registration"
            className="block text-center px-4 py-2 bg-gradient-to-r from-[#F5D37E] to-[#E0A627] text-[#0d0d0d] font-semibold rounded-md shadow hover:opacity-90"
          >
            NEW REGISTRATION
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
