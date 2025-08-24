'use client';

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMenu();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-20">
      <div className="flex justify-center items-center py-3 bg-[#0D4D62] text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Clean your short-term rental without the hassle</p>
        <div className="inline-flex gap-1 items-center">
          <a 
            href="#quote-section" 
            className="flex items-center gap-1 text-white hover:text-white/80 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#quote-section');
            }}
          >
            <p>Get a Free Quote</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
          </a>
        </div>
      </div>
      
      <div className="py-5 bg-[#FCFCFA] relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="CleanKey Logo" width={1024} height={1024} className="h-16 w-16 md:h-20 md:w-20"/>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="h-5 w-5 md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5"/>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a 
                href="#home-section" 
                className="hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home-section');
                }}
              >
                Home
              </a>
              <a 
                href="#services-section" 
                className="hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#services-section');
                }}
              >
                How it Works
              </a>
              <a 
                href="#about-section" 
                className="hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#about-section');
                }}
              >
                About
              </a>
              <a 
                href="#quote-section" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#quote-section');
                }}
              >
                Get a Free Quote
              </a>
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden absolute top-full left-0 right-0 bg-[#FCFCFA] border-t border-gray-200 shadow-lg
          transform transition-all duration-300 ease-in-out origin-top
          ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
        `}>
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home-section" 
                className="text-black/60 hover:text-black transition-colors py-2 border-b border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home-section');
                }}
              >
                Home
              </a>
              <a 
                href="#services-section" 
                className="text-black/60 hover:text-black transition-colors py-2 border-b border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#services-section');
                }}
              >
                How it Works
              </a>
              <a 
                href="#about-section" 
                className="text-black/60 hover:text-black transition-colors py-2 border-b border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#about-section');
                }}
              >
                About
              </a>
              <a 
                href="#quote-section" 
                className="btn btn-primary mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#quote-section');
                }}
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        </div>
        
        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/20 z-[-1]"
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  );
};